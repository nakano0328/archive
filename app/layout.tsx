import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SearchProvider } from "./contexts/SearchContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'ホーム',
  description: 'ホームです',
  openGraph: {
    title: 'ホーム',
    description: 'ホームです',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ヘッダーに onSearch プロパティを渡す */}
        <Header onSearch={handleSearch} />

        {/* ページごとのコンテンツ */}
        <main>{children}</main>

        {/* フッターをページ全体の下部に表示 */}
        <Footer />
      </body>
    </html>
  );
}