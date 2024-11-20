import "@/app/globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import SearchWrapper from "@/app/components/SearchWrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <html lang="ja">
      <body>
        <div
          className="wrapper"
          style={{ backgroundImage: `url(${basePath}/back.jpg)` }}
        >
          <Header />
          <SearchWrapper>{children}</SearchWrapper>
          <Footer />
        </div>
      </body>
    </html>
  );
}
