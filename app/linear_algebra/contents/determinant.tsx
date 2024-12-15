import { metadata } from "@/app/linear_algebra/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";
import Image from "next/image";

export default function pageContent() {
  const pagename: string = "determinant"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">行列式の定義</h2>
      <p>
        n次の<b>正方行列</b>Aの行列式は、det(A)または|A|と表記されます。
        <br />
        以下のように定義されます。
      </p>
      <CenteredEquation equation="|A| = \sum_{\sigma \in S_n} \text{sgn}(\sigma) a_{1\sigma(1)}a_{2\sigma(2)}\cdots a_{n\sigma(n)}" />
      <p>
        ここで、&nbsp;
        <InlineMath math="S_n" />
        &nbsp;はn個の要素を持つ置換の集合、&nbsp;
        <InlineMath math="\sigma" />
        &nbsp;は置換、&nbsp;
        <InlineMath math="\text{sgn}(\sigma)" />
        &nbsp;は置換の符号、&nbsp;
        <InlineMath math="a_{ij}" />
        &nbsp;は行列Aの(i, j)成分を表します。
      </p>

      <h2 className="caption">行列式の計算方法</h2>
      <h3>2次正方行列の行列式</h3>
      <p>
        2次正方行列&nbsp;
        <InlineMath math="A = \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix}" />
        &nbsp;の行列式は次のように定義されます。
      </p>
      <CenteredEquation equation="|A| = a_{11}a_{22} - a_{12}a_{21}" />

      <p>
        2次正方行列の行列式は左上から右下に引いた対角線の積から、右上から左下に引いた対角線の積を引いた値として求めることができます。
        <br />
        図に表すと以下の通りです。
      </p>

      <ImageModal
        imagePath={`${imagePath}/2times2.png`}
        altText="2*2の行列式の求め方を表した図"
      />

      <h3>3次正方行列の行列式</h3>
      <p>
        3次正方行列&nbsp;
        <InlineMath math="A = \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}" />
        &nbsp;の行列式は次のように定義されます。
      </p>
      <CenteredEquation equation="|A| = a_{11} a_{22} a_{33} + a_{12} a_{23} a_{31} + a_{13} a_{21} a_{32} - a_{13} a_{22} a_{31} - a_{11} a_{23} a_{32} - a_{12} a_{21} a_{33} " />

      <p>
        3次正方行列の行列式は、サラスの方法を用いることで簡単に求めることができます。
        <br />
        以下がサラスの方法を用いた3次正方行列の行列式の計算例です。
      </p>

      <Image
        src={`${imagePath}/sarasu.gif`}
        alt="行列式の計算方法"
        width={600} // 適切な幅を指定してください
        height={400} // 適切な高さを指定してください
        style={{ width: "90%", height: "auto" }}
      />

      <h3>n次正方行列の行列式</h3>
      <p>
        n次正方行列の行列式は、余因子展開を用いて計算することができます。
        <br />
        以下がn次正方行列の行列式の計算方法です。
      </p>

      <CenteredEquation equation="|A| = \sum_{j=1}^{n} a_{ij} C_{ij}" />

      <p>
        ここで、&nbsp;
        <InlineMath math="C_{ij}" />
        &nbsp;は(i, j)成分の余因子です。
        <br />
        余因子展開については以下を参照してください。
      </p>

      <CustomLink
        href="/linear_algebra/cofactor_matrix"
        imageUrl={`${basePath}/linear_algebra/cofactor_matrix/thumb.png`}
        altText="余因子行列と余因子展開ページのサムネ"
        siteName={metadata.cofactor_matrix.title}
        description={metadata.cofactor_matrix.description}
      />

      <h2 className="caption">行列式の性質</h2>
      <p>
        行列式にはいくつかの性質があります。
        <br />
        以下に行列式の性質をいくつか紹介します。
      </p>

      <ol>
        <li>
          <b>正則行列の条件</b>
        </li>
        <p>
          行列&nbsp;
          <InlineMath math="A" />
          &nbsp;の行列式が0でないとき、行列&nbsp;
          <InlineMath math="A" />
          &nbsp;は正則であるといいます。
          <br />
          またこの時の行列&nbsp;
          <InlineMath math="A" />
          &nbsp;のことを<b>正則行列</b>といいます。
        </p>
        <li>
          <b>行列式の転置</b>
        </li>
        <p>
          行列&nbsp;
          <InlineMath math="A" />
          &nbsp;の転置行列の行列式は、行列&nbsp;
          <InlineMath math="A" />
          &nbsp;の行列式と等しいです。
        </p>
        <CenteredEquation equation="|A^T| = |A|" />

        <li>
          <b>行列式の積</b>
        </li>
        <p>
          2つの行列&nbsp;
          <InlineMath math="A" />
          &nbsp;,&nbsp;
          <InlineMath math="B" />
          &nbsp;の積の行列式は、行列&nbsp;
          <InlineMath math="A" />
          &nbsp;と行列&nbsp;
          <InlineMath math="B" />
          &nbsp;の行列式の積と等しいです。
        </p>
        <CenteredEquation equation="|AB| = |A| \cdot |B|" />

        <li>
          <b>単位行列の行列式</b>
        </li>
        <p>
          n次の単位行列&nbsp;
          <InlineMath math="I" />
          &nbsp;の行列式は1です。
        </p>
        <CenteredEquation equation="|I| = 1" />

        <li>
          <b>逆行列の行列式</b>
        </li>
        <p>
          n次正則行列&nbsp;
          <InlineMath math="A" />
          &nbsp;の逆行列&nbsp;
          <InlineMath math="A^{-1}" />
          &nbsp;の行列式は、行列&nbsp;
          <InlineMath math="A" />
          &nbsp;の行列式の逆数と等しいです。
        </p>
        <CenteredEquation equation="|A^{-1}| = \frac{1}{|A|}" />

        <li>
          <b>定数倍行列の行列式</b>
        </li>
        <p>
          n次正則行列&nbsp;
          <InlineMath math="A" />
          &nbsp;の各要素を定数&nbsp;
          <InlineMath math="c" />
          &nbsp;倍した行列&nbsp;
          <InlineMath math="cA" />
          &nbsp;の行列式は、行列&nbsp;
          <InlineMath math="A" />
          &nbsp;の行列式の&nbsp;
          <InlineMath math="c^n" />
          &nbsp;倍です。
        </p>
        <CenteredEquation equation="|cA| = c^n |A|" />
      </ol>
    </>
  );
}
