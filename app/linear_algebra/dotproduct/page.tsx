import Breadcrumb from "@/app/components/Breadcrumb";
import { metadata } from "@/app/linear_algebra/metadata";
import { formatDate } from "@/app/components/formatDate"; // 日付フォーマット関数をインポート
import Link from "next/link";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex"; // InlineMath をインポート

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
          { name: "線形代数", href: "/linear_algebra" },
          { name: metaData.title, href: "/linear_algebra/dotproduct" },
        ]}
      />
      <h1
        style={{
          fontSize: "36px",
          textAlign: "center",
          marginBottom: "20px",
          color: "black",
        }} // タイトルが青くならないように
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
        ベクトル積は内積（Dot Product または Inner Product）と外積（Cross
        Product または Vector Product）の2種類あります。
        それぞれの結果と意味、活用に大きな違いがあることをしっかり理解しましょう。
        <br />
        ここでは内積について示します。外積は以下のページを見てください。
      </p>

      <Link href="/linear_algebra/crossproduct">外積のページ</Link>

      <p>
        内積は機械学習において、使用頻度が高いです。
        ベクトル同士の類似度を計算するために使用するコサイン類似度とも密接に関係します。
        そのあたりも意識して理解を深めるようにしましょう。
      </p>

      <p>
        任意のベクトル
        <InlineMath math="\mathbf{a}" />
        と
        <InlineMath math="\mathbf{b}" />
        の内積は次式のように定義されます。
      </p>

      <CenteredEquation
        equation="\mathbf{a}\cdot\mathbf{b}=\mathbf{a}^{T}\mathbf{b}=\mathbf{b}^{T}\mathbf{a}\\
        \\[10pt]
        \mathbf{a}\cdot\mathbf{b}= \|\mathbf{a}\|\|\mathbf{b}\|\cos{\theta}"
      />

      <p>ここまで頑張った</p>
    </div>
  );
}
