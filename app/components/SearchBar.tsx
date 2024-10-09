"use client";

import { useState } from "react";
import { metadata } from "@/app/allmetadata"; // メタデータをインポート

// 検索結果の型定義
interface SearchResult {
  key: string;
  title: string;
  description: string;
  lastUpdated: string;
}

interface SearchBarProps {
  setSearchResults: (results: SearchResult[]) => void;
}

const SearchBar = ({ setSearchResults }: SearchBarProps) => {
  const [query, setQuery] = useState<string>("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!query.trim()) {
      setSearchResults([]); // 空の検索の場合は結果をリセット
      return;
    }

    const searchTerm = query.toLowerCase();
    const filteredResults: SearchResult[] = Object.entries(metadata)
      .map(([key, meta]) => ({
        key,
        title: meta.title,
        description: meta.description,
        lastUpdated: meta.lastUpdated,
      }))
      .filter((meta) => meta.title.toLowerCase().includes(searchTerm));

    setSearchResults(filteredResults);
  };

  return (
    <form
      onSubmit={handleSearch}
      style={{ display: "flex", alignItems: "center" }}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="検索キーワードを入力"
        style={{
          flex: 1,
          padding: "10px",
          borderRadius: "4px 0 0 4px", // 左側のみ角丸に
          border: "1px solid #ccc",
          outline: "none",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "8.2px 10px",
          backgroundColor: "#007bff",
          color: "#fff",
          borderRadius: "0 4px 4px 0", // 右側のみ角丸に
          border: "none",
          cursor: "pointer",
        }}
      >
        検索
      </button>
    </form>
  );
};

export default SearchBar;
