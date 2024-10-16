import Breadcrumb from "@/app/components/Breadcrumb";
import { metadata } from "@/app/linear_algebra/metadata";
import { formatDate } from "@/app/components/formatDate";
import Link from "next/link";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import Image from "next/image";
import ImageModal from "@/app/components/ImageModal";

// ページのメタデータを動的に生成
export async function generateMetadata() {
  const metaData = metadata.dotproduct;

  return {
    title: metaData.title,
    description: metaData.description,
  };
}

export default function DotProductPage() {
  const metaData = metadata.dotproduct;
  const imagePath = `/nextjs/linear_algebra/dotproduct`;

  return (
    <div style={{ padding: "20px" }}>
      {/* パンくずリストのの表示 */}
      <Breadcrumb
        items={[
          { name: "線形代数", href: "/linear_algebra" },
          { name: metaData.title, href: "/linear_algebra/dotproduct" },
        ]}
      />

      {/* サムネイル画像の表示 */}
      <Image
        src={`${imagePath}/thumb.png`}
        alt={metaData.title}
        width={100}
        height={50}
        className="thumb"
      />
      <h1 className="title">{metaData.title}</h1>

      {/* 最終更新日の表示 */}
      <div className="Breadcrumb">
        最終更新日: {formatDate(metaData.lastUpdated)}
      </div>
      <p>{metaData.description}</p>

      {/* ページコンテンツ */}
      <h2>ベクトル積について</h2>
      <p>
        ベクトル積には、内積（Dot Product または Inner Product）と外積（Cross
        Product または Vector Product）の2種類があります。
        <br />
        それぞれの計算結果や意味、応用方法には大きな違いがあります。これをしっかり理解しておくことが重要です。
        <br />
        <br />
        ここでは<b>内積</b>
        について説明します。外積については以下のページをご覧ください。
      </p>

      <Link href="/linear_algebra/crossproduct">外積のページ</Link>

      <h2>内積とは</h2>

      <p>
        内積は、特に機械学習の分野で非常に重要です。ベクトル同士の類似度を計算する際に使用されるコサイン類似度とも深く関わっています。
        この点を意識しながら、内積の理解を深めていきましょう。
      </p>

      <p>
        任意のベクトル&nbsp;
        <InlineMath math="\mathbf{a}" />
        &nbsp;と&nbsp;
        <InlineMath math="\mathbf{b}" />
        &nbsp;の内積は次式のように定義されます。
      </p>

      <CenteredEquation
        equation="\begin{align*}
        \mathbf{a}\cdot\mathbf{b} &= \mathbf{a}^{\mathbf{T}}\mathbf{b} = \mathbf{b}^{\mathbf{T}}\mathbf{a} \notag \\
        \mathbf{a}\cdot\mathbf{b} &= \|\mathbf{a}\|\|\mathbf{b}\|\cos{\theta}
        \end{align*}"
      />

      <p>
        ここで&nbsp;
        <InlineMath math="\mathbf{a}^{\mathbf{T}}" />
        &nbsp;は&nbsp;
        <InlineMath math="\mathbf{a}" />
        &nbsp;の転置を表しています。
      </p>

      <h2>具体例</h2>

      <p>
        例を与えて考えてみましょう。ベクトル&nbsp;
        <InlineMath math="\mathbf{a}" />
        &nbsp;と&nbsp;
        <InlineMath math="\mathbf{b}" />
        &nbsp;を以下のような数字を与えた2次元ベクトルとします。
      </p>

      <CenteredEquation
        equation="\begin{align*}
        \mathbf{a} &= \begin{bmatrix} 1 \\ 3 \end{bmatrix} \notag \\
        \mathbf{b} &= \begin{bmatrix} 5 \\ 1 \end{bmatrix}
        \end{align*}
        "
      />

      <p>
        これらのベクトルはグラフで表すと以下のようになります。赤い矢印がベクトル&nbsp;
        <InlineMath math="\mathbf{a}" />
        &nbsp;で、青い矢印がベクトル&nbsp;
        <InlineMath math="\mathbf{b}" />
        &nbsp;です。
      </p>

      <ImageModal imagePath={`${imagePath}/vector.png`} />

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

      <p>
        これらのベクトルの足し算をグラフで表すと以下のようになります。
        <br />
        緑の矢印がベクトルの足し算を表します。
      </p>

      <ImageModal imagePath={`${imagePath}/plus.png`} />

      <p>
        同じように内積でも図解をします。
        <br />
        まず初めに式で表すと以下のようになります。
      </p>

      <CenteredEquation equation="\mathbf{a}\cdot\mathbf{b}=\begin{bmatrix} 1 \ 3 \\\end{bmatrix}\begin{bmatrix}  5 \\ 1 \\\end{bmatrix}=1\cdot5+3\cdot1=8" />

      <p>
        これらのベクトルの内積をグラフで表すと以下のようになります。
        <br />
        緑の矢印がベクトルの内積を表します。
      </p>

      <ImageModal imagePath={`${imagePath}/dot.png`} />

      <p>解説を見たい方は以下を見て下さい。</p>

      <details>
        <summary>解説を見る</summary>
        <p>
          内積は以下のように表されます。
          <br />
          &nbsp;&nbsp;&nbsp;
          <InlineMath math="\mathbf{a}\cdot\mathbf{b} = \|\mathbf{a}\|\|\mathbf{b}\|\cos{\theta}" />
          <br />
          これを以下のように書き換える。
          <br />
          &nbsp;&nbsp;&nbsp;
          <InlineMath math="\mathbf{a}\cdot\mathbf{b} = \|\mathbf{a}\|\cos{\theta}\|\mathbf{b}\|" />
          <br />
          これはベクトル&nbsp;
          <InlineMath math="\mathbf{a}" />
          &nbsp;をベクトル&nbsp;
          <InlineMath math="\mathbf{b}" />
          &nbsp;に射影(projection)したものと&nbsp;
          <InlineMath math="\mathbf{b}" />
          &nbsp;のノルムの積を意味する。
        </p>
      </details>
    </div>
  );
}
