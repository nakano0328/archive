import Breadcrumb from "@/app/components/Breadcrumb";

// メタデータの定義
export const metaData = {
  title: "外積",
  description:
    "外積（クロス積）は、3次元ベクトル同士の積の一種で、ベクトルの垂直方向のベクトルを計算する際に用いられます。",
  updatedAt: "2024-10-08",
};

// サーバーコンポーネント
export default function CrossProductPage() {
  const { title, description, updatedAt } = metaData;

  // パンくずリストに使用するサーバーサイドデータ
  const serverData = {
    crossproduct: { title },
    linear_algebra: { title: "線形代数" }, // 親フォルダ名も日本語にする
  };

  return (
    <div style={{ padding: "20px", position: "relative" }}>
      {/* パンくずリストの表示 */}
      <Breadcrumb serverData={serverData} />

      {/* 最終更新日をパンくずリストの下かつ右寄せに表示 */}
      <div
        style={{
          fontSize: "12px",
          color: "#888",
          marginBottom: "20px",
          textAlign: "right", // 右寄せに設定
        }}
      >
        最終更新日: {new Date(updatedAt).toLocaleDateString()}
      </div>

      <h1
        style={{ fontSize: "36px", textAlign: "center", marginBottom: "20px" }}
      >
        {title}
      </h1>
      <p>{description}</p>

      {/* 外積の解説 */}
      <h2>外積の解説</h2>
      <p>
        外積（またはクロス積）は、3次元ベクトルにおける積の一種で、2つのベクトルに垂直な新しいベクトルを生成します。
        外積は、ベクトルの向きと大きさを決定するために用いられ、特に物理学で重要な概念です。
      </p>
      <ul>
        <li>
          2つのベクトル <strong>𝑎</strong> = (𝑎₁, 𝑎₂, 𝑎₃) と<strong>𝑏</strong> =
          (𝑏₁, 𝑏₂, 𝑏₃) が与えられたとき、外積は次の式で計算されます：
        </li>
      </ul>
      <pre>𝑎 × 𝑏 = (𝑎₂𝑏₃ - 𝑎₃𝑏₂, 𝑎₃𝑏₁ - 𝑎₁𝑏₃, 𝑎₁𝑏₂ - 𝑎₂𝑏₁)</pre>
      <p>
        外積は、ベクトル 𝑎 と 𝑏
        に垂直なベクトルを返し、その大きさは2つのベクトルが張る平行四辺形の面積に対応します。
      </p>
      <p>
        外積は、物理学の力学、電磁気学、コンピュータグラフィックスなど、様々な分野で使用されており、
        特にトルクや角運動量の計算において重要な役割を果たします。
      </p>
    </div>
  );
}
