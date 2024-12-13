import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";

export default function pageContent() {
  return (
    <>
      <h2 className="caption">逆行列の定義</h2>
    
      <p>
        逆行列とは、ある行列&nbsp;
        <InlineMath math="A" />
        &nbsp;に対して、次の条件を満たす行列&nbsp;
        <InlineMath math="A^{-1}" />
        &nbsp;のことを指します。
      </p>
    
      <CenteredEquation equation="AA^{-1} = A^{-1}A = I" />
    
      <p>
        ここで、
        <InlineMath math="I" />
        &nbsp;は単位行列を表します。逆行列は、元の行列と逆行列を掛け合わせると単位行列になるという性質を持っています。
      </p>
    
      <h2 className="caption">逆行列の求め方</h2>
    
      <p>
        逆行列を求める方法には、いくつかの手法があります。ここでは、逆行列を求める基本的な手法について説明します。
      </p>
    
      <h3>1. 掃き出し法（ガウスの消去法）</h3>
    
      <p>
        掃き出し法は、連立方程式を解く際に使用される手法です。逆行列を求める際にも、掃き出し法を用いることができます。
        <br />
        この手法を使うと、行列&nbsp;
        <InlineMath math="A" />
        &nbsp;と単位行列&nbsp;
        <InlineMath math="I" />
        &nbsp;を組み合わせて、行列&nbsp;
        <InlineMath math="[A|I]" />
        &nbsp;を作ります。
      </p>

      <p>
        この&nbsp;
        <InlineMath math="[A|I]" />
        &nbsp;を掃き出し法を用いて、左側の行列&nbsp;
        <InlineMath math="A" />
        &nbsp;が単位行列&nbsp;
        <InlineMath math="I" />
        &nbsp;になるように変形します。
      </p>

      <h3>具体例</h3>

      <p>
        以下の行列&nbsp;
        <InlineMath math="A" />
        &nbsp;の逆行列を求める例を示します。
      </p>

      <CenteredEquation equation="A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}" />

      <p>
        この行列&nbsp;
        <InlineMath math="A" />
        &nbsp;の逆行列を求めるために、行列&nbsp;
        <InlineMath math="[A|I]" />
        &nbsp;を作成します。
      </p>

      <CenteredEquation equation="[A|I] = \begin{pmatrix} 1 & 2 & | & 1 & 0 \\ 3 & 4 & | & 0 & 1 \end{pmatrix}" />

      <p>
        この行列&nbsp;
        <InlineMath math="[A|I]" />
        &nbsp;を掃き出し法を用いて、左側の行列&nbsp;
        <InlineMath math="A" />
        &nbsp;が単位行列&nbsp;
        <InlineMath math="I" />
        &nbsp;になるように変形します。
      </p>

      <CenteredEquation equation="[I|A^{-1}] = \begin{pmatrix} 1 & 0 & | & \frac{1}{-2} & \frac{1}{2} \\ 0 & 1 & | & \frac{3}{2} & \frac{-1}{2} \end{pmatrix}" />

      <p>
        このように、行列&nbsp;
        <InlineMath math="A" />
        &nbsp;の逆行列&nbsp;
        <InlineMath math="A^{-1}" />
        &nbsp;を求めることができます。
      </p>

      <h3>2. 行列式を用いる方法</h3>

      <p>
        逆行列を求める際に、行列式を用いる方法もあります。行列&nbsp;
        <InlineMath math="A" />
        &nbsp;の逆行列&nbsp;
        <InlineMath math="A^{-1}" />
        &nbsp;は、次の式で求めることができます。
      </p>

      <CenteredEquation equation="A^{-1} = \frac{1}{|A|} \cdot \text{adj}(A)" />

      <p>
        ここで、
        <InlineMath math="|A|" />
        &nbsp;は行列&nbsp;
        <InlineMath math="A" />
        &nbsp;の行列式を表し、
        <InlineMath math="\text{adj}(A)" />
        &nbsp;は行列&nbsp;
        <InlineMath math="A" />
        &nbsp;の余因子行列（adjugate matrix）を表します。
      </p>

      <h2 className="caption">逆行列が存在しない場合</h2>

      <p>
        逆行列が存在しない場合もあります。逆行列が存在しない条件を理解しておきましょう。
      </p>

      <h3>1. 行列式が0の場合</h3>

      <p>
        行列&nbsp;
        <InlineMath math="A" />
        &nbsp;の行列式が0のとき、逆行列は存在しません。
      </p>

      <h3>2. 行列が正則でない場合</h3>

      <p>
        行列&nbsp;
        <InlineMath math="A" />
        &nbsp;が正則でない（singular）場合、逆行列は存在しません。
        <br />
        正則とは、行列&nbsp;
        <InlineMath math="A" />
        &nbsp;の行列式が0でないことを意味します。
      </p>
    </>
  );
}
