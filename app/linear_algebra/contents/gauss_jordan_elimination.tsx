import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";

export default function PageContent() {
  return (
    <>
      <h2 className="caption">ガウス・ジョルダン消去法</h2>

      <p>
        ガウス・ジョルダン消去法は、連立方程式を解いたり、行列の逆行列を求めたりするための手法です。基本的な行操作を使って、行列を簡単な形に変形していきます。
      </p>

      <h2 className="caption">手順</h2>

      <ol>
        <li>行全体を定数倍する。</li>
        <li>ある行に他の行の定数倍を足す、または引く。</li>
        <li>行の順番を入れ替える。</li>
      </ol>

      <h2 className="caption">例: 2x2行列の場合</h2>

      <p>次のような連立方程式を考えます</p>

      <CenteredEquation equation="\begin{bmatrix} 1 & 2 \\ 2 & 5 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 4 \\ 9 \end{bmatrix}" />

      <p>この式を拡張行列の形にすると次のようになります</p>

      <CenteredEquation equation="\begin{bmatrix} 1 & 2 & \vert & 4 \\ 2 & 5 & \vert & 9 \end{bmatrix}" />

      <p>ガウス・ジョルダン消去法を使うと、次のように解が求められます</p>

      <CenteredEquation equation="\begin{bmatrix} 1 & 2 & 4 \\ 2 & 5 & 9 \end{bmatrix} \rightarrow \begin{bmatrix} 1 & 2 & 4 \\ 0 & 1 & 1 \end{bmatrix} \rightarrow \begin{bmatrix} 1 & 0 & 2 \\ 0 & 1 & 1 \end{bmatrix}" />

      <p>最終的な解は次の通りです</p>

      <CenteredEquation equation="x = 2, \quad y = 1" />

      <h2 className="caption">例題: 3つの変数を持つ連立方程式</h2>

      <p>次の連立方程式を行列を用いて解きます</p>

      <CenteredEquation
        equation="\begin{cases} 2x + y - z = 8 \\
        -3x - y + 2z = -11 \\
        -2x + y + 2z = -3 \end{cases}"
      />

      <p>この方程式を行列で表すと次のようになります</p>

      <CenteredEquation
        equation="\begin{bmatrix} 2 & 1 & -1 & 8 \\
        -3 & -1 & 2 & -11 \\
        -2 & 1 & 2 & -3 \end{bmatrix}"
      />

      <p>行操作を繰り返し、次の形に変形します</p>

      <CenteredEquation
        equation="\begin{bmatrix} 1 & 0 & 0 & 2 \\
        0 & 1 & 0 & 3 \\
        0 & 0 & 1 & -1 \end{bmatrix}"
      />

      <p>この結果から、解は以下の通りです</p>

      <CenteredEquation equation="x = 2, \quad y = 3, \quad z = -1" />

      <h2 className="caption">逆行列の計算</h2>

      <p>
        <InlineMath math="2 \times 2" />
        行列の逆行列は次の公式で計算できます
      </p>

      <CenteredEquation
        equation="\begin{bmatrix} a & b \\
        c & d \end{bmatrix}^{-1} = \frac{1}{ad - bc} \begin{bmatrix} d & -b \\
        -c & a \end{bmatrix}"
      />

      <p>
        行列を拡張し、ガウス・ジョルダン法を使って逆行列を計算することも可能です
      </p>

      <CenteredEquation
        equation="\begin{bmatrix} a & b & 1 & 0 \\
        c & d & 0 & 1 \end{bmatrix} \rightarrow \begin{bmatrix} 1 & 0 & \frac{d}{ad - bc} & \frac{-b}{ad - bc} \\
        0 & 1 & \frac{-c}{ad - bc} & \frac{a}{ad - bc} \end{bmatrix}"
      />

      <p>この手法を使えば、より複雑な行列の逆行列を求めることができます。</p>
    </>
  );
}
