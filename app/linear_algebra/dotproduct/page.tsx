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
        ベクトル積には、内積（Dot Product または Inner Product）と外積（Cross Product または Vector Product）の2種類があります。<br />
        それぞれの計算結果や意味、応用方法には大きな違いがあります。これをしっかり理解しておくことが重要です。
        <br />
        <br />
        ここでは<b>内積</b>について説明します。外積については以下のページをご覧ください。
      </p>

      <Link href="/linear_algebra/crossproduct">外積のページ</Link>

      <p>
        内積は、特に機械学習の分野で非常に重要です。ベクトル同士の類似度を計算する際に使用されるコサイン類似度とも深く関わっています。
        この点を意識しながら、内積の理解を深めていきましょう。
      </p>

      <p>
        任意のベクトル
        <InlineMath math="\mathbf{a}" />
        と
        <InlineMath math="\mathbf{b}" />
        の内積は次式のように定義されます。
      </p>

      <CenteredEquation
        equation="\begin{align*}
        \mathbf{a}\cdot\mathbf{b} &= \mathbf{a}^{T}\mathbf{b} = \mathbf{b}^{T}\mathbf{a} \notag \\
        \mathbf{a}\cdot\mathbf{b} &= \|\mathbf{a}\|\|\mathbf{b}\|\cos{\theta}
        \end{align*}"
      />

      <p>
        例を与えて考えてみましょう。ベクトル<InlineMath math="\mathbf{a}" />と
        <InlineMath math="\mathbf{b}" />を以下のような数字を与えた2次元ベクトルとします。
      </p>

      <CenteredEquation
        equation="\begin{align*}
        \mathbf{a} &= \begin{bmatrix} 1 \\ 3 \end{bmatrix} \notag \\
        \mathbf{b} &= \begin{bmatrix} 5 \\ 1 \end{bmatrix}
        \end{align*}
        "
      />

      <p>これらのベクトルはグラフで表すと以下のようになります。</p>

      <p>ここにコマンドを記す。</p>

      <p>これらのベクトルの足し算を式で表すと以下のようになります。</p>

      <CenteredEquation
        equation="\mathbf{a}+\mathbf{b}= \begin{bmatrix}
        1 \\ 3 \\
        \end{bmatrix} + \begin{bmatrix}
        5 \\ 1 \\
        \end{bmatrix} = \begin{bmatrix}
        1+5 \\ 3+1 \\
        \end{bmatrix} = \begin{bmatrix}
        6 \\ 4 \\
        \end{bmatrix}"
      />

      <p>これらのベクトルの足し算をグラフで表すと以下のようになります。</p>

      <p>ここにコマンドを記す。</p>

      <p>
        同じように内積でも図解をします。<br />
        まず初めに式で表すと以下のようになります。
      </p>

      <CenteredEquation
        equation="\mathbf{a}\cdot\mathbf{b}=\begin{bmatrix} 1 \ 3 \\\end{bmatrix}\begin{bmatrix}  5 \\ 1 \\\end{bmatrix}=1\cdot5+3\cdot1=8"
      />

      <p>これらのベクトルの内積をグラフで表すと以下のようになります。</p>

      <p>ここにコマンドを記す。</p>

      <p>解説を見たい方は以下を見て下さい。</p>

      <details>
        <summary>解説を見る</summary>
        <p>ここに解説が表示されます。</p>
      </details>

      <p>ここまで頑張った</p>
    </div>
  );
}
