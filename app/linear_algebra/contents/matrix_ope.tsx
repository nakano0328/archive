import { metadata } from "@/app/linear_algebra/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function pageContent() {
  const pagename: string = "matrix_ope"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">行列の演算</h2>
      <p>
        行列には、足し算や引き算、掛け算などの演算があります。
        <br />
        ここでは、行列の足し算と引き算について説明します。
        <br />
        このページではAとBは以下のような行列とします。
      </p>
      <CenteredEquation equation="A = \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix} , B = \begin{pmatrix} b_{11} & b_{12} \\ b_{21} & b_{22} \end{pmatrix}" />

      <h2 className="caption">行列の足し算</h2>
      <p>
        2つの行列を足し合わせるときは、同じ位置にある要素同士を足します。
        <br />
        A+Bを計算すると、次のようになります。
      </p>
      <CenteredEquation equation="A + B = \begin{pmatrix} a_{11} + b_{11} & a_{12} + b_{12} \\ a_{21} + b_{21} & a_{22} + b_{22} \end{pmatrix}" />

      <p>このように、同じ位置にある要素同士を足し合わせることができます。</p>

      <h2 className="caption">行列の引き算</h2>
      <p>
        やり方は足し算と同じです。
        <br />
        2つの行列を引き合わせるときは、同じ位置にある要素同士を引きます。
        <br />
        A-Bを計算すると、次のようになります。
      </p>
      <CenteredEquation equation="A - B = \begin{pmatrix} a_{11} - b_{11} & a_{12} - b_{12} \\ a_{21} - b_{21} & a_{22} - b_{22} \end{pmatrix}" />

      <p>このように、同じ位置にある要素同士を引き合わせることができます。</p>

      <h2 className="caption">行列のスカラー倍</h2>
      <p>
        行列のスカラー倍とは、行列の各要素に同じスカラー（数）を掛けることです。
        <br />
        例えば、行列Aをスカラーc倍すると、次のようになります。
      </p>
      <CenteredEquation equation="cA = \begin{pmatrix} ca_{11} & ca_{12} \\ ca_{21} & ca_{22} \end{pmatrix}" />
      <p>
        このように、行列の各要素にスカラーを掛けることで、行列のスカラー倍を求めることができます。
      </p>

      <h2 className="caption">行列の積</h2>
      <p>
        行列の積とは、2つの行列を掛け合わせることです。
        <br />
        行列Aと行列Bの積ABを計算するには、Aの行とBの列の要素を掛け合わせて足し合わせます。
      </p>

      <p>例えば、行列AとBの積は次のようになります。</p>
      <CenteredEquation equation="AB = \begin{pmatrix} a_{11}b_{11} + a_{12}b_{21} & a_{11}b_{12} + a_{12}b_{22} \\ a_{21}b_{11} + a_{22}b_{21} & a_{21}b_{12} + a_{22}b_{22} \end{pmatrix}" />
      <p>
        このように、行列の積を求めることができます。
        <br />
        行列の積は、行列の順序によって結果が異なるため、注意が必要です。
      </p>
    </>
  );
}
