import Breadcrumb from "@/app/components/Breadcrumb";

// メタデータの定義
export const metaData = {
  title: "外積",
  description: "外積頑張りたいなー",
  updatedAt: "2024-10-08",
};

// サーバーコンポーネント
export default function CrossProductPage() {
  const { title, description, updatedAt } = metaData;

  // パンくずリストに使用するサーバーサイドデータ
  const serverData = {
    linear_algebra: { title: "線形代数" }, // 線形代数の親フォルダ
    crossproduct: { title }, // 現在のページのタイトル
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* パンくずリストの表示 */}
      <Breadcrumb serverData={serverData} />

      <h1
        style={{ fontSize: "36px", textAlign: "center", marginBottom: "20px" }}
      >
        {title}
      </h1>
      <p>{description}</p>
      <p style={{ fontSize: "12px", color: "#888", textAlign: "right" }}>
        最終更新日: {new Date(updatedAt).toLocaleDateString()}
      </p>
    </div>
  );
}
