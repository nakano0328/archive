import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import { metadata } from "@/app/linear_algebra/metadata";

export default function pageContent() {
  const pagename: string = "linear_combination"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">線形結合とは</h2>
      <p>
        線形結合とは、ベクトルのスカラー倍と和を組み合わせたものです。ベクトル
        <InlineMath math="\bm{v}_1,\bm{v}_2,\cdots,\bm{v}_n" />
        とスカラー
        <InlineMath math="c_1,c_2,\cdots,c_n" />
        を用いて、次のように表されます。
      </p>
      <CenteredEquation equation="c_1\bm{v}_1 + c_2\bm{v}_2 + \cdots + c_n\bm{v}_n" />
      <ImageModal
        imagePath={`${imagePath}/linear_combination.png`}
        altText="線形結合の図"
      />
      <p>
        この式は、ベクトル
        <InlineMath math="\bm{v}_1,\bm{v}_2,\cdots,\bm{v}_n" />
        の線形結合を表しています。
      </p>
      <p>
        線形結合は、ベクトルの線形空間において重要な概念です。線形結合を用いることで、ベクトルの生成や線形独立性、基底などを議論することができます。
      </p>

      <h2 className="caption">線形結合の例</h2>
      <p>以下に、線形結合の例を示します。</p>
      <h3>例1</h3>
      <p>
        ベクトル
        <InlineMath math="\bm{v}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}" />,
        <InlineMath math="\bm{v}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}" />
        に対して、次の線形結合を考えます。
      </p>
      <CenteredEquation equation="2\bm{v}_1 + 3\bm{v}_2" />
      <p>
        この線形結合は、ベクトル
        <InlineMath math="\begin{pmatrix} 2 \\ 0 \end{pmatrix} + \begin{pmatrix} 0 \\ 3 \end{pmatrix} = \begin{pmatrix} 2 \\ 3 \end{pmatrix}" />
        となります。
      </p>
      <h3>例2</h3>
      <p>
        ベクトル
        <InlineMath math="\bm{v}_1 = \begin{pmatrix} 1 \\ 1 \\ 2\end{pmatrix}" />
        ,
        <InlineMath math="\bm{v}_2 = \begin{pmatrix} 0 \\ 1 \\ 1\end{pmatrix}" />
        ,
        <InlineMath math="\bm{v}_3 = \begin{pmatrix} 1 \\ 0 \\ 1\end{pmatrix}" />
        に対して、次の線形結合を考えます。
      </p>
      <CenteredEquation equation="2\bm{v}_1 - \bm{v}_2 + 3\bm{v}_3" />
      <p>
        この線形結合は、ベクトル
        <InlineMath math="2\begin{pmatrix} 1 \\ 1 \\ 2\end{pmatrix} - \begin{pmatrix} 0 \\ 1 \\ 1\end{pmatrix} + 3\begin{pmatrix} 1 \\ 0 \\ 1\end{pmatrix} = \begin{pmatrix} 2 \\ 2 \\ 4\end{pmatrix} - \begin{pmatrix} 0 \\ 1 \\ 1\end{pmatrix} + \begin{pmatrix} 3 \\ 0 \\ 3\end{pmatrix} = \begin{pmatrix} 5 \\ 1 \\ 6\end{pmatrix}" />
        となります。
      </p>
    </>
  );
}
