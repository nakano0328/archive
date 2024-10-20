import React, { useEffect, useState } from "react";
import { metadata } from "@/app/allmetadata"; // allmetadata.tsからインポート

interface SearchComponentProps {
    query: string; // サイドバーから渡されるクエリ
}

const SearchComponent: React.FC<SearchComponentProps> = ({ query }) => {
    const [results, setResults] = useState<{ title: string, description: string }[]>([]);

    // allmetadata から検索可能なデータを抽出
    const searchData = Object.values(metadata).map(item => ({
        title: item.title,
        description: item.description,
    }));

    useEffect(() => {
        if (query === '') {
            setResults([]);
        } else {
            // フィルタリング処理
            const filteredResults = searchData.filter(item =>
                item.title.includes(query)
            );
            setResults(filteredResults);
        }
    }, [query]);

    return (
        <div>
            {results.length > 0 ? (
                results.map((result, index) => (
                    <div key={index}>
                        <h3>{result.title}</h3>
                        <p>{result.description}</p>
                    </div>
                ))
            ) : (
                query !== '' && <div>一致する検索結果はありません</div>
            )}
        </div>
    );
};

export default SearchComponent;
