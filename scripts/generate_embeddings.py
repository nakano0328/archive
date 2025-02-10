import os
import json
import openai
from dotenv import load_dotenv

# .env.localファイルから環境変数を読み込む
load_dotenv(".env.local")

# 環境変数から設定を取得
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

if not OPENAI_API_KEY:
    raise ValueError(
        "OPENAI_API_KEYが認証できません。.env.localファイルを確認してください。"
    )

# OpenAI API クライアントの初期化
client = openai.OpenAI(api_key=OPENAI_API_KEY)

# 埋め込み対象のディレクトリ
DB_DIR = "data/linear_algebra"
OUTPUT_FILE = "data/embeddings.json"

# txt ファイルをリスト化
file_names = [f for f in os.listdir(DB_DIR) if f.endswith(".txt")]

# 埋め込みベクトルを保存する辞書
embeddings = {}

for file_name in file_names:
    file_path = os.path.join(DB_DIR, file_name)

    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # OpenAI APIで埋め込みを取得（新しい API 形式）
    response = client.embeddings.create(
        model="text-embedding-ada-002",
        input=content
    )

    embeddings[file_name] = response.data[0].embedding

# JSON に保存
with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
    json.dump(embeddings, f, indent=2)

print(f"✅ {len(embeddings)} 件の埋め込みデータを {OUTPUT_FILE} に保存しました！")
