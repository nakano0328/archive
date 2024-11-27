import React, { useState } from "react";
import { metadata } from "@/app/allmetadata";

const SearchComponent: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<
    { title: string; description: string }[]
  >([]);

  const searchData = Object.values(metadata).map((item) => ({
    title: item.title,
    description: item.description,
  }));

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery === "") {
      setResults([]);
    } else {
      const filteredResults = searchData.filter((item) =>
        item.title.includes(searchQuery)
      );
      setResults(filteredResults);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="検索..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
      <div>
        {results.length > 0
          ? results.map((result, index) => (
              <div key={index}>
                <h3>{result.title}</h3>
                <p>{result.description}</p>
              </div>
            ))
          : query !== "" && <div>一致する検索結果はありません</div>}
      </div>
    </div>
  );
};

export default SearchComponent;
