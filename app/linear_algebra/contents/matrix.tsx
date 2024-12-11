import { metadata } from "@/app/linear_algebra/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function pageContent() {
  const pagename: string = "matrix"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption" id="1">
        行列とは
      </h2>
      <p>
        行列は、数や式を表にしたものです。行列は、数学や物理学、工学などの様々な分野で利用されます。
        <br />
        行列は、以下のように表現されます。
      </p>

      <CenteredEquation
        equation="
        A = \begin{pmatrix}
          a_{11} & a_{12} & \cdots & a_{1n} \\
          a_{21} & a_{22} & \cdots & a_{2n} \\
          \vdots & \vdots & \ddots & \vdots \\
          a_{m1} & a_{m2} & \cdots & a_{mn}
        \end{pmatrix}"
      />

      <p>基本的に大文字の英語で行列を表します。</p>

      <h3 id="1.1">用語の説明</h3>
      <ul>
        <li>
          <b>行</b>
          <p>
            行は、行列の横方向の要素を表します。先ほどの行列では、行は&nbsp;
            <InlineMath math="m" />
            &nbsp; 行あります。
          </p>
        </li>
        <li>
          <b>列</b>
          <p>
            列は、行列の縦方向の要素を表します。先ほどの行列では、列は&nbsp;
            <InlineMath math="n" />
            &nbsp; 列あります。
          </p>
        </li>
        <li>
          <b>行列</b>
          <p>
            行列は、数や式を表にしたものです。先ほどの行列は、&nbsp;
            <InlineMath math="m" />
            &nbsp; 行&nbsp;
            <InlineMath math="n" />
            &nbsp; 列の行列といいます。
          </p>
        </li>
        <li>
          <b>行列の大きさ</b>
          <p>
            行列の大きさは、行数と列数を表します。先ほどの行列は、&nbsp;
            <InlineMath math="m \times n" />
            &nbsp; の大きさの行列です。
          </p>
        </li>
        <li>
          <b>要素</b>
          <p>
            行列の要素&nbsp;
            <InlineMath math="a_{ij}" />
            &nbsp; は、&nbsp;
            <InlineMath math="i" />
            &nbsp;行&nbsp;
            <InlineMath math="j" />
            &nbsp; 列に位置する数を表します。
          </p>
        </li>
        <li>
          <b>正方行列</b>
          <p>
            行列の行数と列数が等しい行列を正方行列といいます。正方行列は、&nbsp;
            <InlineMath math="n \times n" />
            &nbsp; の大きさの行列です。
          </p>
        </li>
      </ul>

      <ImageModal
        imagePath={`${imagePath}/matrix.png`}
        altText="行と列を図として表したもの"
      />

      <h2 className="caption" id="2">
        特殊な行列
      </h2>
      <h3 id="2.1">単位行列</h3>
      <p>
        単位行列は、対角成分が1で、それ以外の成分が0の正方行列です。単位行列は&nbsp;
        <InlineMath math="I" />
        &nbsp; か&nbsp;
        <InlineMath math="E" />
        &nbsp; で表すことが一般的です。
      </p>
      <CenteredEquation equation="I = \begin{pmatrix} 1 & 0 & \cdots & 0 \\ 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & 1 \end{pmatrix}" />
      <p>
        単位行列は、行列の掛け算において、単位元の役割を果たします。
        <br />
        簡単に言うと単位行列&nbsp;
        <InlineMath math="I" />
        &nbsp;と任意の行列&nbsp;
        <InlineMath math="A" />
        &nbsp;の積は、元の行列&nbsp;
        <InlineMath math="A" />
        &nbsp;と等しくなります。
        <br />
        <br />
        式で表すと以下の通りです。
        <br />
        <InlineMath math="AI = IA = A" />
      </p>

      <h3 id="2.2">ゼロ行列</h3>
      <p>
        ゼロ行列は、全ての成分が0の行列です。ゼロ行列は&nbsp;
        <InlineMath math="O" />
        &nbsp; で表すことが一般的です。
      </p>
      <CenteredEquation equation="O = \begin{pmatrix} 0 & 0 & \cdots & 0 \\ 0 & 0 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & 0 \end{pmatrix}" />
    </>
  );
}
