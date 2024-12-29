import { metadata } from "@/app/linear_algebra/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function pageContent() {
  const pagename: string = "pseudoinverse"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">類似行列 (Similar Matrix)</h2>
      <p>
        行列 <InlineMath math="\mathbf{A}" /> と{" "}
        <InlineMath math="\mathbf{B}" />
        が同じ次元の正方行列で、ある可逆行列 <InlineMath math="\mathbf{P}" />
        が存在して
      </p>
      <CenteredEquation equation="\mathbf{B} = \mathbf{P} \mathbf{A} \mathbf{P}^{-1}" />
      <p>
        を満たす場合、
        <InlineMath math="\mathbf{A}" /> と
        <InlineMath math="\mathbf{B}" /> は類似行列 (similar matrices)
        であると言います。
      </p>

      <h2 className="caption">類似行列の性質</h2>
      <ol>
        <li>
          <b>同一行列は自分自身と類似</b>
          <br />
          <CenteredEquation equation="\mathbf{A} = \mathbf{P}^{-1} \mathbf{A} \mathbf{P}" />
          の場合、
          <InlineMath math="\mathbf{P} = \mathbf{I}" />。
        </li>
        <li>
          <b>類似関係の推移性</b>
          <br />
          <p>
            <InlineMath math="\mathbf{A}" /> が <InlineMath math="\mathbf{B}" />{" "}
            と類似し、
            <InlineMath math="\mathbf{B}" /> が <InlineMath math="\mathbf{C}" />
            と類似するならば、
            <InlineMath math="\mathbf{A}" /> は
            <InlineMath math="\mathbf{C}" /> と類似します。
          </p>
          <CenteredEquation equation="\mathbf{B} = \mathbf{P}_1 \mathbf{A} \mathbf{P}_1^{-1}, \quad \mathbf{C} = \mathbf{P}_2 \mathbf{B} \mathbf{P}_2^{-1} \implies \mathbf{C} = (\mathbf{P}_2 \mathbf{P}_1) \mathbf{A} (\mathbf{P}_1^{-1} \mathbf{P}_2^{-1})" />
        </li>
        <li>
          <b>類似行列のランク</b>
          <br />
          類似行列はランクを保存します。
          <CenteredEquation equation="\text{rank}(\mathbf{A}) = \text{rank}(\mathbf{P} \mathbf{A} \mathbf{P}^{-1}) = \text{rank}(\mathbf{B})" />
        </li>
        <li>
          <b>トレース (trace) の保存</b>
          <br />
          類似行列のトレースは同じです。
          <CenteredEquation equation="\text{Tr}(\mathbf{P}^{-1} \mathbf{A} \mathbf{P}) = \text{Tr}(\mathbf{A})" />
        </li>
        <li>
          <b>行列式 (determinant) の保存</b>
          <br />
          類似行列の行列式も等しいです。
          <CenteredEquation equation="\text{det}(\mathbf{P}^{-1} \mathbf{A} \mathbf{P}) = \text{det}(\mathbf{A})" />
        </li>
        <li>
          <b>固有値の等価性</b>
          <br />
          類似行列は同じ固有値を持ちますが、固有ベクトルは異なる場合があります。
          <CenteredEquation equation="\mathbf{A} \mathbf{x} = \lambda \mathbf{x} \implies \mathbf{P}^{-1} \mathbf{A} \mathbf{P} (\mathbf{P}^{-1} \mathbf{x}) = \lambda (\mathbf{P}^{-1} \mathbf{x})" />
          よって、固有ベクトルは
          <InlineMath math="\mathbf{P}^{-1} \mathbf{x}" /> に変換されます。
        </li>
      </ol>

      <h2 className="caption">類似行列の累乗</h2>
      <p>
        行列 <InlineMath math="\mathbf{A}" /> と{" "}
        <InlineMath math="\mathbf{B}" />
        が類似行列であるとき、累乗行列 <InlineMath math="\mathbf{A}^n" /> と
        <InlineMath math="\mathbf{B}^n" /> も類似です。
      </p>
      <CenteredEquation equation="\mathbf{B} = \mathbf{P}^{-1} \mathbf{A} \mathbf{P} \implies \mathbf{B}^n = \mathbf{P}^{-1} \mathbf{A}^n \mathbf{P}" />

      <h2 className="caption">例題</h2>
      <h3>例題 1</h3>
      <p>
        次の行列 <InlineMath math="\mathbf{A}" /> と{" "}
        <InlineMath math="\mathbf{B}" />
        が類似行列であることを確認してください。
      </p>
      <CenteredEquation equation="\mathbf{A} = \begin{bmatrix} 2 & 1 \\ 0 & 3 \end{bmatrix}, \quad \mathbf{P} = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}" />
      <p>
        類似行列の定義式
        <InlineMath math="\mathbf{B} = \mathbf{P} \mathbf{A} \mathbf{P}^{-1}" />{" "}
        を用いて 計算すると：
      </p>
      <CenteredEquation equation="\mathbf{P}^{-1} = \begin{bmatrix} 1 & -1 \\ 0 & 1 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix} \begin{bmatrix} 2 & 1 \\ 0 & 3 \end{bmatrix} \begin{bmatrix} 1 & -1 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} 2 & 3 \\ 0 & 3 \end{bmatrix}" />
      <p>
        よって、
        <InlineMath math="\mathbf{A}" /> と <InlineMath math="\mathbf{B}" />{" "}
        は類似行列です。
      </p>

      <h3>例題 2</h3>
      <p>
        次の行列の固有値が同じであることを確認し、類似性を検証してください。
      </p>
      <CenteredEquation equation="\mathbf{A} = \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix}, \quad \mathbf{P} = \begin{bmatrix} 1 & 0 \\ 1 & 1 \end{bmatrix}" />
      <p>
        類似行列の定義を確認するために
        <InlineMath math="\mathbf{B} = \mathbf{P} \mathbf{A} \mathbf{P}^{-1}" />{" "}
        を計算します。
      </p>
      <CenteredEquation equation="\mathbf{P}^{-1} = \begin{bmatrix} 1 & 0 \\ -1 & 1 \end{bmatrix}, \quad \mathbf{B} = \begin{bmatrix} 1 & 0 \\ 1 & 1 \end{bmatrix} \begin{bmatrix} 4 & 1 \\ 2 & 3 \end{bmatrix} \begin{bmatrix} 1 & 0 \\ -1 & 1 \end{bmatrix} = \begin{bmatrix} 4 & 1 \\ 0 & 5 \end{bmatrix}" />
      <p>
        行列 <InlineMath math="\mathbf{A}" /> と{" "}
        <InlineMath math="\mathbf{B}" /> の固有値を求めると、どちらも
        <InlineMath math="\lambda = 5, \lambda = 3" /> であることがわかります。
        これにより、類似性が確認されます。
      </p>
    </>
  );
}
