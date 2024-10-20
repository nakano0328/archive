"use client"; // クライアントコンポーネントとして指定

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // useRouterの代わりにusePathnameを使う
import SearchBar from "./SearchBar"; // 既存のSearchBarコンポーネントをインポート
import CustomLink from "./CustomLink";

interface SearchResult {
  key: string;
  title: string;
  description: string;
  lastUpdated: string;
}

const SearchWrapper = ({ children }: { children: React.ReactNode }) => {
  const [searchResults, setSearchResults] = useState<SearchResult[] | null>(null); // nullも許容する
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const pathname = usePathname(); // 現在のルートを取得

  // ルートが変更されたときに検索結果をリセット
  useEffect(() => {
    setSearchResults(null); // 検索結果をリセット
    setHasSearched(false);  // 検索状態もリセット
  }, [pathname]); // pathnameが変わったときに実行

  const handleSearch = (results: SearchResult[] | null) => {
    setHasSearched(true); // 検索が実行されたとマーク
    setSearchResults(results); // 検索結果を更新
  };

  return (
    <div className="container flex">
      {/* メインコンテンツ */}
      <div className="main-content flex-grow p-4">
        {hasSearched && searchResults !== null && searchResults.length > 0 ? (
          <div>
            <h2>検索結果:</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              {searchResults.map((result, index) => (
                <CustomLink
                  key={index}
                  href={`/linear_algebra/${result.key}`}
                  imageUrl={`${basePath}/linear_algebra/${result.key}/thumb.png`}
                  altText={`${result.title}のサムネ`}
                  siteName={`${result.title}`}
                  description={`${result.description}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <>
            {hasSearched && searchResults === null ? (
              <div style={{ textAlign: "center", marginTop: "50px" }}>
                <p style={{ fontSize: "1.5rem", color: "red" }}>
                  一致する検索結果はありません
                </p>
              </div>
            ) : (
              <div>{children}</div> // 初期状態や検索結果がない場合は元のコンテンツを表示
            )}
          </>
        )}
      </div>

      {/* サイドバー（検索バーを含む）*/}
      <div className="sidebar">
        <div className="search-container mb-4">
          <h3 className="text-lg font-semibold mb-2">サイト内検索</h3>
          <SearchBar setSearchResults={handleSearch} /> {/* 検索バー */}
        </div>
      </div>
    </div>
  );
};

export default SearchWrapper;
