"use client";

import React from "react";
import Card from "./Card";

// カードデータの型定義
interface CardData {
  id: number;
  title: string;
  description: string;
  icon: string;
  backgroundColor: string;
  link: string;
}

// モックデータ
const mockData: CardData[] = [
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

export default function Page() {
  return (
    <div>
      <main className="flex flex-wrap justify-center p-5 gap-5">
        {mockData.length > 0 ? (
          mockData.map((item) => (
            <div
              key={item.id}
              className="flex-[0_1_calc(33.333%-1rem)] box-border min-w-[300px]"
            >
              <Card
                title={item.title}
                description={item.description}
                icon={item.icon}
                backgroundColor={item.backgroundColor}
                link={item.link}
              />
            </div>
          ))
        ) : (
          <p>該当する結果が見つかりませんでした。</p>
        )}
      </main>
    </div>
  );
}