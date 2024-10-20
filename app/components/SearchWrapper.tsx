"use client"; // クライアントコンポーネント

import React, { useState } from 'react';
import Sidebar from '@/app/components/Sidebar';
import SearchResults from '@/app/components/SearchResults';

const SearchWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [query, setQuery] = useState<string>(''); // 検索クエリを管理

    return (
        <div style={{ display: 'flex' }} className='main-content'>
            <div style={{ flexGrow: 1 }}>
                {query ? (
                    <SearchResults query={query} setQuery={setQuery} /> // 検索クエリがある場合に検索結果を表示
                ) : (
                    children // 検索クエリがない場合に通常のページコンテンツを表示
                )}
            </div>
            <Sidebar setQuery={setQuery} /> {/* サイドバーに検索クエリを設定 */}
        </div>
    );
};

export default SearchWrapper;
