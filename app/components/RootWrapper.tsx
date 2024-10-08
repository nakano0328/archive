"use client";

import Header from "./Header";
import Footer from "./Footer";

export default function RootWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const handleSearch = (term: string) => {
        // 検索処理の実装
        console.log('Search term:', term);
    };

    return (
        <>
            <Header onSearch={handleSearch} />
            <main className="flex-grow">{children}</main>
            <Footer />
        </>
    );
}
