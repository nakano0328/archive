import fs from "fs";
import path from "path";
import Breadcrumb from "@/app/components/Breadcrumb";

// サーバーサイドで全てのコンテンツページを動的に取得
const getServerData = () => {
  const baseDir = path.join(process.cwd(), "app/linear_algebra");

  // linear_algebraディレクトリ内の全てのサブディレクトリを取得
  const directories = fs
    .readdirSync(baseDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory()) // ディレクトリのみを対象
    .map((dirent) => {
      const pageModulePath = path.join(baseDir, dirent.name, "page.tsx");

      // 各ページのメタデータを取得
      if (fs.existsSync(pageModulePath)) {
        const { metaData } = require(`./${dirent.name}/page`); // ページのメタデータを取得
        return {
          name: dirent.name,
          ...metaData, // metaData内のtitle, description, updatedAtを取得
          path: `/linear_algebra/${dirent.name}`, // ページへのリンク
        };
      }
      return null;
    })
    .filter(Boolean); // nullの要素を除外

  // 更新日順にソート
  directories.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  return directories;
};

const LinearAlgebraPage = () => {
  const serverData = getServerData(); // サーバーサイドでディレクトリ情報を取得

  return (
    <div style={{ padding: "20px" }}>
      <Breadcrumb
        serverData={serverData.reduce((acc, dir) => {
          acc[dir.name] = { title: dir.title }; // パンくずリスト用にタイトルを設定
          return acc;
        }, {})}
      />

      <h1
        style={{
          fontSize: "48px",
          textAlign: "center",
          backgroundColor: "#f8d7da",
          padding: "20px",
        }}
      >
        線形代数
      </h1>

      {/* ページコンテンツをリスト形式で表示 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {serverData.map((dir) => (
          <div
            key={dir.name}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              position: "relative", // 右下に最終更新日を固定するため
            }}
          >
            <a
              href={dir.path}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div style={{ padding: "15px" }}>
                <h2 style={{ fontSize: "20px", marginTop: "10px" }}>
                  {dir.title}
                </h2>

                {/* description に marginBottom を追加 */}
                <p style={{ marginBottom: "20px" }}>{dir.description}</p>

                {/* 最終更新日を右下に表示 */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    fontSize: "12px",
                    color: "#888",
                  }}
                >
                  最終更新日: {new Date(dir.updatedAt).toLocaleDateString()}
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinearAlgebraPage;
