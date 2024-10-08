"use client";  // クライアントコンポーネントとして宣言

import Breadcrumb from "@/app/components/Breadcrumb";
import { useEffect, useState } from "react";

// メタデータをコンポーネント内で定義
const metaData = {
  title: "線形代数",
  description: "線形代数のコンテンツページです",
  updatedAt: "2024-10-08",
};

// サーバーからデータを取得する関数
const fetchServerData = async () => {
  try {
    const response = await fetch("/api/linear_algebra/data");
    if (!response.ok) {
      throw new Error("Failed to fetch data from API");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching server data:", error);
    return []; // エラー時は空の配列を返す
  }
};

const LinearAlgebraPage = () => {
  const [serverData, setServerData] = useState<
    { name: string; title: string; description: string; updatedAt: string; path?: string }[]
  >([]);

  useEffect(() => {
    // サーバーサイドでディレクトリ情報を取得
    const fetchData = async () => {
      const data = await fetchServerData();

      // データに path プロパティを追加する
      const enrichedData = data.map((dir: { name: string; title: string; description: string; updatedAt: string }) => ({
        ...dir,
        path: `/linear_algebra/${dir.name}`, // ここで path を生成
      }));

      setServerData(enrichedData);
    };
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Breadcrumb
        serverData={serverData.reduce<Record<string, { title: string }>>(
          (acc, dir) => {
            acc[dir.name] = { title: dir.title }; // パンくずリスト用にタイトルを設定
            return acc;
          },
          {}
        )}
      />

      <h1
        style={{
          fontSize: "48px",
          textAlign: "center",
          backgroundColor: "#f8d7da",
          padding: "20px",
        }}
      >
        {metaData.title}
      </h1>

      <p>{metaData.description}</p>

      {/* ページコンテンツをリスト形式で表示 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {serverData.length > 0 ? (
          serverData.map((dir) => (
            <div
              key={dir.name}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                position: "relative", // 右下に最終更新日を固定するため
              }}
            >
              <a
                href={dir.path}  {/* path を使ってリンクを作成 */}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div style={{ padding: "15px" }}>
                  <h2 style={{ fontSize: "20px", marginTop: "10px" }}>
                    {dir.title}
                  </h2>

                  {/* description に marginBottom を追加 */}
                  <p style={{ marginBottom: "20px" }}>{dir.description}</p>

                  {/* 最終更新日を右下に表示 */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                      fontSize: "12px",
                      color: "#888",
                    }}
                  >
                    最終更新日: {new Date(dir.updatedAt).toLocaleDateString()}
                  </div>
                </div>
              </a>
            </div>
          ))
        ) : (
          <p>データがありません。</p>
        )}
      </div>
    </div>
  );
};

export default LinearAlgebraPage;
