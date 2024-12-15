import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";

export default function pageContent() {
  return (
    <>
      <h2 className="caption">余因子行列とは</h2>
      <p>
        ある <InlineMath math="n \times n" /> の正方行列
        <InlineMath math="A" /> に対して、余因子行列
        <InlineMath math="C" />
        &nbsp; は次のように定義されます。
      </p>
      <p>
        <InlineMath math="C_{ij}" /> は行列 <InlineMath math="A" /> の
        <InlineMath math="(i, j)" />
        成分に対応する余因子（cofactor）で構成されます。 余因子&nbsp;
        <InlineMath math="C_{ij}" /> は次式で計算されます。
      </p>
      <CenteredEquation equation="C_{ij} = (-1)^{i+j} \cdot M_{ij}" />
      <p>ここで</p>
      <ul>
        <li>
          <InlineMath math="(-1)^{i+j}" />
          は符号を決める因子で、チェッカーボードのように交互に
          <InlineMath math="+1" /> と <InlineMath math="-1" /> になります。
        </li>
        <li>
          <InlineMath math="M_{ij}" /> は <InlineMath math="A" /> から&nbsp;
          <InlineMath math="i" />
          &nbsp;行と&nbsp;
          <InlineMath math="j" />
          &nbsp;列を取り除いた小行列の行列式（=小行列式）です。
        </li>
      </ul>
      <p>
        これにより、余因子行列 <InlineMath math="C" /> は各余因子
        <InlineMath math="C_{ij}" /> を要素とする行列として表されます。
      </p>

      <h3>例：具体的な余因子行列の計算</h3>
      <p>
        行列 <InlineMath math="A" /> を次のように定義します。
      </p>
      <CenteredEquation
        equation="
        A = \begin{pmatrix}
        2 & -1 & 0 \\\\
        1 & 3 & -2 \\\\
        1 & -1 & 1 \\
        \end{pmatrix}
        "
      />
      <p>
        まず、各要素に対応する小行列式 <InlineMath math="M_{ij}" />
        を計算し、それに符号 <InlineMath math="(-1)^{i+j}" /> を乗じて余因子
        <InlineMath math="C_{ij}" /> を求めます。
      </p>
      <p>
        例えば、
        <InlineMath math="C_{11}" /> は次のように計算されます。
      </p>
      <CenteredEquation
        equation="
      C_{11} = (-1)^{1+1} \times \begin{vmatrix}
      3 & -2 \\\\
      -1 & 1 \\
      \end{vmatrix} = (1) \times (3 \times 1 - (-2) \times (-1)) = 1
      "
      />
      <p>
        同様に他の余因子も計算し、余因子行列 <InlineMath math="C" /> を得ます。
      </p>
      <CenteredEquation
        equation="
      C = \begin{pmatrix}
      1 & 2 & 1 \\\\
      -1 & 2 & 1 \\\\
      -5 & 2 & 7 \\
      \end{pmatrix}
      "
      />

      <h2 className="caption">余因子展開とは</h2>
      <p>
        余因子展開とは、行列式を特定の行または列に沿って、対応する余因子を用いて計算する方法です。
      </p>
      <p>
        行列式 <InlineMath math="|A|" /> は次のように表されます。
      </p>
      <CenteredEquation equation="|A| = \sum_{j=1}^{n} a_{ij} C_{ij}" />
      <p>ここで、</p>
      <ul>
        <li>
          <InlineMath math="a_{ij}" /> は行列 <InlineMath math="A" /> の
          <InlineMath math="(i, j)" /> 成分。
        </li>
        <li>
          <InlineMath math="C_{ij}" /> はその成分に対応する余因子。
        </li>
      </ul>
      <p>
        この式は任意の行 <InlineMath math="i" /> または列
        <InlineMath math="j" /> について成り立ちます。
      </p>
      <p>
        例えば、行列 <InlineMath math="A" />
        の第一行に沿って行列式を計算する場合：
      </p>
      <CenteredEquation equation="|A| = a_{11}C_{11} + a_{12}C_{12} + a_{13}C_{13}" />
      <p>各項を具体的な数値で計算して行列式を求めます。</p>

      <h3>例：余因子展開の計算</h3>
      <p>
        行列 <InlineMath math="A" /> を次のように定義します。
      </p>
      <CenteredEquation
        equation="
      A = \begin{pmatrix}
      2 & -1 & 0 \\\\
      1 & 3 & -2 \\\\
      1 & -1 & 1 \\
      \end{pmatrix}
      "
      />
      <p>
        この行列 <InlineMath math="A" /> の行列式を第一行に沿って計算します。
      </p>
      <p>各項を計算すると：</p>
      <CenteredEquation
        equation="
          |A| = 2 \times 1 + (-1) \times 2 + 0 \times 1 = 2 - 2 + 0 = 0
        "
      />
      <p>
        したがって、行列 <InlineMath math="A" /> の行列式は
        <InlineMath math="0" /> となります。
      </p>

      <h2 className="caption">逆行列への応用</h2>
      <h3>逆行列の計算方法</h3>
      <p>
        逆行列は、余因子行列 <InlineMath math="C" /> の転置行列
        <InlineMath math="C^T" /> と行列式 <InlineMath math="|A|" />
        を用いて次の式で表されます。
      </p>
      <CenteredEquation equation="A^{-1} = \frac{1}{|A|} \cdot C^T" />
      <p>
        ただし、
        <InlineMath math="|A| \neq 0" /> の場合に限り、逆行列が存在します。
      </p>
      <h3>例：逆行列の計算</h3>
      <p>
        行列 <InlineMath math="A" /> を次のように定義します。
      </p>
      <CenteredEquation
        equation="
        A = \begin{pmatrix}
        2 & -1 & 0 \\\\
        1 & 3 & -2 \\\\
        1 & -1 & 1 \\
        \end{pmatrix}
        "
      />
      <p>まず、行列式を計算します。</p>
      <CenteredEquation
        equation="
        \begin{aligned}
        |A| &= 2(3 \times 1 - (-2) \times (-1)) - (-1)(1 \times 1 - (-2) \times 1) + 0(1 \times (-1) - 3 \times 1) \\
        &= 2(3 - 2) + (-1)(1 + 2) + 0(-1 - 3) \\
        &= 2 \times 1 + (-1) \times 3 + 0 \\
        &= 2 - 3 + 0 \\
        &= -1
        \end{aligned}
        "
      />
      <p>
        行列式が0でないため逆行列が存在することがわかりました。
        <br />
        次に、余因子行列を求め、転置します。
      </p>
      <CenteredEquation
        equation="
        C^T = \begin{pmatrix}
        C_{11} & C_{21} & C_{31} \\\\
        C_{12} & C_{22} & C_{32} \\\\
        C_{13} & C_{23} & C_{33} \\
        \end{pmatrix}
        "
      />
      <p>最後に、逆行列を計算します。</p>
      <CenteredEquation
        equation="
        A^{-1} = \frac{1}{5} \cdot \begin{pmatrix}
        C_{11} & C_{21} & C_{31} \\\\
        C_{12} & C_{22} & C_{32} \\\\
        C_{13} & C_{23} & C_{33} \\
        \end{pmatrix} 
        "
      />
      <p>
        したがって、行列 <InlineMath math="A" /> の逆行列は次のようになります。
      </p>
      <CenteredEquation
        equation="
        A^{-1} = \frac{1}{5} \cdot \begin{pmatrix}
        C_{11} & C_{21} & C_{31} \\\\
        C_{12} & C_{22} & C_{32} \\\\
        C_{13} & C_{23} & C_{33} \\
        \end{pmatrix}
        "
      />
    </>
  );
}
