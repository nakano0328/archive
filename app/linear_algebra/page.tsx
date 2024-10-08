"use client";

import Breadcrumb from "@/app/components/Breadcrumb";
import { useEffect, useState } from "react";

interface ServerData {
  name: string;
  title: string;
  description: string;
  updatedAt: string;
  path?: string;
}

// メタデータをコンポーネント外で定義
const metaData = {
  title: "線形代数",
  description: "線形代数のコンテンツページです",
  updatedAt: "2024-10-08",
} as const;

// サーバーからデータを取得する関数
const fetchServerData = async (): Promise<ServerData[]> => {
  try {
    const response = await fetch("/api/linear_algebra/data");
    if (!response.ok) {
      throw new Error("Failed to fetch data from API");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching server data:", error);
    return [];
  }
};

export default function LinearAlgebraPage() {
  const [serverData, setServerData] = useState<ServerData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchServerData();
        const enrichedData = data.map((dir) => ({
          ...dir,
          path: `/linear_algebra/${dir.name}`,
        }));
        setServerData(enrichedData);
      } catch {
        setError("データの取得に失敗しました。");
      }
    };

    fetchData();
  }, []);


  return (
    <main className="p-5">
      <Breadcrumb
        serverData={serverData.reduce<Record<string, { title: string }>>(
          (acc, dir) => {
            acc[dir.name] = { title: dir.title };
            return acc;
          },
          {}
        )}
        currentTitle="Linear Algebra" // メインタイトルは英語で表示
        breadcrumbPaths={[
          { path: "/", title: "ホーム" },
          { path: "/linear_algebra", title: "線形代数" }
        ]} // パス部分は日本語
      />

      <h1 className="text-4xl text-center bg-red-100 p-5">
        {metaData.title}
      </h1>

      <p className="my-4">{metaData.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : serverData.length > 0 ? (
          serverData.map((dir) => (
            <div
              key={dir.name}
              className="border rounded-lg overflow-hidden shadow-md relative"
            >
              <a
                href={dir.path}
                className="block text-inherit no-underline p-4"
              >
                <h2 className="text-xl mt-2">{dir.title}</h2>
                <p className="mb-8">{dir.description}</p>
                <div className="absolute bottom-2 right-2 text-sm text-gray-500">
                  最終更新日: {new Date(dir.updatedAt).toLocaleDateString()}
                </div>
              </a>
            </div>
          ))
        ) : (
          <p>データがありません。</p>
        )}
      </div>
    </main>
  );
}
