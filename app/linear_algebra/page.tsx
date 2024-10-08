import Link from "next/link";

// ダミーデータ (実際にはサーバーサイドから取得することも可能)
const contents = [
  {
    title: "内積",
    description:
      "内積は、ベクトル同士の積で、特定の条件下でベクトル間の角度や長さに関連した重要な概念です。",
    updatedAt: "2024-10-08",
    href: "/linear_algebra/dotproduct",
  },
  {
    title: "外積",
    description:
      "外積は、ベクトル間に垂直なベクトルを生成する方法で、物理学において重要な概念です。",
    updatedAt: "2024-10-08",
    href: "/linear_algebra/crossproduct",
  },
];

export default function LinearAlgebraContents() {
  return (
    <div style={{ padding: "20px", backgroundColor: "#f8d7da" }}>
      <h1 style={{ fontSize: "36px", textAlign: "center", marginBottom: "20px" }}>
        線形代数のコンテンツ
      </h1>
      <p style={{ textAlign: "center", marginBottom: "40px" }}>
        ここでは、線形代数に関連するさまざまなトピックについて説明しています。
      </p>

      {/* コンテンツカードの表示 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {contents.map((content, index) => (
          <Link key={index} href={content.href}>
            <div
              className="content-card"
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "20px",
                backgroundColor: "white",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>{content.title}</h2>
              <p style={{ marginBottom: "20px" }}>{content.description}</p>
              <div style={{ textAlign: "right", fontSize: "12px", color: "#888" }}>
                最終更新日: {content.updatedAt}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
