import React, { useState, useEffect } from "react";
import { metadata } from "@/app/allmetadata";

const SearchComponent: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [results, setResults] = useState<{ title: string, description: string }[]>([]);

    const searchData = Object.values(metadata).map(item => ({
        title: item.title,
        description: item.description,
    }));

    useEffect(() => {
        if (query === '') {
            setResults([]);
        } else {
            const filteredResults = searchData.filter(item =>
                item.title.includes(query)
            );
            setResults(filteredResults);
        }
    }, [query, searchData]); // searchData を依存関係に追加

    return (
        <div>
            <input
                type="text"
                placeholder="検索..."
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
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
        </div>
    );
};

export default SearchComponent;
