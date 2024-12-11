import { metadata } from "@/app/linear_algebra/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function pageContent() {
  const pagename: string = "SimultaneousEquations"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  const crossmetaData = metadata.crossproduct;

  return (
    <>
      <h2 className="caption">連立方程式の行列表現</h2>
      <p>
        連立方程式は、行列を使って表現することができます。行列を使うことで、連立方程式の解法が効率的に行えるようになります。
        <br />
        以下の連立方程式を行列で表現する。
      </p>
      <CenteredEquation
        equation="\begin{cases}
          a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1 \\
          a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = b_2 \\
          \vdots \\
          a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = b_m
          \end{cases}"
      />
      <p>この連立方程式を行列で表現すると、次のようになります。</p>
      <CenteredEquation
        equation="\begin{pmatrix}
        a_{11} & a_{12} & \cdots & a_{1n} \\
        a_{21} & a_{22} & \cdots & a_{2n} \\
        \vdots & \vdots & \ddots & \vdots \\
        a_{m1} & a_{m2} & \cdots & a_{mn}
        \end{pmatrix}
        \begin{pmatrix}
        x_1 \\
        x_2 \\
        \vdots \\
        x_n
        \end{pmatrix}
        =
        \begin{pmatrix}
        b_1 \\
        b_2 \\
        \vdots \\
        b_m
        \end{pmatrix}"
      />
      <p>この行列を次のように表現することもあります。</p>
      <CenteredEquation equation="A\bm{x} = \bm{b}" />
      <p>
        ここで、&nbsp;
        <InlineMath math="A" />
        &nbsp; は係数行列、&nbsp;
        <InlineMath math="\bm{x}" />
        &nbsp; は未知数ベクトル、&nbsp;
        <InlineMath math="\bm{b}" />
        &nbsp; は定数ベクトルです。
        <br />
        また、&nbsp;
        <InlineMath math="A" />
        &nbsp;と&nbsp;
        <InlineMath math="\bm{b}" />
        &nbsp; をまとめて拡大係数行列と呼びます。
      </p>

      <h2 className="caption">連立方程式の解法</h2>
      <p>
        連立方程式の解法には、行列の逆行列を使う方法や、ガウスの消去法などがあります。
        <br />
        ここでは、行列の逆行列を使って連立方程式を解く方法を説明します。
      </p>
      <p>
        連立方程式&nbsp;
        <InlineMath math="A\bm{x} = \bm{b}" />
        &nbsp; の両辺に&nbsp;
        <InlineMath math="A^{-1}" />
        &nbsp; をかけると、次のようになります。
      </p>

      <CenteredEquation
        equation="\begin{align*}
        A^{-1}A\bm{x} &= A^{-1}\bm{b} \\
        \bm{x} &= A^{-1}\bm{b}
        \end{align*}"
      />
      <p>
        このように、連立方程式の解&nbsp;
        <InlineMath math="\bm{x}" />
        &nbsp; は、係数行列&nbsp;
        <InlineMath math="A" />
        &nbsp; の逆行列&nbsp;
        <InlineMath math="A^{-1}" />
        &nbsp; を使って求めることができます。
      </p>

      <h2 className="caption">二元連立方程式の解法</h2>
      <p>以下の二元連立方程式を行列表現を使用して解きます。</p>

      <CenteredEquation
        equation="\begin{cases}
          x + 2y = 4 \\\\
          -2x + 5y = 9
        \end{cases}"
      />
      <p>この連立方程式を行列で表現すると、次のようになります。</p>
      <CenteredEquation
        equation="\begin{pmatrix}
        1 & 2 \\
        -2 & 5
        \end{pmatrix}
        \begin{pmatrix}
        x \\
        y
        \end{pmatrix}
        =
        \begin{pmatrix}
        4 \\
        9
        \end{pmatrix}"
      />
      <p>この連立方程式の解は、次のように求めることができます。</p>
      <CenteredEquation
        equation="\begin{pmatrix}
        x \\
        y
        \end{pmatrix}
        =
        \begin{pmatrix}
        1 & 2 \\
        -2 & 5
        \end{pmatrix}^{-1}
        \begin{pmatrix}
        4 \\
        9
        \end{pmatrix}
        =
        \begin{pmatrix}
        5 & -2 \\
        -2 & 1
        \end{pmatrix}
        \begin{pmatrix}
        4 \\
        9
        \end{pmatrix}
        =
        \begin{pmatrix}
        2 \\
        1
        \end{pmatrix}"
      />

      <p>
        このように、行列の逆行列を使って連立方程式を解くことができます。
        <br />
        また、連立方程式を行列で表現することで、効率的に解法を行うことができます。
      </p>

      <h2 className="caption">三元方程式の解法</h2>
      <p>以下の三元方程式を行列表現を使用して解きます。</p>
      <CenteredEquation
        equation="\begin{cases}
          2x + 3y + z = 7 \\\\
          x - y + z = 2 \\\\
          3x + 2y - z = 5
        \end{cases}"
      />
      <p>この連立方程式を行列で表現すると、次のようになります。</p>
      <CenteredEquation
        equation="\begin{pmatrix}
        2 & 3 & 1 \\
        1 & -1 & 1 \\
        3 & 2 & -1
        \end{pmatrix}
        \begin{pmatrix}
        x \\
        y \\
        z
        \end{pmatrix}
        =
        \begin{pmatrix}
        7 \\
        2 \\
        5
        \end{pmatrix}"
      />
      <p>この連立方程式の解は、次のように求めることができます。</p>
      <CenteredEquation
        equation="\begin{pmatrix}
        x \\
        y \\
        z
        \end{pmatrix}
        =
        \begin{pmatrix}
        2 & 3 & 1 \\
        1 & -1 & 1 \\
        3 & 2 & -1
        \end{pmatrix}^{-1}
        \begin{pmatrix}
        7 \\
        2 \\
        5
        \end{pmatrix}
        =
        \begin{pmatrix}
        -1 \\
        3 \\
        2
        \end{pmatrix}"
      />
    </>
  );
}
