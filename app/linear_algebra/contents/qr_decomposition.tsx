import { metadata } from "@/app/linear_algebra/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import CustomLink from "@/app/components/CustomLink";

export default function pageContent() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <>
      <h2 className="caption">QR分解とは</h2>
      <p>
        QR分解とは、行列を直交行列と上三角行列の積に分解する手法です。
        <br />
        式で表すと以下のようになります。
      </p>
      <CenteredEquation equation="A = QR" />
      <p>
        ここで、
        <InlineMath math="A" />
        は分解したい行列、
        <InlineMath math="Q" />
        は直交行列、
        <InlineMath math="R" />
        は上三角行列です。
      </p>

      <h2 className="caption">QR分解の手法</h2>
      <p>
        QR分解の手法には、グラム・シュミットの直交化を使用する方法があります。
        <br />
        <br />
        グラム・シュミットの直交化は、線型独立なベクトルを作るための手法です。
        <br />
        詳しい方法については以下を参照してください。
      </p>

      <CustomLink
        href="/linear_algebra/gram_schmidt"
        imageUrl={`${basePath}/linear_algebra/gram_schmidt/thumb.png`}
        altText="グラムシュミットの直交化のページのサムネ"
        siteName={metadata.gram_schmidt.title}
        description={metadata.gram_schmidt.description}
      />

      <p>
        この手法を使って得られた線型独立なベクトルを
        <InlineMath math="\bm{q}_1, \bm{q}_2, \cdots, \bm{q}_n" />
        とします。
        <br />
        このベクトルを並べた行列を直交行列
        <InlineMath math="Q" />
        とします。
        <br />
        式で表すと以下のようになります。
      </p>
      <CenteredEquation equation="Q = [\bm{q}_1, \bm{q}_2, \cdots, \bm{q}_n]" />
      <p>
        また、これらのベクトルを使って上三角行列
        <InlineMath math="R" />
        を求めます。
        <br />
        そのときの式は以下の通りです。
      </p>
      <CenteredEquation equation="R = \begin{bmatrix} \bm{a}_{1}^T \bm{q}_1 & \bm{a}_{2}^T \bm{q}_1 & \cdots & \bm{a}_{n}^T \bm{q}_1 \\ 0 & \bm{a}_{2}^T \bm{q}_2 & \cdots & \bm{a}_{n}^T \bm{q}_2 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & \bm{a}_{n}^T \bm{q}_n \end{bmatrix}" />
      <p>
        ここで、
        <InlineMath math="\bm{a}_{i}^T \bm{q}_j" />
        はベクトル
        <InlineMath math="\bm{a}_i" />
        と
        <InlineMath math="\bm{q}_j" />
        の内積のことを表しています。
      </p>

      <h2 className="caption">非正方行列のQR分解</h2>
      <p>
        もし行列が正方行列でない場合、行列
        <InlineMath math="A" />
        を次のように分割します。
      </p>
      <CenteredEquation equation="A = \begin{bmatrix} Q_1 & Q_2 \end{bmatrix} \begin{bmatrix} R_1 \\ 0 \end{bmatrix}" />
      <p>これにより、非正方行列でもQR分解が可能となります。</p>
      <p>
        QR分解は数値計算において、行列の分解や最小二乗解の計算に広く利用される手法です。
      </p>

      <h2 className="caption">最小二乗問題の定式化</h2>

      <p>
        最小二乗問題 <InlineMath math="A \mathbf{x} \approx \mathbf{b}" /> は、
        与えられた方程式の解を、次の基準で求める手法です。
        ノルムの平方を最小化する形で表現され、次の式で記述されます。
      </p>

      <CenteredEquation equation="\|\mathbf{b} - A\mathbf{x}\|^2 = \|\mathbf{b} - QR\mathbf{x}\|^2" />

      <h3 className="caption">解の導出</h3>

      <p>
        ベクトル <InlineMath math="\mathbf{b}" /> の射影を考えると、
        <InlineMath math="A\mathbf{x}" /> の射影は
        <InlineMath math="\mathbf{C}(A)" /> （行列 <InlineMath math="A" />{" "}
        の列空間）に含まれます。
        この射影によって残差ノルムを次のように表します：
      </p>

      <CenteredEquation equation="\|\mathbf{b} - A\mathbf{x}\|^2 = \|\mathbf{b} - QR\mathbf{x}\|^2" />

      <p>
        さらに、
        <InlineMath math="Q" />{" "}
        が直交行列であることを利用して、このノルムは次のように変形できます。
      </p>

      <CenteredEquation equation="\|\mathbf{b} - QR\mathbf{x}\|^2 = \|Q^T\mathbf{b} - R\mathbf{x}\|^2" />

      <p>この式の最小化を考えると、以下のように分解できます。</p>

      <CenteredEquation equation="\|Q^T\mathbf{b} - R\mathbf{x}\|^2 = \|R_1 \mathbf{\hat{x}} - Q_1^T \mathbf{b}\|^2" />

      <p>
        このとき、残差がゼロになるように <InlineMath math="\mathbf{\hat{x}}" />{" "}
        を選ぶと、以下が成り立ちます：
      </p>

      <CenteredEquation equation="\mathbf{\hat{x}} = R^{-1} Q^T \mathbf{b}" />

      <h3 className="caption">正規方程式による導出</h3>

      <p>QR分解を使った正規方程式は次のように導出されます。</p>

      <CenteredEquation equation="\mathbf{\hat{x}} = (A^T A)^{-1} A^T \mathbf{b}" />

      <p>
        ここで、QR分解 <InlineMath math="A = Q R" />{" "}
        を代入して展開すると、次のようになります：
      </p>

      <CenteredEquation
        equation="
        \begin{align*}
        \mathbf{\hat{x}} &= (R^T Q^T Q R)^{-1} R^T Q^T \mathbf{b} \\
                &= R^{-1} (R^T)^{-1} R^T Q^T \mathbf{b} \\
                &= R^{-1} Q^T \mathbf{b}
        \end{align*}
        "
      />

      <p>
        このようにして、QR分解を用いることで最小二乗解{" "}
        <InlineMath math="\mathbf{\hat{x}}" /> を効率的に求めることができます。
      </p>
    </>
  );
}
