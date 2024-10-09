"use client";

import { useState } from "react";
import SearchBar from "./SearchBar"; // 既存のSearchBarコンポーネントをインポート
import Link from "next/link"; // ページ遷移用のLinkコンポーネントをインポート
import Card from "./Card2"; // カード形式のコンテンツを表示

const SearchWrapper = ({ children }: { children: React.ReactNode }) => {
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false); // 検索が行われたかどうかを追跡

  const handleSearch = (results: any[]) => {
    if (results.length === 0) {
      setHasSearched(false); // 空の検索の場合は検索を行っていない状態にする
      setSearchResults([]);
    } else {
      setHasSearched(true); // 検索が実行されたことを設定
      setSearchResults(results); // 検索結果を設定
    }
  };

  return (
    <div className="container flex">
      {/* メインコンテンツ */}
      <div className="main-content flex-grow p-4">
        {/* 検索結果がある場合 */}
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
                  style={{ textDecoration: "none" }} // リンク全体にアンダーラインを削除
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
          // 検索結果がない場合
          <>
            {hasSearched ? (
              // 検索が行われた後、結果がない場合は「一致する検索結果はありません」を表示
              <div style={{ textAlign: "center", marginTop: "50px" }}>
                <p style={{ fontSize: "1.5rem", color: "red" }}>
                  一致する検索結果はありません
                </p>
              </div>
            ) : (
              // 検索が行われていない場合は元のコンテンツを表示
              <div>{children}</div>
            )}
          </>
        )}
      </div>
      {/* サイドバー（検索バーを含む）を右側に配置 */}
      <div className="sidebar w-1/4 p-4 bg-gray-100">
        <div className="search-container mb-4">
          <h3 className="text-lg font-semibold mb-2">サイト内検索</h3>
          <SearchBar setSearchResults={handleSearch} /> {/* 検索バー */}
        </div>
      </div>
    </div>
  );
};

export default SearchWrapper;
