import Breadcrumb from "@/app/components/Breadcrumb";
import { metadata } from "@/app/linear_algebra/metadata";
import { formatDate } from "@/app/components/formatDate"; // 日付フォーマット関数をインポート
import { InlineMath } from "react-katex"; // InlineMath をインポート
import Link from 'next/link';

// ページのメタデータを動的に生成
export async function generateMetadata() {
  const metaData = metadata.dotproduct;

  return {
    title: metaData.title, // タイトルをメタデータから設定
    description: metaData.description, // 必要に応じて説明も追加できます
  };
}

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

      <h1
        style={{ fontSize: "36px", textAlign: "center", marginBottom: "20px", color: "black" }} // タイトルが青くならないように
      >
        {metaData.title}
      </h1>

      {/* 最終更新日をパンくずリストの下に表示 */}
      <div
        style={{
          fontSize: "12px",
          color: "#888",
          marginBottom: "20px",
        }}
      >
        最終更新日: {formatDate(metaData.lastUpdated)}
      </div>

      <p>{metaData.description}</p>

      {/* 内積の解説 */}
      <h2>内積の解説</h2>
      <p>
        ベクトル積は2種類あり、内積（Inner Product, Scalar Product）と外積（Outer Product, Vector Product）の結果と意味、活用に大きな違いがあることをしっかり理解しましょう。
        <br />
        ここでは内積について示します。外積は以下のページを見てください。
      </p>

      <Link href="/linear_algebra/crossproduct">外積のページ</Link>

      <p>
        特に、内積は機械学習において、使用頻度が高く、ベクトル同士の類似度を計算するために使用するコサイン類似度とも密接に関係します。そのあたりも意識して理解を深めるようにしましょう。
      </p>
      <p>
        任意のベクトル a と b の内積は次式のように定義されます。
        <br />
        <InlineMath math="\mathbf{a}\cdot\mathbf{b}=\mathbf{a}^{T}\mathbf{b}=\mathbf{b}^{T}\mathbf{a}" />
        <br />
        <InlineMath math="\mathbf{a}\cdot\mathbf{b}= \|\mathbf{a}\|\|\mathbf{b}\|\cos{\theta}" />

      </p>



      <p>ここまで頑張った</p>

      {/*
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
      </p>*/}

      <p>
        インラインで数式を表示します: <InlineMath math="c = \pm\sqrt{a^2 + b^2}" />
      </p>

    </div>
  );
}
