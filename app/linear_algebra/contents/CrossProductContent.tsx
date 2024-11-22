import Breadcrumb from "@/app/components/Breadcrumb";
import { metadata } from "@/app/linear_algebra/metadata";
import { formatDate } from "@/app/components/formatDate";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import Image from "next/image";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function pageContent() {
  const pagename: string = "crossproduct"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  const dotmetaData = metadata.dotproduct;

  return (
    <div style={{ padding: "20px" }}>
      <Breadcrumb
        items={[
          { name: "線形代数", href: `/${metaData.topic}` },
          {
            name: metaData.title,
            href: `/${metaData.topic}/${pagename}`,
          },
        ]}
      />

      <Image
        src={`${imagePath}/thumb.png`}
        alt={metaData.title}
        width={100}
        height={50}
        className="thumbpage"
      />
      <h1 className="title">{metaData.title}</h1>

      <div className="lastUpdated">
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
        ここでは<b>外積</b>
        について説明します。内積については以下のページをご覧ください。
      </p>

      <CustomLink
        href="/linear_algebra/dotproduct"
        imageUrl={`${basePath}/${dotmetaData.topic}/dotproduct/thumb.png`}
        altText="内積ページのサムネ"
        siteName={dotmetaData.title}
        description={dotmetaData.description}
      />

      <h2>外積とは</h2>

      <p>
        任意のベクトル&nbsp;
        <InlineMath math="\mathbf{a}" />
        &nbsp;と&nbsp;
        <InlineMath math="\mathbf{b}" />
        &nbsp;の外積は次式のように定義されます。
      </p>

      <CenteredEquation
        equation="\begin{align*}
        \mathbf{a}\times\mathbf{b} &=\|\mathbf{a}\|\|\mathbf{b}\|\sin{\theta}
        \end{align*}"
      />

      <p>
        外積には2次元の場合と3次元の場合で考えることは違います。
        <br />
        一般的には3次元のほうがより多く扱われますが、イメージを持つためにも2次元の外積の説明にも目を通してください。
      </p>

      <h2>2次元の外積</h2>

      <p>
        2次元ベクトルの場合、外積はスカラー量として計算されます。また、結果はベクトルの成分に対して「z方向の疑似的なベクトル」として扱われます。
      </p>

      <p>
        2次元の任意のベクトル&nbsp;
        <InlineMath math="\mathbf{a}" />
        &nbsp;と&nbsp;
        <InlineMath math="\mathbf{b}" />
        &nbsp;の外積は次式のように定義されます。
      </p>

      <CenteredEquation
        equation="\begin{align*}
        \mathbf{a}\times\mathbf{b} = a_1 b_2 - a_2 b_1
        \end{align*}"
      />

      <h2>具体例 - 2次元の外積</h2>

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

      <ImageModal
        imagePath={`${imagePath}/vector_2dim.png`}
        altText="ベクトルaとベクトルbを表したグラフ"
      />
      <br />
      <br />

      <CustomLink
        href={`${notePath}/vector_2dim.ipynb`}
        imageUrl={`${imagePath}/vector_2dim.png`}
        altText="ベクトルaとベクトルbを表したグラフ"
        siteName="ベクトルの表示"
        description="ベクトルの表示を行っているコードを示しています。"
        target="_blank"
      />

      <p>
        同じように外積も図で紹介をします。
        <br />
        まず初めに外積を式で表すと以下のようになります。
      </p>

      <CenteredEquation equation="\mathbf{a}\times\mathbf{b}=1 \cdot 1 - 3 \cdot 5 = 1 - 15 = -14" />

      <p>
        これらのベクトルの外積をグラフで表すと以下のようになります。
        <br />
        灰色の部分が外積の大きさを表しています。
        <br />
        このように平行四辺形の部分が外積にあたります。
      </p>

      <ImageModal
        imagePath={`${imagePath}/cross_2dim.png`}
        altText="ベクトルaとベクトルbの外積を表したグラフ"
      />
      <br />
      <br />

      <CustomLink
        href={`${notePath}/cross_2dim.ipynb`}
        imageUrl={`${imagePath}/cross_2dim.png`}
        altText="2次元のベクトルaとベクトルbの外積を表したグラフ"
        siteName="2次元のベクトルの外積の表示"
        description="2次元のベクトルの外積の表示を行っているコードを示しています。"
        target="_blank"
      />

      <h2>3次元の外積</h2>

      <p>
        外積は、3次元空間で定義される2つのベクトルから新たなベクトルを生成する演算です。
        <br />
        外積の結果として得られるベクトルは、2つのベクトルが生成する平面に垂直です。大きさは2つのベクトルが生成する面積と等しいです。
        <br />
        以上のことを説明します。
      </p>
    </div>
  );
}
