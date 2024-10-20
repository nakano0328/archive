"use client"; // クライアントコンポーネントとして指定

import React from 'react';
import { metadata } from '@/app/allmetadata'; // allmetadataからインポート
import CustomLink from "@/app/components/CustomLink";

interface SearchResultsProps {
    query: string;
    setQuery: (query: string) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ query, setQuery }) => {
    // 検索データをフィルタリング
    const searchData = Object.values(metadata).map(item => ({
        title: item.title,
        description: item.description,
        path: item.path, // 追加したpathを使用
    }));

    const filteredResults = searchData.filter(item =>
        item.title.includes(query)
    );

    const handleLinkClick = () => {
        setQuery(''); // ページ遷移時にクエリをリセット
    };

    return (
        <div>
            <h2 style={{ marginBottom: '20px' }}>
                「{query}」の検索結果
            </h2>

            {filteredResults.length > 0 ? (
                filteredResults.map((result, index) => (
                    <div style={{ marginBottom: '20px' }}>
                        <CustomLink
                            href={result.path}
                            imageUrl={`${result.path}/thumb.png`}
                            altText={`${result.title}ページのサムネ`}
                            siteName={result.title}
                            description={result.description}
                            onClick={handleLinkClick}
                        />
                    </div>
                ))
            ) : (
                <div>一致する検索結果はありません</div>
            )}
        </div>
    );
};

export default SearchResults;
