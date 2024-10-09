"use client";

import { useState } from "react";
import SearchBar from "./SearchBar"; // 既存のSearchBarコンポーネントをインポート
import Link from "next/link"; // ページ遷移用のLinkコンポーネントをインポート
import Card from "./Card2"; // カード形式のコンテンツを表示

// 検索結果の型定義
interface SearchResult {
  key: string;
  title: string;
  description: string;
  lastUpdated: string;
}

const SearchWrapper = ({ children }: { children: React.ReactNode }) => {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState<boolean>(false);

  const handleSearch = (results: SearchResult[]) => {
    if (results.length === 0) {
      setHasSearched(false);
      setSearchResults([]);
    } else {
      setHasSearched(true);
      setSearchResults(results);
    }
  };

  return (
    <div className="container flex" style={{ flexDirection: "row-reverse" }}>
      {/* サイドバー（検索バーを含む）を右側に配置 */}
      <div className="sidebar w-1/4 p-4 bg-gray-100">
        <div className="search-container mb-4">
          <h3 className="text-lg font-semibold mb-2">サイト内検索</h3>
          <SearchBar setSearchResults={handleSearch} /> {/* 検索バー */}
        </div>
      </div>

      {/* メインコンテンツ */}
      <div className="main-content flex-grow p-4">
        {searchResults.length > 0 ? (
          <div>
            <h2>検索結果:</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              {searchResults.map((result, index) => (
                <Link
                  href={`/linear_algebra/${result.key}`}
                  key={index}
                  passHref
                  onClick={() => setSearchResults([])} // クリックで検索結果をクリア
                  style={{ textDecoration: "none" }}
                >
                  <Card>
                    <h3 style={{ color: "black", textDecoration: "none" }}>
                      {result.title}
                    </h3>
                    <p style={{ color: "black", textDecoration: "none" }}>
                      {result.description}
                    </p>
                    <p style={{ color: "black", textDecoration: "none" }}>
                      最終更新日: {result.lastUpdated}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <>
            {hasSearched ? (
              <div style={{ textAlign: "center", marginTop: "50px" }}>
                <p style={{ fontSize: "1.5rem", color: "red" }}>
                  一致する検索結果はありません
                </p>
              </div>
            ) : (
              <div>{children}</div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchWrapper;
