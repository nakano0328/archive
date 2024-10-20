"use client";

import React, { useState } from 'react';
import SearchComponent from './SearchComponent'; // 検索コンポーネントをインポート

const Sidebar: React.FC = () => {
    const [query, setQuery] = useState<string>(''); // 検索クエリを管理するためのstate

    return (
        <div className="sidebar">
            <div className="search-container">
                {/* 検索バー */}
                <input
                    type="text"
                    placeholder="検索..."
                    value={query}
                    onChange={e => setQuery(e.target.value)} // 検索クエリの更新
                />
            </div>

            {/* SearchComponent にクエリを渡して検索を実行 */}
            <SearchComponent query={query} />
        </div>
    );
};

export default Sidebar;
