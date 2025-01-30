import React from "react";
import Card1 from "@/app/components/Card1";
import { siteTitle } from "@/app/metadata";

// カードデータの型定義
interface CardData {
  id: number;
  title: string;
  description: string;
  icon: string;
  backgroundColor: string;
  link: string;
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",

  title: `${siteTitle}`,
  description: "ホームです。",
  openGraph: {
    title: `${siteTitle}`,
    description: "ホームです。",
    url: "https://jeonglabo.github.io/nextjs/",
    images: [
      {
        url: `${basePath}/icon.png`,
        alt: "ホームのサムネイル",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteTitle}`,
    description: "ホームです。",
    images: [`${basePath}/icon.png`],
  },
};

// モックデータ
const mockData: CardData[] = [
  {
    id: 1,
    title: "線形代数",
    description: "行列、ベクトルなど",
    icon: "📈",
    backgroundColor: "#f8d7da",
    link: "/linear_algebra",
  },
  {
    id: 2,
    title: "機械学習",
    description: "アルゴリズム、データ処理など",
    icon: "🤖",
    backgroundColor: "#d1c4e9",
    link: "/machine_learning",
  } /*
  {
    id: 3,
    title: "微積分",
    description: "極限、微分、積分など",
    icon: "∫",
    backgroundColor: "#cfe2ff",
    link: "/calculus",
  } /*
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
  },*/,
];

export default function Page() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
      }}
    >
      {mockData.length > 0 ? (
        mockData.map((item) => (
          <div
            key={item.id}
            className="flex-[0_1_calc(33.333%-1rem)] box-border min-w-[300px]"
          >
            <Card1
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
    </div>
  );
}
