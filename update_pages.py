import os
import pandas as pd
import openai
import datetime
import difflib
from datetime import datetime, timedelta
from config import *

# OpenAI API クライアント
client = openai.Client(api_key=OPENAI_API_KEY)


# === Googleスプレッドシートからデータを取得 ===
def load_and_process_spreadsheet(url):
    """スプレッドシートを読み込んで処理する関数"""
    try:
        dfs = pd.read_html(url, encoding="utf-8")
        df = dfs[0]

        # 列名を設定
        df.columns = ["No", "Timestamp", "Name", "Mail", "Comments", "Path", "Flag"]

        # 不要な行を削除
        df = df.drop([0, 1, 2])

        # 必要な列を選択
        df = df[["Timestamp", "Comments", "Path", "Flag"]].copy()

        # Timestamp を datetime に変換
        df["Timestamp"] = pd.to_datetime(
            df["Timestamp"], format="%Y/%m/%d %H:%M:%S", errors="coerce"
        )

        # Flagが1の行だけを選択
        df = df[df["Flag"] == "1"]

        # 直近3日以内のデータを抽出
        now = datetime.now()
        df = df[df["Timestamp"] > (now - timedelta(days=3))]

        return df

    except Exception as e:
        print(f"エラーが発生しました: {e}")
        return None


# === GPT APIを使ってコメント要約・修正指示を取得 ===
def get_gpt_summary_and_instructions(comments):
    """GPTを使ってコメントを要約し、修正指示を取得"""

    prompt = f"""以下は、Webページの修正案としての複数のコメントです。
これらを踏まえ、全体の要約と、対象のtsxファイルに対してどのような修正を行うべきか、具体的な指示を日本語で示してください。

---
{comments}
---

指示:
"""

    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "system",
                    "content": "あなたはフロントエンド開発の専門家です。",
                },
                {"role": "user", "content": prompt},
            ],
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        print(f"GPT APIエラー: {e}")
        return None


# === GPT APIを使ってtsxファイルを修正 ===
def update_tsx_file_content(file_path, instructions):
    """tsxファイルの内容を修正"""

    try:
        with open(file_path, "r", encoding="utf-8") as f:
            original_content = f.read()
    except FileNotFoundError:
        print(f"ファイルが見つかりません: {file_path}")
        return None, None

    prompt = f"""以下は、Webページを構成するtsxファイルの元の内容です。
次に示す修正指示に従って、ファイル全体を修正してください。
以下の制約条件を必ず守ってください：
1. style属性やCSSに関する部分は一切変更しないでください
2. コンポーネントのスタイリングに関する記述は元のまま保持してください
3. Reactコンポーネントとして有効な状態を維持してください

【元のファイル内容】
--------------------
{original_content}
--------------------

【修正指示】
{instructions}

【修正後のtsxファイルの全内容のみを出力してください】"""

    try:
        response = client.chat.completions.create(
            model="o3-mini",
            messages=[
                {
                    "role": "system",
                    "content": "あなたはReactのエキスパートです。スタイリングに関する変更は行わず、機能とコンテンツの修正のみを行ってください。",
                },
                {"role": "user", "content": prompt},
            ],
        )
        return original_content, response.choices[0].message.content.strip()
    except Exception as e:
        print(f"GPT APIエラー: {e}")
        return None, None


# === 差分を表示する関数 ===
def show_diff(original, modified):
    """元のファイルと変更後のファイルの差分を表示"""
    original_lines = original.splitlines(keepends=True)
    modified_lines = modified.splitlines(keepends=True)

    diff = difflib.unified_diff(
        original_lines, modified_lines, fromfile="Before", tofile="After", lineterm=""
    )
    return "".join(diff)


# === メイン処理 ===
def main():
    print("Google Sheets からデータ取得中...")
    df = load_and_process_spreadsheet(SPREADSHEET_URL)

    if df is None or df.empty:
        print("対象データがありません。")
        return

    # PathごとにCommentsを統合
    grouped_data = df.groupby("Path")["Comments"].apply("\n".join).to_dict()

    for file_path, comments in grouped_data.items():
        # .tsxを追加
        file_path = f"{file_path}.tsx" if not file_path.endswith(".tsx") else file_path

        print(f"\n---\n処理中のファイル: {file_path}")

        print("GPT に要約と修正指示を依頼中...")
        instructions = get_gpt_summary_and_instructions(comments)

        if not instructions:
            print(f"GPTの要約・指示が取得できませんでした: {file_path}")
            continue

        print("\n取得した修正指示:\n", instructions)

        full_path = os.path.abspath(file_path)

        print("\ntsxファイルを修正中...")
        original_content, updated_content = update_tsx_file_content(
            full_path, instructions
        )

        if not updated_content:
            print(f"tsxファイルの修正に失敗しました: {file_path}")
            continue

        # 変更内容をdiff形式で表示
        print("\n変更内容のプレビュー:")
        diff_result = show_diff(original_content, updated_content)
        print(diff_result)

        # 人間が適用するかどうか判断
        while True:
            apply_changes = input("\n変更を適用しますか？ (Y/N): ").strip().lower()
            if apply_changes in ["y", "n"]:
                break

        if apply_changes == "y":
            try:
                with open(full_path, "w", encoding="utf-8") as f:
                    f.write(updated_content)
                print(f"✅ 更新完了: {file_path}")
            except Exception as e:
                print(f"❌ ファイル書き込みエラー: {e}")
        else:
            print(f"⏩ {file_path} の変更は適用されませんでした。")


if __name__ == "__main__":
    main()
