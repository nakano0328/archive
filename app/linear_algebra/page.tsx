import Link from "next/link";
import { metadata } from "@/app/linear_algebra/metadata";
import Card from "@/app/linear_algebra/Card"; // Card コンポーネントをインポート

export default function LinearAlgebraContents() {
  const topics = Object.keys(metadata) as Array<keyof typeof metadata>;

  return (
    <div style={{ padding: "20px", backgroundColor: "#f8d7da" }}>
      <h1 style={{ fontSize: "36px", textAlign: "center", marginBottom: "20px" }}>
        線形代数のコンテンツ
      </h1>
      <p style={{ textAlign: "center", marginBottom: "40px" }}>
        ここでは、線形代数に関連するさまざまなトピックについて説明しています。
      </p>

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
              <Card>
                <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>{topic.title}</h2>
                <p style={{ marginBottom: "20px" }}>{topic.description}</p>
                <div style={{ textAlign: "right", fontSize: "12px", color: "#888" }}>
                  最終更新日: {new Date(topic.lastUpdated).toLocaleDateString()}
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
