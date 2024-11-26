import { metadata } from "@/app/linear_algebra/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
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
    <>
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
        <InlineMath math="\bm{a}" />
        &nbsp;と&nbsp;
        <InlineMath math="\bm{b}" />
        &nbsp;の外積は次式のように定義されます。
      </p>

      <CenteredEquation
        equation="\begin{align*}
        \bm{a}\times\bm{b} &=\|\bm{a}\|\|\bm{b}\|\sin{\theta}
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
        <InlineMath math="\bm{a}" />
        &nbsp;と&nbsp;
        <InlineMath math="\bm{b}" />
        &nbsp;の外積は次式のように定義されます。
      </p>

      <CenteredEquation
        equation="\begin{align*}
        \bm{a}\times\bm{b} = a_1 b_2 - a_2 b_1
        \end{align*}"
      />

      <h2>3次元の外積</h2>

      <p>
        外積は、3次元空間で定義される2つのベクトルから新たなベクトルを生成する演算です。
        <br />
        外積の特徴は以下の通りです。
      </p>
      <ul>
        <li>
          <b>直行</b>
        </li>
        <p>
          生成されるベクトルは、元の2つのベクトル&nbsp;
          <InlineMath math="\bm{a}" />
          &nbsp;と&nbsp;
          <InlineMath math="\bm{b}" />
          &nbsp;の両方に垂直（直交）します。
        </p>
        <li>
          <b>右ねじの法則</b>
        </li>
        <p>
          外積の向きは「右ねじの法則」に従って決まります。
          <br />
          人差し指を1つ目のベクトル方向にむけ、2つ目のベクトルの方向に回転させたとき、親指が指す方向が外積ベクトルの方向になります。
        </p>
      </ul>

      <p>
        2つのベクトル&nbsp;
        <InlineMath math="\bm{a}" />
        &nbsp;と&nbsp;
        <InlineMath math="\bm{b}" />
        &nbsp;をこのように定義します。
      </p>

      <CenteredEquation
        equation="\begin{align*}
        \bm{a} = (a_x,a_y,a_z) \notag \\
        \bm{b} = (b_x,b_y,b_z)
        \end{align*}"
      />

      <p>この時、外積の計算は以下の行列式で行います。</p>
      <CenteredEquation
        equation="\bm{a} \times \bm{b} = 
          \begin{vmatrix}
          \vec{i} & \vec{j} & \vec{k} \\
          a_x & a_y & a_z \\
          b_x & b_y & b_z
          \end{vmatrix}"
      />
      <p>
        ここで&nbsp;
        <InlineMath math="\vec{i} , \vec{j} , \vec{k}" />
        &nbsp;はそれぞれx軸、y軸、z軸の単位ベクトルを表しています。
        <br />
        この式を計算すると以下のようになります。行列式を扱えない方はこちらを覚えましょう。
      </p>

      <CenteredEquation equation="\bm{a} \times \bm{b} = (a_y b_z - a_z b_y , a_z b_x - a_x b_z , a_x b_y - a_y b_x)" />

      <h2>具体例 - 2次元の外積</h2>

      <p>
        例を与えて考えてみましょう。ベクトル&nbsp;
        <InlineMath math="\bm{a}" />
        &nbsp;と&nbsp;
        <InlineMath math="\bm{b}" />
        &nbsp;を以下のような数字を与えた2次元ベクトルとします。
      </p>

      <CenteredEquation
        equation="\begin{align*}
        \bm{a} &= \begin{bmatrix} 3 \\ 1 \end{bmatrix} \notag \\
        \bm{b} &= \begin{bmatrix} 1 \\ 4 \end{bmatrix}
        \end{align*}
        "
      />

      <p>
        これらのベクトルはグラフで表すと以下のようになります。赤い矢印がベクトル&nbsp;
        <InlineMath math="\bm{a}" />
        &nbsp;で、青い矢印がベクトル&nbsp;
        <InlineMath math="\bm{b}" />
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

      <CenteredEquation equation="\bm{a}\times\bm{b}=5 \cdot 3 - 1 \cdot 1 = 15 - 1 = 14" />

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

      <p>
        この結果、外積は -14
        となります。この値はベクトルの方向に垂直な（つまり、2次元空間の外に向かう）z軸方向の大きさを示しています。
      </p>
    </>
  );
}
