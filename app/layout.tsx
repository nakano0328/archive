import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import { siteTitle } from "@/app/metadata";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SearchWrapper from '@/app/components/SearchWrapper';

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
        <Header />
        <SearchWrapper>{children}</SearchWrapper>
        <Footer />
      </body>
    </html >
  );
}
