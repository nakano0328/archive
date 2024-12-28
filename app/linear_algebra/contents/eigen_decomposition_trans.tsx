import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";

export default function pageContent() {
  return (
    <>
      <h2 className="caption">固有値分解と信号の変換</h2>

      <p>
        固有値分解とは、行列を「固有値」と「固有ベクトル」という特別なパーツに分解する方法です。これを使うと、信号やデータを扱いやすくすることができます。特に、対称行列の場合は計算が簡単になり、直交行列を使って行列を対角化できます。
      </p>

      <h2 className="caption">固有値分解の表現</h2>

      <p>
        行列&nbsp;
        <InlineMath math="\mathbf{A}" />
        &nbsp;を固有値分解すると、次のように書けます：
      </p>

      <CenteredEquation equation="\mathbf{A} = \lambda_1 \mathbf{q}_1 \mathbf{q}_1^T + \lambda_2 \mathbf{q}_2 \mathbf{q}_2^T + \lambda_3 \mathbf{q}_3 \mathbf{q}_3^T + \ldots" />

      <p>
        この式は、行列&nbsp;
        <InlineMath math="\mathbf{A}" />
        &nbsp;を固有値&nbsp;
        <InlineMath math="\lambda_1, \lambda_2, \ldots" />
        &nbsp;と固有ベクトル&nbsp;
        <InlineMath math="\mathbf{q}_1, \mathbf{q}_2, \ldots" />
        &nbsp;の組み合わせで表していることを意味します。
      </p>

      <p>
        ベクトル&nbsp;
        <InlineMath math="\mathbf{x}" />
        &nbsp;を&nbsp;
        <InlineMath math="\mathbf{A}" />
        &nbsp;で変換する場合、この表現を使うと次のように計算できます：
      </p>

      <CenteredEquation equation="\mathbf{A}\mathbf{x} = \lambda_1 \mathbf{q}_1 (\mathbf{q}_1^T \mathbf{x}) + \lambda_2 \mathbf{q}_2 (\mathbf{q}_2^T \mathbf{x}) + \ldots" />

      <p>
        ここで、&nbsp;
        <InlineMath math="\mathbf{q}_k^T \mathbf{x}" />
        &nbsp;はベクトル&nbsp;
        <InlineMath math="\mathbf{x}" />
        &nbsp;を固有ベクトル&nbsp;
        <InlineMath math="\mathbf{q}_k" />
        &nbsp;に射影（写す）した結果を表します。
      </p>

      <h2 className="caption">具体例</h2>

      <p>例えば、次のようなベクトルを考えてみましょう：</p>

      <CenteredEquation equation="\mathbf{x} = \begin{bmatrix} -1 \\ 2 \\ 3 \end{bmatrix} = 1 \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} + 2 \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix} + 3 \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}" />

      <p>
        このベクトル&nbsp;
        <InlineMath math="\mathbf{x}" />
        &nbsp;を行列&nbsp;
        <InlineMath math="\mathbf{A}" />
        &nbsp;で変換すると、次のようになります：
      </p>

      <CenteredEquation equation="\mathbf{A}\mathbf{x} = \mathbf{Q} \mathbf{\Lambda} \mathbf{Q}^T \mathbf{x} = \mathbf{x}" />

      <p>
        ここで、行列&nbsp;
        <InlineMath math="\mathbf{Q}" />
        &nbsp;は固有ベクトルを並べたもの、&nbsp;
        <InlineMath math="\mathbf{\Lambda}" />
        &nbsp;は固有値を対角成分にもつ行列です。
      </p>

      <h2 className="caption">信号の畳み込みと変換</h2>

      <p>
        信号処理では、連続信号&nbsp;
        <InlineMath math="x(t)" />
        &nbsp;とインパルス応答&nbsp;
        <InlineMath math="h(t)" />
        &nbsp;の畳み込みを次のように定義します：
      </p>

      <CenteredEquation equation="(x * h)(t) = \int_{-\infty}^{\infty} x(\tau) h(t - \tau) d\tau" />

      <p>
        これをフーリエ変換を使って表すと、信号の周波数成分同士の積として計算できます：
      </p>

      <CenteredEquation equation="X(\omega) H(\omega) = \int_{-\infty}^{\infty} x(t) e^{-j\omega t} dt \times \int_{-\infty}^{\infty} h(\tau) e^{-j\omega \tau} d\tau" />

      <h2 className="caption">固有値分解と逆フーリエ変換</h2>

      <p>
        固有値分解は、逆フーリエ変換の考え方に似ています。行列&nbsp;
        <InlineMath math="\mathbf{A}" />
        &nbsp;の固有値分解を使うと、次のように信号を解析できます：
      </p>

      <CenteredEquation equation="\mathbf{A} = \sum_k \lambda_k \mathbf{q}_k \mathbf{q}_k^T \implies \mathbf{A} \mathbf{x} = \sum_k \lambda_k \mathbf{q}_k (\mathbf{q}_k^T \mathbf{x})" />

      <p>
        この分解を使うことで、信号の特定の成分がどのように変換されるかを簡単に理解できます。
      </p>
    </>
  );
}
