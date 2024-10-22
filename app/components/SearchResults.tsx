import React from 'react';
import { metadata } from '@/app/allmetadata';
import CustomLink from "@/app/components/CustomLink";

interface SearchResultsProps {
    query: string;
    setQuery: (query: string) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ query, setQuery }) => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

    const searchData = Object.values(metadata).map(item => ({
        title: item.title,
        description: item.description,
        path: item.path,
    }));

    const filteredResults = searchData.filter(item =>
        item.title.includes(query)
    );

    const handleLinkClick = () => {
        setQuery('');
    };

    return (
        <div>
            <h2 style={{ marginBottom: '20px' }}>
                「{query}」の検索結果
            </h2>

            {filteredResults.length > 0 ? (
                filteredResults.map((result, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <CustomLink
                            href={result.path}
                            imageUrl={`${basePath}${result.path}/thumb.png`}
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
