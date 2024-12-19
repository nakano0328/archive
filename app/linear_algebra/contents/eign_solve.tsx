import { metadata } from "@/app/linear_algebra/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import CustomLink from "@/app/components/CustomLink";

export default function pageContent() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <>
      <h2 className="caption">定義</h2>
      <p>
        行列 <InlineMath math="A" /> に対して、スカラー
        <InlineMath math="\lambda" /> とベクトル
        <InlineMath math="\bm{x}" /> が次の関係を満たすとき、
        <InlineMath math="\lambda" /> を<strong>固有値</strong>、
        <InlineMath math="\bm{x}" /> を <InlineMath math="\lambda" />
        に対応する
        <strong>固有ベクトル</strong> と呼びます。
      </p>
      <CenteredEquation equation="A\bm{x}=\lambda\bm{x}" />
      <p>
        ここで、
        <InlineMath math="A" /> は n次正方行列、
        <InlineMath math="\bm{x}" />
        &nbsp;は
        <InlineMath math="n\times1" />
        のベクトルです。
        <br />
        <br />
        性質については以下のページにまとめています。
      </p>

      <CustomLink
        href="/linear_algebra/eign_property"
        imageUrl={`${basePath}/linear_algebra/eign_property/thumb.png`}
        altText="固有値と固有ベクトルの性質ページのサムネ"
        siteName={metadata.eign_property.title}
        description={metadata.eign_property.description}
      />

      <h2 className="caption">求め方</h2>
      <p>
        方程式&nbsp;
        <InlineMath math="A\bm{x}=\lambda\bm{x}" />
        &nbsp; を変形すると、
        <InlineMath math="(A-\lambda I)\bm{x}=0" />
        となります。これは、固有値問題の一般系です。
        <br />
        この式の自明な解は、
        <InlineMath math="\bm{x}=\bm{0}" />
        &nbsp;
        ですが、それは固有ベクトルとしては意味がありません。なので非自明な解を求めるためには、以下の式を満たす&nbsp;
        <InlineMath math="\lambda" />
        &nbsp;を見つける必要があります。
      </p>
      <CenteredEquation equation="\det(A-\lambda I)=0" />
      <p>
        ここで、
        <InlineMath math="\det(A-\lambda I)=0" />
        は固有値を求めるための方程式です。これを固有方程式と呼びます。
      </p>

      <h2 className="caption">2次正方行列の例題</h2>
      <p>
        行列
        <InlineMath
          math={`A=\\begin{pmatrix}
        2 & -1 \\\\
        -1 & 2
        \\end{pmatrix}`}
        />
        の固有値を求めましょう。
      </p>
      <p>
        まず、固有方程式
        <InlineMath math="\det(A-\lambda I)=0" />
        を解きます。
      </p>
      <CenteredEquation
        equation={`\\begin{align*}
        \\det(A-\\lambda I) &= \\begin{vmatrix}
        2-\\lambda & -1 \\\\
        -1 & 2-\\lambda
        \\end{vmatrix} \\\\
        &= (2-\\lambda)(2-\\lambda)-(-1)\\times-1 \\\\
        &= 4-4\\lambda+\\lambda^2-1 \\\\
        &= \\lambda^2-4\\lambda+3
        \\end{align*}`}
      />
      <p>
        この方程式を解くと、固有値は
        <InlineMath math="\lambda=1,3" />
        です。
      </p>
      <p>
        次に、固有値に対応する固有ベクトルを求めます。
        <br />
        <br />
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
        <InlineMath math="\bm{x_1} = \begin{pmatrix}1 \\ 1 \end{pmatrix}" />
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
        <InlineMath math="\bm{x_2} = \begin{pmatrix}1 \\ -1 \end{pmatrix}" />
        とわかります。
      </p>

      <h2 className="caption">3次正方行列の例題</h2>
      <p>
        3次正方行列
        <InlineMath
          math={`B=\\begin{pmatrix}
        1 & 2 & 3 \\\\
        0 & 4 & 5 \\\\
        0 & 0 & 6
        \\end{pmatrix}`}
        />
        の固有値を求めましょう。
      </p>
      <p>
        まず、固有方程式&nbsp;
        <InlineMath math="\det(B-\lambda I)=0" />
        を解きます。
      </p>
      <CenteredEquation
        equation="\begin{align*}
        \det(B-\lambda I) &= \begin{vmatrix}
        1-\lambda & 2 & 3 \\
        0 & 4-\lambda & 5 \\
        0 & 0 & 6-\lambda
        \end{vmatrix} \\
        &= (1-\lambda)(4-\lambda)(6-\lambda)
        \end{align*}"
      />
      <p>
        この方程式を解くと、固有値は
        <InlineMath math="\lambda=1,4,6" />
        です。
      </p>
      <p>
        次に、各固有値に対応する固有ベクトルを求めます。
        <br />
        <br />
        <InlineMath math="\lambda=1" />
        の場合
      </p>
      <CenteredEquation
        equation="(B-\lambda I)\bm{x}=\begin{pmatrix}
        0 & 2 & 3 \\
        0 & 3 & 5 \\
        0 & 0 & 5
        \end{pmatrix}\begin{pmatrix}x \\ y \\ z \end{pmatrix}=\begin{pmatrix}0 \\ 0 \\ 0 \end{pmatrix}"
      />
      <p>
        よって
        <InlineMath math="\lambda=1" />
        に対する固有ベクトルは
        <InlineMath math="\bm{x_1} = \begin{pmatrix}1 \\ -\frac{5}{3} \\ 1 \end{pmatrix}" />
        とわかります。
        <br />
        <br />
        <InlineMath math="\lambda=4" />
        の場合
      </p>
      <CenteredEquation
        equation="(B-\lambda I)\bm{x}=\begin{pmatrix}
        -3 & 2 & 3 \\
        0 & 0 & 5 \\
        0 & 0 & 2
        \end{pmatrix}\begin{pmatrix}x \\ y \\ z \end{pmatrix}=\begin{pmatrix}0 \\ 0 \\ 0 \end{pmatrix}"
      />
      <p>
        よって
        <InlineMath math="\lambda=4" />
        に対する固有ベクトルは
        <InlineMath math="\bm{x_2} = \begin{pmatrix}1 \\ -\frac{3}{2} \\ 0 \end{pmatrix}" />
        とわかります。
        <br />
        <br />
        <InlineMath math="\lambda=6" />
        の場合
      </p>
      <CenteredEquation
        equation="(B-\lambda I)\bm{x}=\begin{pmatrix}
        -5 & 2 & 3 \\
        0 & -2 & 5 \\
        0 & 0 & 0
        \end{pmatrix}\begin{pmatrix}x \\ y \\ z \end{pmatrix}=\begin{pmatrix}0 \\ 0 \\ 0 \end{pmatrix}"
      />
      <p>
        よって
        <InlineMath math="\lambda=6" />
        に対する固有ベクトルは
        <InlineMath math="\bm{x_3} = \begin{pmatrix}1 \\ 1 \\ 0 \end{pmatrix}" />
        とわかります。
      </p>
    </>
  );
}
