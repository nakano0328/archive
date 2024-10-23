"use client";

import React, { useEffect, useState } from "react";
import * as d3 from "d3-fetch";

interface CommentData {
  Name: string;
  Mail: string;
  Timestamp: string;
  Comments: string;
  Path: string; // E列のURLやパスを格納
  isPublic: string; // 公開フラグの列
}

// URLの正規化関数を追加
const normalizeUrl = (url: string) => {
  // パス名のみを取得し、末尾のスラッシュを除去
  let normalizedUrl = url.replace(/\/$/, "");
  return normalizedUrl;
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
          "https://docs.google.com/spreadsheets/d/1kRxLHAa49oQGuy0l9pezKxIXnkRFhH8MP7wL0grFgA8/export?format=csv&range=A3:E"
        );

        if (currentUrl) {
          // データを CommentData 型にマッピングし、フィルタリング
          const formattedData = data.map((row) => ({
            Name: row["Name"] || "", // CSVの列名に対応
            Mail: row["Mail"] || "",
            Timestamp: row["Timestamp"] || "",
            Comments: row["Comments"] || "",
            Path: row["Path"] || "", // E列に相当するパスを取得
            isPublic: row["isPublic"] || "0", // 公開フラグを取得（デフォルトは非公開）
          }));

          // フィルタリング処理：isPublicが"1"かつPathが一致するもののみ表示
          const filteredData = formattedData.filter(
            (comment) => comment.Path === currentUrl && comment.isPublic === "1"
          );

          setComments(filteredData);
        }
      } catch (err) {
        setError("データの取得に失敗しました");
      }
    };

    if (currentUrl) {
      fetchComments(); // currentUrlが設定された後にデータを取得
    }
  }, [currentUrl]); // currentUrlの変更に対応

  if (error) {
    return <div>{error}</div>;
  }

  if (!currentUrl) {
    return <div>現在のURLを取得中...</div>; // currentUrlがまだ取得されていない場合の表示
  }

  if (comments.length === 0) {
    return <div>一致するコメントはありません。</div>;
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
