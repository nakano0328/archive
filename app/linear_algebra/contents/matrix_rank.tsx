import { metadata } from "@/app/linear_algebra/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";

export default function PageContent() {
  const pagename: string = "matrix_rank"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">ランクとは</h2>
      <p>
        行列のランク（階数）とは、行列の列ベクトル（または行ベクトル）の線形独立な数を表します。
        <br />
        例えば、次の行列において、
      </p>
      <CenteredEquation equation="A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}" />
      <CenteredEquation equation="rank(A)=N" />
      <p>この行列の列ベクトルは、</p>
      <CenteredEquation equation="\begin{pmatrix} 1 \\ 4 \end{pmatrix}, \begin{pmatrix} 2 \\ 5 \end{pmatrix}, \begin{pmatrix} 3 \\ 6 \end{pmatrix}" />
      <p>
        となりますが、これらのベクトルは線形独立です。したがって、この行列のランクは2となります。
        <br />
        また、行列Aのランクが2ということを
        <InlineMath math="rank(A) = 2" />
        と表します。
      </p>

      <h2 className="caption">ランクの求め方</h2>
      <p>
        行列のランクを求める方法はいくつかありますが、以下の方法が一般的です。
      </p>
      <ol>
        <li>行列を行基本変形して階段行列（または行列の標準形）に変換する。</li>
        <li>階段行列の0でない行の数を数える。</li>
      </ol>
      <p>
        ここで、階段行列とは、行列の左上から右下にかけて、対角成分よりも右下の成分がすべて0である行列のことを指します。
        <br />
        図で表すと以下のようになります。
      </p>
      <ImageModal
        imagePath={`${imagePath}/kaidan.png`}
        altText="階段行列の図"
      />
      <p>
        この図のピンクの部分は何の数字でもいいですが、左下の部分は全て０でないといけません。これが階段行列です。
      </p>

      <h2 className="caption">行基本変形の詳細</h2>
      <p>行基本変形には以下の三つの操作があります：</p>
      <ol>
        <li>行の交換</li>
        <li>行のスカラー倍</li>
        <li>ある行のスカラー倍を他の行に加える</li>
      </ol>
      <p>これらの操作を用いて行列を階段行列に変換します。</p>

      <h2 className="caption">例題</h2>
      <h3>例題1</h3>
      <p>次の行列のランクを求めてください。</p>
      <CenteredEquation equation="B = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}" />
      <p>この行列を階段行列に変換すると、</p>
      <CenteredEquation equation="\begin{pmatrix} 1 & 2 & 3 \\ 0 & -3 & -6 \end{pmatrix}" />
      <p>
        となります。
        <br />
        よって、
        <InlineMath math="rank(B) = 2" /> となります。
      </p>

      <h3>例題2</h3>
      <p>次の行列のランクを求めてください。</p>
      <CenteredEquation equation="C = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 5 & 7 & 9 \end{pmatrix}" />
      <p>この行列を階段行列に変換すると、</p>
      <CenteredEquation equation="\begin{pmatrix} 1 & 2 & 3 \\ 0 & -3 & -6 \\ 0 & 0 & 0 \end{pmatrix}" />
      <p>
        となります。
        <br />
        よって、
        <InlineMath math="rank(C) = 2" /> となります。
      </p>

      <h3>例題3</h3>
      <p>次の行列のランクを求めてください。</p>
      <CenteredEquation equation="D = \begin{pmatrix} 1 & 2 & 3 & 4 \\ 5 & 6 & 7 & 8 \\ 9 & 10 & 11 & 12 \\ 13 & 14 & 15 & 16 \end{pmatrix}" />
      <p>この行列を階段行列に変換すると、</p>
      <CenteredEquation equation="\begin{pmatrix} 1 & 2 & 3 & 4 \\ 0 & -4 & -8 & -12 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}" />
      <p>
        となります。
        <br />
        よって、
        <InlineMath math="rank(D) = 2" /> となります。
      </p>
    </>
  );
}
