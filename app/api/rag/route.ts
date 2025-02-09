// app/api/rag/route.ts
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import OpenAI from "openai";

// API キーの存在確認
const API_KEY = process.env.OPENAI_API_KEY;

if (!API_KEY) {
  throw new Error(
    "OPENAI_API_KEY が設定されていません。.env ファイルで設定してください。"
  );
}

// OpenAI API 設定
const openai = new OpenAI({
  apiKey: API_KEY,
});

const dbDir = path.join(process.cwd(), "data", "linear_algebra");
const embeddingFile = path.join(process.cwd(), "data", "embeddings.json");

// コサイン類似度計算関数
function cosineSimilarity(vecA: number[], vecB: number[]): number {
  const dotProduct = vecA.reduce((sum, val, i) => sum + val * vecB[i], 0);
  const normA = Math.sqrt(vecA.reduce((sum, val) => sum + val ** 2, 0));
  const normB = Math.sqrt(vecB.reduce((sum, val) => sum + val ** 2, 0));
  return dotProduct / (normA * normB);
}

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("q")?.trim().toLowerCase();

  if (!query) {
    return NextResponse.json(
      { message: "検索クエリが必要です。" },
      { status: 400 }
    );
  }

  if (!fs.existsSync(embeddingFile)) {
    return NextResponse.json(
      { message: "埋め込みデータがありません。" },
      { status: 500 }
    );
  }

  const embeddings = JSON.parse(fs.readFileSync(embeddingFile, "utf8"));

  // クエリを埋め込み化
  const response = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: query,
  });

  const queryEmbedding = response.data[0].embedding;

  // 最も類似度の高いファイルを検索
  let bestMatch = null;
  let bestScore = -1;

  for (const fileName in embeddings) {
    const score = cosineSimilarity(queryEmbedding, embeddings[fileName]);
    if (score > bestScore) {
      bestScore = score;
      bestMatch = fileName;
    }
  }

  if (!bestMatch) {
    return NextResponse.json(
      { message: "該当する情報が見つかりませんでした。" },
      { status: 404 }
    );
  }

  // マッチした txt の内容を取得
  const filePath = path.join(dbDir, bestMatch);
  const content = fs.readFileSync(filePath, "utf8").substring(0, 200);

  // ファイル名から該当ページのURLを生成
  const slug = bestMatch.replace(".txt", "");
  const link = `/linear_algebra/${slug}`;

  return NextResponse.json({
    answer: `${content}...\n\n詳しくは [こちら](${link}) を見て下さい。`,
  });
}
