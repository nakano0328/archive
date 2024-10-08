"use client";

import React, { useState } from "react";
import Link from "next/link"; // Link コンポーネントをインポート

const Header: React.FC<{ onSearch: (term: string) => void }> = ({
  onSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm); // 検索結果を親コンポーネントに渡す
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
      }}
    >
      {/* タイトル：リンクでホームに戻る */}
      <Link
        href="/"
        style={{ textDecoration: "none", color: "black", flex: 1 }}
      >
        <h1 style={{ margin: 0, textAlign: "left" }}>数学の探求</h1>
      </Link>

      {/* 検索フォーム：右揃え */}
      <form onSubmit={handleSearchSubmit} style={{ marginLeft: "auto" }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="サイト内検索..."
          style={{ padding: "10px", borderRadius: "5px", width: "250px" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px 15px",
            marginLeft: "10px",
            borderRadius: "5px",
          }}
        >
          検索
        </button>
      </form>
    </header>
  );
};

export default Header;
