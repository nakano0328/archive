import fs from "fs";
import path from "path";
import Breadcrumb from "../components/Breadcrumb";

// サーバーサイドで全てのコンテンツページを動的に取得
export async function getServerSideProps() {
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

  return {
    props: {
      directories,
    },
  };
}

const LinearAlgebraPage = ({ directories }) => {
  return (
    <div style={{ padding: "20px" }}>
      <Breadcrumb
        serverData={directories.reduce((acc, dir) => {
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
        {directories.map((dir) => (
          <a
            key={dir.name}
            href={dir.path}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                padding: "15px",
                transition: "transform 0.2s ease", // アニメーション追加
                position: "relative",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              } // ホバー時の動き
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              } // 元に戻す
            >
              <h2 style={{ fontSize: "20px", marginTop: "10px" }}>
                {dir.title}
              </h2>
              <p>{dir.description}</p>

              {/* 最終更新日を右下に固定 */}
              <p
                style={{
                  fontSize: "12px",
                  color: "#888",
                  position: "absolute",
                  bottom: "10px",
                  right: "10px",
                  margin: 0,
                }}
              >
                最終更新日: {new Date(dir.updatedAt).toLocaleDateString()}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LinearAlgebraPage;
