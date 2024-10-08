"use client";

import Head from "next/head";
import React, { useState } from "react";
import Card from "./Card"; // HeaderとFooterはlayout.tsxで読み込まれるので不要

const mockData = [
  {
    id: 1,
    title: "線形代数",
    description: "行列、ベクトルなど",
    icon: "→",
    backgroundColor: "#f8d7da",
    link: "/linear_algebra",
  },
  /*{
    id: 2,
    title: "幾何学",
    description: "図形、空間、測量など",
    icon: "△",
    backgroundColor: "#d1c4e9",
    link: "/geometry",
  },
  {
    id: 3,
    title: "微積分",
    description: "極限、微分、積分など",
    icon: "∫",
    backgroundColor: "#cfe2ff",
    link: "/calculus",
  },
  {
    id: 4,
    title: "統計学",
    description: "データ分析、確率論など",
    icon: "σ",
    backgroundColor: "#d4edda",
    link: "/statistics",
  },
  {
    id: 5,
    title: "数論",
    description: "整数論、暗号理論など",
    icon: "π",
    backgroundColor: "#fff3cd",
    link: "/number-theory",
  },
  {
    id: 6,
    title: "離散数学",
    description: "グラフ理論、組み合わせ論など",
    icon: "+",
    backgroundColor: "#ffebcc",
    link: "/discrete-math",
  },*/
];

const Home = () => {
  const [filteredData, setFilteredData] = useState(mockData);

  // 検索ロジック
  const handleSearch = (term: string) => {
    if (term.trim() === "") {
      setFilteredData(mockData); // 空の場合は全データを表示
    } else {
      const lowerCaseTerm = term.toLowerCase();
      const filtered = mockData.filter(
        (item) =>
          item.title.toLowerCase().includes(lowerCaseTerm) ||
          item.description.toLowerCase().includes(lowerCaseTerm)
      );
      setFilteredData(filtered);
    }
  };

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
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
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
