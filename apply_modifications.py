"""
指定されたtsxファイルを読み込み、外部から与えた修正指示に基づいて
GPT API を利用しファイル全体を修正するスクリプトです。
修正後の内容の差分を表示し、ユーザー確認後に変更を反映します。
"""

import os
import openai
import difflib
from config import OPENAI_API_KEY
import datetime
import re
from dotenv import load_dotenv

# .env.localファイルから環境変数を読み込む
load_dotenv(".env.local")

# 環境変数から設定を取得
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

if not OPENAI_API_KEY:
    raise ValueError(
        "必要な環境変数が設定されていません。.env.localファイルを確認してください。"
    )

# OpenAI API クライアントの初期化
client = openai.Client(api_key=OPENAI_API_KEY)


def update_tsx_file_content(file_path, instructions):
    """元のtsxファイルの内容と修正指示から、GPT API を使って修正後の内容を取得する"""
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
4. 新たに関数を定義しないでください

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


def show_diff(original, modified):
    """元の内容と修正後の内容の差分を生成して返す"""
    original_lines = original.splitlines(keepends=True)
    modified_lines = modified.splitlines(keepends=True)

    diff = difflib.unified_diff(
        original_lines, modified_lines, fromfile="Before", tofile="After", lineterm=""
    )
    return "".join(diff)


def get_latest_suggest_dir():
    """suggestディレクトリ内の最新の日付ディレクトリを取得する"""
    suggest_dir = "suggest"
    if not os.path.exists(suggest_dir):
        return None

    date_dirs = [
        d
        for d in os.listdir(suggest_dir)
        if os.path.isdir(os.path.join(suggest_dir, d))
    ]
    if not date_dirs:
        return None

    # 日付の降順でソートして最新のディレクトリを返す
    latest_dir = sorted(date_dirs, reverse=True)[0]
    return os.path.join(suggest_dir, latest_dir)


def get_modification_files(suggest_dir):
    """指定されたディレクトリ内のすべての.txtファイルを再帰的に取得する"""
    modification_files = []
    for root, _, files in os.walk(suggest_dir):
        for file in files:
            if file.endswith(".txt"):
                full_path = os.path.join(root, file)
                # suggestディレクトリからの相対パスを取得
                relative_path = os.path.relpath(full_path, suggest_dir)
                modification_files.append((full_path, relative_path))
    return modification_files


def update_metadata_date(directory, filename):
    """metadata.tsファイルの対象キーの lastUpdated を今日の日付に更新する

    対象の metadata.ts は以下のような構造を想定：

      export const metadata: MetadataCollection = {
        autoencoder: {
          title: "XXX",
          tabtitle: `XXX - ${siteTitle}`,
          description: "YYY",
          lastUpdated: "YYYY-MM-DD",
          topic: "machine_learning",
          keywords: ["AAA", "BBB", "CCC"],
        },
      };

    filename が "autoencoder.tsx" の場合、キーは "autoencoder" として検索します。
    """
    metadata_path = os.path.join("app", directory, "metadata.ts")
    if not os.path.exists(metadata_path):
        print(f"metadata.tsファイルが見つかりません: {metadata_path}")
        return False

    try:
        with open(metadata_path, "r", encoding="utf-8") as f:
            content = f.read()

        # ファイル名から拡張子を除去してキーを取得（例："autoencoder.tsx" → "autoencoder"）
        key = filename.replace(".tsx", "")
        today = datetime.date.today().strftime("%Y-%m-%d")

        # 正規表現パターン：
        # 対象キーの部分（例：autoencoder: { ... lastUpdated: "YYYY-MM-DD"）にマッチさせます
        pattern = rf'({re.escape(key)}\s*:\s*\{{[\s\S]*?lastUpdated:\s*")([0-9]{{4}}-[0-9]{{2}}-[0-9]{{2}})(")'
        # 解説：
        # - re.escape(key): キー名（例：autoencoder）をエスケープしてマッチ
        # - \s*:\s*\{ : 「: {」の部分にマッチ
        # - [\s\S]*? : 改行を含む任意の文字列（最短一致）
        # - lastUpdated:\s*" : lastUpdated: " の部分にマッチ
        # - ([0-9]{4}-[0-9]{2}-[0-9]{2}) : YYYY-MM-DD にマッチ（キャプチャグループ）
        # - (" ) : 閉じのダブルクオーテーションにマッチ

        def replace_date(match):
            return match.group(1) + today + match.group(3)

        # DOTALLフラグを付けて改行を含む部分も対象に
        new_content, count = re.subn(pattern, replace_date, content, flags=re.DOTALL)

        if count > 0:
            with open(metadata_path, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"✅ metadata.ts の lastUpdated を更新しました: {key} -> {today}")
            return True
        else:
            print(f"❌ metadata.ts の更新に失敗しました: {key}")
            # デバッグ情報を出力
            print(f"検索キー: {key}")
            print(f"パターン: {pattern}")
            return False

    except Exception as e:
        print(f"❌ metadata.ts の更新中にエラーが発生しました: {e}")
        return False


def main():
    # 最新の修正ディレクトリを取得
    latest_suggest_dir = get_latest_suggest_dir()
    if not latest_suggest_dir:
        print("suggest ディレクトリ内に修正ファイルが見つかりません。")
        return

    # すべての修正ファイルを取得
    modification_files = get_modification_files(latest_suggest_dir)
    if not modification_files:
        print(f"{latest_suggest_dir} 内に修正ファイルが見つかりません。")
        return

    for full_path, relative_path in modification_files:
        try:
            with open(full_path, "r", encoding="utf-8") as f:
                instructions = f.read()
        except Exception as e:
            print(f"修正ファイルの読み込みエラー: {e}")
            continue

        # パスの解析
        # relative_path は "XXX/BBB.txt" の形式
        path_parts = relative_path.split(os.sep)
        if len(path_parts) < 2:
            print(f"無効なファイルパス形式です: {relative_path}")
            continue

        directory = path_parts[0]  # XXX
        filename = path_parts[-1].replace(".txt", ".tsx")  # BBB.tsx
        target_path = os.path.join("app", directory, "contents", filename)

        if not os.path.exists(target_path):
            print(f"対象ファイルが見つかりません: {target_path}")
            continue

        print(f"\n{target_path} の修正を開始します...")
        print(f"修正内容ファイル: {full_path}")

        original_content, updated_content = update_tsx_file_content(
            target_path, instructions
        )
        if not updated_content:
            print("tsxファイルの修正に失敗しました。")
            continue

        print("\n変更内容のプレビュー:")
        diff_result = show_diff(original_content, updated_content)
        print(diff_result)

        while True:
            apply_changes = input("\n変更を適用しますか？ (Y/N): ").strip().lower()
            if apply_changes in ["y", "n"]:
                break

        if apply_changes == "y":
            try:
                with open(target_path, "w", encoding="utf-8") as f:
                    f.write(updated_content)
                print(f"✅ 更新完了: {target_path}")

                # metadata.ts の更新
                update_metadata_date(directory, filename)

            except Exception as e:
                print(f"❌ ファイル書き込みエラー: {e}")
        else:
            print("変更は適用されませんでした。")


if __name__ == "__main__":
    main()
