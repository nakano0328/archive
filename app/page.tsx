"use client";

import Head from "next/head";
import React from "react";
import Card from "./Card"; // HeaderとFooterはlayout.tsxで読み込まれるので不要

// メタデータの定義
export const metaData = {
  title: "ホーム",
  description: "ホームです",
  updatedAt: "2024-10-08",
};

const mockData = [
  {
    id: 1,
    title: "線形代数",
    description: "行列、ベクトルなど",
    icon: "→",
    backgroundColor: "#f8d7da",
    link: "/linear_algebra",
  },
];

const Home = () => {
  return (
    <div>
      <Head>
        <title>数学の探求</title>
      </Head>

      <main
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "20px",
          gap: "20px",
        }}
      >
        {mockData.length > 0 ? (
          mockData.map((item) => (
            <div
              key={item.id}
              style={{ flexBasis: "30%", boxSizing: "border-box" }}
            >
              <Card
                title={item.title}
                description={item.description}
                icon={item.icon}
                backgroundColor={item.backgroundColor}
                link={item.link} // 解説ページへのリンクを渡す
              />
            </div>
          ))
        ) : (
          <p>該当する結果が見つかりませんでした。</p>
        )}
      </main>
    </div>
  );
};

export default Home;
