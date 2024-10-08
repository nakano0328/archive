import Link from "next/link";
import { metadata } from "@/app/linear_algebra/metadata"; // インポート先を修正

export default function LinearAlgebraContents() {
  // メタデータからトピックを取得
  const topics = Object.keys(metadata);

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
        {topics.map((topicKey) => {
          const topic = metadata[topicKey];
          return (
            <Link key={topicKey} href={`/linear_algebra/${topicKey}`}>
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
                <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>{topic.title}</h2>
                <p style={{ marginBottom: "20px" }}>{topic.description}</p>
                <div style={{ textAlign: "right", fontSize: "12px", color: "#888" }}>
                  最終更新日: {new Date(topic.lastUpdated).toLocaleDateString()}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
