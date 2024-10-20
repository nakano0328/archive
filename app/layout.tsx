import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
//import Sidebar from '@/app/components/Sidebar'; // サイドバーをインポート
import SearchWrapper from "@/app/components/SearchWrapper"; // クライアントサイドのコンポーネント

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
  title: "ホーム",
  description: "ホームです",
  openGraph: {
    title: "ホーム",
    description: "ホームです",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <SearchWrapper>{children}</SearchWrapper>
        <Footer />
      </body>
    </html>
  );
}

{/*
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flexGrow: 1 }}>
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}*/}
