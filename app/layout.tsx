import "@/app/globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Sidebar from "@/app/components/Sidebar";

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
          <div style={{ display: "flex" }} className="main-content">
            <div style={{ flexGrow: 1 }} className="mainContent">
              {children}
            </div>
            <Sidebar />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
