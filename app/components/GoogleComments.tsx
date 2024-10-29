"use client";

import React, { useEffect, useState } from "react";
import * as d3 from "d3-fetch";

interface CommentData {
  Name: string;
  Mail: string;
  Timestamp: string;
  Comments: string;
  Path: string; // E列のパスを格納
  Flag: string; // 公開フラグの列
}

// URLの正規化関数を追加
const normalizeUrl = (url: string) => {
  // パス名のみを取得し、末尾のスラッシュを除去、クエリパラメータを無視
  let normalizedUrl = url.split("?")[0].replace(/\/$/, "");

  // 正規化後に'/nextjs/'で始まらない場合は'/nextjs/'を追加
  if (!normalizedUrl.startsWith("/nextjs/")) {
    normalizedUrl = `/nextjs${normalizedUrl}`;
  }

  return normalizedUrl;
};

// パスが'/nextjs/'で始まらない場合に追加する関数
const addNextJsPrefix = (path: string) => {
  if (!path.startsWith("/nextjs/")) {
    return `/nextjs${path}`;
  }
  return path;
};

const GoogleComments: React.FC = () => {
  const [comments, setComments] = useState<CommentData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentUrl, setCurrentUrl] = useState<string | null>(null); // 初期状態はnull

  useEffect(() => {
    // クライアントサイドでのみ実行される
    if (typeof window !== "undefined") {
      setCurrentUrl(normalizeUrl(window.location.pathname)); // パス名のみを正規化して現在のURLを設定
    }
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const data = await d3.csv(
          "https://docs.google.com/spreadsheets/d/1kRxLHAa49oQGuy0l9pezKxIXnkRFhH8MP7wL0grFgA8/export?format=csv&range=A3:F"
        );

        if (currentUrl) {
          // データを CommentData 型にマッピングし、公開設定をチェック
          const formattedData = data.map((row) => {
            return {
              Name: row["Name"] || "", // CSVの列名に対応
              Mail: row["Mail"] || "",
              Timestamp: row["Timestamp"] || "",
              Comments: row["Comments"] || "",
              Path: addNextJsPrefix(row["Path"] || ""), // E列に相当するパスを取得
              Flag: row["Flag"] || "", // 公開フラグをそのまま取得（デフォルト値なし）
            };
          });

          // フィルタリング処理：Flagが"1"かつPathが一致するもののみ表示
          const filteredData = formattedData.filter(
            (comment) =>
              normalizeUrl(comment.Path) === currentUrl && comment.Flag === "1"
          );

          setComments(filteredData);
        }
      } catch {
        setError("データの取得に失敗しました");
      }
    };

    if (currentUrl) {
      fetchComments(); // currentUrlが設定された後にデータを取得
    }
  }, [currentUrl]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!currentUrl) {
    return <div>現在のURLを取得中...</div>; // currentUrlがまだ取得されていない場合の表示
  }

  if (comments.length === 0) {
    return <div>一致する公開コメントはありません。</div>;
  }

  return (
    <div id="comments">
      {comments.map((comment, index) => (
        <div key={index}>
          {index + 1} 名前: {comment.Name} {comment.Timestamp}
          <pre>{comment.Comments}</pre>
        </div>
      ))}
    </div>
  );
};

export default GoogleComments;
