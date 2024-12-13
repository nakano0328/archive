import { metadata } from "@/app/linear_algebra/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function pageContent() {
  const pagename: string = "determinant"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">行列式</h2>
      <p>
        行列式（ぎょうれつしき、determinant）は、正方行列に対して定義される数で、その行列の性質を表す指標の一つです。
        <br />
        ここでは、行列式の定義や計算方法、性質について説明します。
      </p>

      <h2 className="caption">行列式の定義</h2>
      <p>
        n次<b>正方行列</b>Aの行列式は、det(A)または|A|と表記されます。
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
        <InlineMath math="A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}" />
        &nbsp;の行列式は次のように定義されます。
      </p>
      <CenteredEquation equation="|A| = ad - bc" />

      <h3>3次正方行列の行列式</h3>
      <p>
        3次正方行列&nbsp;
        <InlineMath math="A = \begin{pmatrix} a & b & c \\ d & e & f \\ g & h & i \end{pmatrix}" />
        &nbsp;の行列式は次のように定義されます。
      </p>
      <CenteredEquation equation="|A| = aei + bfg + cdh - ceg - bdi - afh" />
      <p>
        この方法はサラスの方法と呼ばれ、行列式の計算方法の一つです。
      </p>



      <h2 className="caption">行列式の幾何学的な意味</h2>
      <p>
        幾何学的な意味として、行列式は線形変換後の平面の拡大縮小の度合いを表す量です。具体的には、基底ベクトル（基本ベクトル）が張る面積の変化量を示します。
        <br />
      </p>
    </>
  );
}
