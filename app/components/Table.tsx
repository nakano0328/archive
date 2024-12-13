"use client";

import React, { useState, useEffect } from "react";

const Table = () => {
  const [headings, setHeadings] = useState<HTMLHeadingElement[]>([]);

  useEffect(() => {
    // class="caption" を持つすべての h2 要素を取得
    const elements = Array.from(
      document.querySelectorAll("h2.caption")
    ) as HTMLHeadingElement[];

    // 各要素に上から順に id を付与
    elements.forEach((element, index) => {
      element.id = `heading-${index + 1}`;
    });

    console.log(elements); // デバッグ用に抽出された要素を表示

    setHeadings(elements);
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="目次"
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "16px",
          width: "80%",
          maxWidth: "600px",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h2 style={{ textAlign: "center" }}>目次</h2>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {headings.map((heading) => (
            <li key={heading.id} style={{ marginBottom: "8px" }}>
              <a
                href={`#${heading.id}`}
                className="text-blue-600 hover:text-blue-800 transition-colors"
                style={{ textDecoration: "none" }}
              >
                {heading.textContent}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Table;
