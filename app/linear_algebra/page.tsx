import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb"; // パンくずリストを追加
import { metadata } from "@/app/linear_algebra/metadata";
import Card from "@/app/linear_algebra/Card";
import { formatDate } from "@/app/components/formatDate"; // 日付フォーマット関数をインポート

export default function LinearAlgebraContents() {
  const topics = Object.keys(metadata) as Array<keyof typeof metadata>;

  return (
    <div style={{ padding: "20px" }}>
      {/* Breadcrumbの表示 */}
      <Breadcrumb
        items={[
          { name: "ホーム", href: "/" },
          { name: "線形代数", href: "/linear_algebra" },
        ]}
      />

      <h1
        style={{
          fontSize: "36px",
          textAlign: "center",
          marginBottom: "20px",
          backgroundColor: "#f8d7da", // 赤い背景を追加
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        線形代数のコンテンツ
      </h1>

      <p
        style={{
          textAlign: "center",
          marginBottom: "40px",
          backgroundColor: "#f8d7da", // 赤い背景を追加
          padding: "10px",
          borderRadius: "5px",
        }}
      >
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
            <Link key={topicKey} href={`/linear_algebra/${topicKey}`} style={{ textDecoration: "none" }}>
              <Card>
                <h2 style={{ fontSize: "24px", marginBottom: "10px", color: "black" }}>{topic.title}</h2>
                <p style={{ marginBottom: "20px", color: "black" }}>{topic.description}</p>
                <div style={{ textAlign: "right", fontSize: "12px", color: "#888" }}>
                  最終更新日: {formatDate(topic.lastUpdated)}
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
