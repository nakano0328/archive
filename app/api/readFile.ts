// pages/api/readFile.ts
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page, fileName } = req.query; // ページとファイル名を動的に取得

  if (typeof page !== "string" || typeof fileName !== "string") {
    return res.status(400).json({ error: "Invalid page or file name" });
  }

  // 動的なパスを生成
  const filePath = path.join(process.cwd(), "app", page, fileName);

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    res.status(200).json({ content: fileContent });
  } catch (error) {
    res.status(404).json({ error: "File not found" });
  }
}
