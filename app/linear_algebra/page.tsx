import Link from "next/link";
import Breadcrumb from "@/app/components/Breadcrumb";
import { metadata as topicsMetadata } from "@/app/linear_algebra/metadata"; // コンテンツのメタデータをインポート
import Card from "@/app/components/Card2";
import { formatDate } from "@/app/components/formatDate";
import Image from "next/image"; // Imageをインポート

// ページのメタデータ（ブラウザのタイトル設定など）
export const metadata = {
  title: "線形代数",
};

export default function LinearAlgebraContents() {
  const topics = Object.keys(topicsMetadata) as Array<
    keyof typeof topicsMetadata
  >;

  return (
    <>
      <div style={{ padding: "20px" }}>
        {/* Breadcrumbの表示 */}
        <Breadcrumb items={[{ name: "線形代数", href: "/linear_algebra" }]} />

        <div
          style={{
            backgroundColor: "#f8d7da", // 赤い背景
            padding: "20px",
            borderRadius: "5px",
            marginBottom: "40px", // 他の要素との間隔
          }}
        >
          <h1 className="title">線形代数のコンテンツ</h1>

          <p style={{ textAlign: "center" }}>
            ここでは、線形代数に関連するさまざまなトピックについて説明しています。
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {topics.map((topicKey) => {
            const topic = topicsMetadata[topicKey];
            const imagePath = `/linear_algebra/${topicKey}/thumb.png`;

            return (
              <Link
                key={topicKey}
                href={`/linear_algebra/${topicKey}`}
                style={{ textDecoration: "none" }}
              >
                <Card>
                  {/* サムネイル画像の読み込み */}
                  <Image
                    src={imagePath}
                    alt={topic.title}
                    width={300} // 横幅はそのまま
                    height={150} // 必須だが実際のスタイルに影響しない
                    className="thumb"
                  />
                  <h2
                    style={{
                      fontSize: "24px",
                      marginBottom: "10px",
                      color: "black",
                    }}
                  >
                    {topic.title}
                  </h2>
                  <p style={{ marginBottom: "20px", color: "black" }}>
                    {topic.description}
                  </p>
                  <div
                    style={{
                      textAlign: "right",
                      fontSize: "12px",
                      color: "#888",
                    }}
                  >
                    最終更新日: {formatDate(topic.lastUpdated)}
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
