"use client";

import React, { useState } from "react";
import Link from "next/link";

interface HeaderProps {
  onSearch: (term: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center gap-4">
          {/* タイトル：リンクでホームに戻る */}
          <Link href="/" className="hover:text-gray-600 transition-colors">
            <h1 className="text-2xl font-bold text-black m-0">数学の探求</h1>
          </Link>

          {/* 検索フォーム */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center gap-2 ml-auto"
          >
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="サイト内検索..."
              className="px-4 py-2 rounded-md border border-gray-300 w-64
                       focus:outline-none focus:ring-2 focus:ring-blue-500
                       transition-shadow"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md
                       hover:bg-blue-600 focus:outline-none focus:ring-2
                       focus:ring-blue-500 focus:ring-offset-2
                       transition-colors"
            >
              検索
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
