import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";

export default function pageContent() {
  return (
    <>
      <h2 className="caption">定義</h2>
      <p>
        行列 <InlineMath math="A" />
        に対して、
        <InlineMath math="A" />
        とそれによって定まる線形変換が同じ方向に作用するベクトルを固有ベクトル、
        そのスカラー倍数を固有値といいます。
      </p>
      <CenteredEquation equation={`A\boldsymbol{x}=\lambda\boldsymbol{x}`} />
      <p>
        となるベクトル <InlineMath math="\boldsymbol{x}" /> とスカラー
        <InlineMath math="\lambda" /> が存在します。
      </p>
    </>
  );
}
