import Breadcrumb from "@/app/components/Breadcrumb";
import { metadata } from "@/app/linear_algebra/metadata";
import { formatDate } from "@/app/components/formatDate"; // 日付フォーマット関数をインポート

export default function DotProductPage() {
  const metaData = metadata.dotproduct;

  return (
    <div style={{ padding: "20px" }}>
      {/* Breadcrumbの表示 */}
      <Breadcrumb
        items={[
          { name: '線形代数', href: '/linear_algebra' },
          { name: metaData.title, href: '/linear_algebra/dotproduct' },
        ]}
      />

      {/* 最終更新日をパンくずリストの下かつ右寄せに表示 */}
      <div
        style={{
          fontSize: "12px",
          color: "#888",
          marginBottom: "20px",
          textAlign: "right", // 右寄せに設定
        }}
      >
        最終更新日: {formatDate(metaData.lastUpdated)}
      </div>

      <h1
        style={{ fontSize: "36px", textAlign: "center", marginBottom: "20px", color: "black" }} // タイトルが青くならないように
      >
        {metaData.title}
      </h1>
      <p>{metaData.description}</p>

      {/* 内積の解説 */}
      <h2>内積の解説</h2>
      <p>
        内積（またはドット積）は、ユークリッド空間における2つのベクトルの積の一種であり、数値を返す演算です。
        内積は、ベクトルがどの程度同じ方向を向いているかを計算する際に用いられ、以下のように定義されます：
      </p>
      <ul>
        <li>
          2つのベクトル <strong>𝑎</strong> = (𝑎₁, 𝑎₂, ..., 𝑎ₙ) と
          <strong>𝑏</strong> = (𝑏₁, 𝑏₂, ..., 𝑏ₙ) が与えられたとき、
          内積は次の式で計算されます：
        </li>
      </ul>
      <pre>𝑎・𝑏 = 𝑎₁𝑏₁ + 𝑎₂𝑏₂ + ... + 𝑎ₙ𝑏ₙ</pre>
      <p>
        ここで、𝑎・𝑏 はベクトル 𝑎 とベクトル 𝑏
        の内積を表し、各成分の積を合計したものです。内積が正の値の場合、
        2つのベクトルは同じ方向を向いており、負の値の場合、逆方向を向いています。また、内積が0の場合、
        2つのベクトルは直交しています（つまり、90度の角度で交わっています）。
      </p>
      <p>
        内積は物理学や工学、コンピュータグラフィックスなど、様々な分野で使用されており、特にベクトルの投影や
        距離の計算において重要な役割を果たします。
      </p>
    </div>
  );
}
