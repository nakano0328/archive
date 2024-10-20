"use client";

import { useSearchParams } from 'next/navigation';

const SearchResultsPage = () => {
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get('query');

    // 仮の検索結果取得ロジック
    const searchResults = fakeSearchFunction(searchQuery);

    return (
        <div>
            <h2>検索結果: {searchQuery}</h2>
            {searchResults && searchResults.length > 0 ? (
                <ul>
                    {searchResults.map((result) => (
                        <li key={result.key}>
                            {result.title}: {result.description}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>一致する検索結果はありません</p>
            )}
        </div>
    );
};

export default SearchResultsPage;
