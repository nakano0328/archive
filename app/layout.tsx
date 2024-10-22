import type { Metadata } from "next";
import "@/app/globals.css";
import { siteTitle } from "@/app/metadata";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SearchWrapper from '@/app/components/SearchWrapper';

export const metadata: Metadata = {
  title: `ホーム - ${siteTitle}`,
  description: "ホームページの一番最初です",
  openGraph: {
    title: "ホーム",
    description: "ホームです",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <div className="wrapper">
          <Header />
          <SearchWrapper>{children}</SearchWrapper>
          <Footer />
        </div>
      </body>
    </html >
  );
}
