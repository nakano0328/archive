"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// パンくずリストのコンポーネント
const Breadcrumb = ({ serverData }) => {
  const pathname = usePathname();
  const [breadcrumbData, setBreadcrumbData] = useState([]);

  useEffect(() => {
    // パスを "/" で分割し、各セクションに対応するサーバーサイドからのデータを取得
    const pathParts = pathname.split("/").filter(Boolean);
    const breadcrumbData = pathParts.map((part, index) => {
      const currentPath = `/${pathParts.slice(0, index + 1).join("/")}`;

      // 各ページのメタデータを動的に読み込み
      let title = serverData[part]?.title || part;

      // "linear_algebra" を "線形代数" に変換
      if (part === "linear_algebra") {
        title = "線形代数";
      }

      return {
        path: currentPath,
        name: title,
      };
    });

    setBreadcrumbData(breadcrumbData);
  }, [pathname, serverData]);

  return (
    <nav
      style={{
        backgroundColor: "white",
        padding: "10px",
        borderRadius: "8px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px",
      }}
    >
      <Link href="/" style={{ textDecoration: "none", color: "black" }}>
        ホーム
      </Link>
      {breadcrumbData.length > 0 && " > "}
      {breadcrumbData.map((item, index) => (
        <span key={item.path}>
          <Link
            href={item.path}
            style={{ textDecoration: "none", color: "black" }}
          >
            {item.name}
          </Link>
          {index < breadcrumbData.length - 1 && " > "}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
