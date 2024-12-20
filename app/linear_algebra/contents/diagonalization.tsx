import { metadata } from "@/app/linear_algebra/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function pageContent() {
  const pagename: string = "diagonalization"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">対角化とは</h2>
      <p>
        ある行列を対角行列に変換することを<b>対角化</b>といいます。
      </p>
      <p>
        まず、<b>対角行列</b>とは、非対角成分がすべて0である行列のことです。
        <br />
        例えば、次の行列は対角行列です。
      </p>
      <CenteredEquation equation="A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & -5 \end{pmatrix}" />
      <p>
        この行列は、非対角部分がすべて0です。このような行列を対角行列といいます。
      </p>

      <p>
        任意の行列を対角行列に変換することを<b>対角化</b>といいます。
      </p>

      <h2 className="caption">対角化の条件</h2>
      <p>行列Aが対角化可能であるためには、次の条件が必要です。</p>
      <ul>
        <li>行列Aは正方行列であること。</li>
        <li>n次の行列Aにおいて1次独立な固有ベクトルがn個存在すること。</li>
      </ul>

      <h2 className="caption">対角化の手順</h2>
      <p>行列Aを対角化する手順は次の通りです。</p>
      <ol>
        <li>行列Aの固有値を求める。</li>
        <li>行列Aの固有ベクトルを求める。</li>
        <p>固有値と固有ベクトルの求め方は以下のページをご覧ください。</p>
        <CustomLink
          href="/linear_algebra/eign_solve"
          imageUrl={`${basePath}/linear_algebra/eign_solve/thumb.png`}
          altText="固有値と固有ベクトルの求め方ページのサムネ"
          siteName={metadata.eign_solve.title}
          description={metadata.eign_solve.description}
        />
        <li>固有ベクトルを並べた行列を作成する。</li>
        <li>逆行列を求める。</li>
        <li>行列Aを対角化する。</li>
      </ol>

      <h2 className="caption">対角化の例</h2>
      <p>例として以下の行列を対角化することを考えます。</p>
      <CenteredEquation equation="A = \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}" />

      <h3>1.固有値を求める</h3>
      <p>以下の式より固有値を求めます。</p>
      <CenteredEquation equation="\det(A - \lambda I) = 0" />
      <p>この式より行列Aの固有値λは、λ=1,3 です。</p>

      <h3>2.固有ベクトルを求める</h3>
      <p>
        <InlineMath math="\lambda=1" />
        の場合
      </p>
      <CenteredEquation
        equation="(A-\lambda I)\bm{x}=\begin{pmatrix}
        2-1 & -1 \\
        -1 & 2-1
        \end{pmatrix}\begin{pmatrix}x \\ y \end{pmatrix}=\begin{pmatrix}
        1 & -1 \\
        -1 & 1
        \end{pmatrix}\begin{pmatrix}x \\ y \end{pmatrix}=\begin{pmatrix}0 \\ 0 \end{pmatrix}"
      />
      <p>
        よって
        <InlineMath math="\lambda=1" />
        に対する固有ベクトルは
        <InlineMath math="\bm{x_1} = c_1\begin{pmatrix}1 \\ 1 \end{pmatrix}" />
        とわかります。
        <br />
        <br />
        <InlineMath math="\lambda=3" />
        の場合
      </p>
      <CenteredEquation
        equation="(A-\lambda I)\bm{x}=\begin{pmatrix}
        2-3 & -1 \\
        -1 & 2-3
        \end{pmatrix}\begin{pmatrix}x \\ y \end{pmatrix}=\begin{pmatrix}
        -1 & -1 \\
        -1 & -1
        \end{pmatrix}\begin{pmatrix}x \\ y \end{pmatrix}=\begin{pmatrix}0 \\ 0 \end{pmatrix}"
      />
      <p>
        よって
        <InlineMath math="\lambda=3" />
        に対する固有ベクトルは
        <InlineMath math="\bm{x_2} = c_2\begin{pmatrix}1 \\ -1 \end{pmatrix}" />
        とわかります。
      </p>
    </>
  );
}
