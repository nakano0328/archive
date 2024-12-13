import { metadata } from "@/app/linear_algebra/metadata";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function pageContent() {
  const pagename: string = "basis"; //ここを変更

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/linear_algebra/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/linear_algebra/${pagename}`;

  return (
    <>
      <h2 className="caption">基底ベクトルの定義</h2>
      <p>
        ベクトル空間&nbsp;
        <InlineMath math="\bm{V}" />
        &nbsp;において、次の2つの条件を満たすベクトルの集合&nbsp;
        <InlineMath math="\bm{B}=(v_1,v_2,...,v_n)" />
        &nbsp;を
        <b>基底</b>と呼びます。
      </p>
      <ul>
        <li>
          線形独立
          <p>
            それぞれのベクトルが線形独立であることです。つまり、どのベクトルも他のベクトルの線形結合で表すことができないことです。詳しくは以下を見てください。
          </p>
          <CustomLink
            href="/linear_algebra/lin_indep"
            imageUrl={`${basePath}/linear_algebra/lin_indep/thumb.png`}
            altText="線形独立と線形従属のサムネ"
            siteName={metadata.lin_indep.title}
            description={metadata.lin_indep.description}
          />
          <br />
        </li>
        <li>
          生成する空間
          <p>
            任意のベクトル&nbsp;
            <InlineMath math="\bm{v}\in\bm{V}" />
            &nbsp;は、基底ベクトルの線形結合で表すことができることです。
          </p>
        </li>
      </ul>

      <h2 className="caption">新しい座標系と基底の導入</h2>
      <ol>
        <li>
          <b>基底ベクトルの定義</b>
          <p>
            標準座標系では、基底ベクトルは&nbsp;
            <InlineMath math="\mathbf{e}_x = (1, 0)" />
            &nbsp;と&nbsp;
            <InlineMath math="\mathbf{e}_y = (0, 1)" />
            &nbsp;です。これらがデフォルトの基底ベクトル（標準基底）です。
            点&nbsp;
            <InlineMath math="(2, 3)" />
            &nbsp;は標準基底で表すと、&nbsp;
            <InlineMath math="2\mathbf{e}_x + 3\mathbf{e}_y" />
            &nbsp;となります。
          </p>
        </li>
        <li>
          <b>新しい基底の導入</b>
          <p>
            新しい基底&nbsp;
            <InlineMath math="B" />
            &nbsp;を&nbsp;
            <InlineMath math="\begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}" />
            &nbsp;と定義しています。これにより、新しい座標系が定義されます。
            <br />
            新しい基底を使うと、同じベクトルを異なる座標として表すことができます。
          </p>
        </li>
        <li>
          <b>新しい基底を用いた座標表現</b>
          <p>
            例として、元の座標&nbsp;
            <InlineMath math="(2, 2)" />
            &nbsp;を新しい基底&nbsp;
            <InlineMath math="B" />
            &nbsp;の座標系で表現する過程が示されています。
            <br />
            新しい基底での表現は次のように行われます。
            <br />
            <InlineMath math="\begin{bmatrix} 2 \\ 2 \end{bmatrix} = k_1 \begin{bmatrix} 1 \\ 1 \end{bmatrix} + k_2 \begin{bmatrix} 1 \\ -1 \end{bmatrix}" />
            <br />
            これを行列形式で書くと、
            <br />
            <InlineMath math="\begin{bmatrix} 2 \\ 2 \end{bmatrix} = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} k_1 \\ k_2 \end{bmatrix}" />
            <br />
            これを解くことで、新しい基底での座標&nbsp;
            <InlineMath math="\begin{bmatrix} k_1 \\ k_2 \end{bmatrix}" />
            &nbsp;が得られます。
          </p>
        </li>
      </ol>

      <h2 className="caption">新しい基底での座標変換</h2>
      <ol>
        <li>
          <b>基準座標系から新しい基底への変換</b>
          <p>
            標準座標系のベクトル&nbsp;
            <InlineMath math="X" />
            &nbsp;は次のように表されます。
            <br />
            <InlineMath math="X = \begin{bmatrix} x_1 \\ x_2 \end{bmatrix}_{\mathbf{e}}" />
            <br />
            ここで、
            <InlineMath math="\mathbf{e}" /> は標準基底を表します。
          </p>
          <p>
            新しい基底&nbsp;
            <InlineMath math="C" />
            &nbsp;は次のように定義されます。
            <br />
            <InlineMath math="C = \begin{bmatrix} \mathbf{c}_1 & \mathbf{c}_2 \end{bmatrix}" />
            <br />
            ここで、
            <InlineMath math="\mathbf{c}_1" /> と{" "}
            <InlineMath math="\mathbf{c}_2" /> は新しい基底ベクトルです。
          </p>
          <p>
            ベクトル&nbsp;
            <InlineMath math="X" />
            &nbsp;を基底&nbsp;
            <InlineMath math="C" />
            &nbsp;で表現すると、その座標&nbsp;
            <InlineMath math="Y" />
            &nbsp;は次のようになります。
            <br />
            <InlineMath math="Y = \begin{bmatrix} y_1 \\ y_2 \end{bmatrix}_C" />
            <br />
            これにより、標準基底での表現が新しい基底&nbsp;
            <InlineMath math="C" />
            &nbsp;に対応する座標系に変換されます。
            <br />
          </p>
        </li>
        <hr />
        <p>
          例として、標準基底から新しい基底への変換を示したグラフが以下になります。このグラフでは、標準基底のベクトル&nbsp;
          <InlineMath math="\mathbf{e}_x = \begin{bmatrix} 1 \\ 0 \end{bmatrix}" />
          &nbsp;と&nbsp;
          <InlineMath math="\mathbf{e}_y = \begin{bmatrix} 0 \\ 1 \end{bmatrix}" />
          &nbsp;が新しい基底&nbsp;
          <InlineMath math="C" />
          &nbsp;のベクトル&nbsp;
          <InlineMath math="\mathbf{c}_1 = \begin{bmatrix} 1 \\ 1 \end{bmatrix}" />
          &nbsp;と&nbsp;
          <InlineMath math="\mathbf{c}_2 = \begin{bmatrix} 1 \\ -1 \end{bmatrix}" />
          &nbsp;に変換されています。
        </p>
        <ImageModal
          imagePath={`${imagePath}/basis_new.png`}
          altText="基準座標系から新しい基底への変換を表したグラフ"
        />
        <CustomLink
          href={`${notePath}/basis_new.ipynb`}
          imageUrl={`${imagePath}/basis_new.png`}
          altText="基準座標系から新しい基底への変換を表したグラフ"
          siteName="基底の変換"
          description="基準座標系から新しい基底への変換を行っているコードを示しています。"
          target="_blank"
        />
        <li>
          <b>任意の基底間の変換</b>
          <p>
            基底&nbsp;
            <InlineMath math="B" />
            &nbsp;と&nbsp;
            <InlineMath math="C" />
            &nbsp;を次のように設定します。
            <br />
            <InlineMath math="B = \{\mathbf{v}_1, \mathbf{v}_2\} \  ,\ C = \{\mathbf{w}_1, \mathbf{w}_2\}" />
          </p>
          <p>
            ベクトル&nbsp;
            <InlineMath math="\mathbf{v}_2" />
            &nbsp;を基底&nbsp;
            <InlineMath math="C" />
            &nbsp;の組み合わせで表現します。ベクトル&nbsp;
            <InlineMath math="V" />
            &nbsp;を次のように変換します。
            <br />
            <InlineMath math="V = l_1 \mathbf{w}_1 + l_2 \mathbf{w}_2" />
            <br />
            この表現は、基底&nbsp;
            <InlineMath math="B" />
            &nbsp;の組み合わせから基底&nbsp;
            <InlineMath math="C" />
            &nbsp;の組み合わせに変換するプロセスを示しています。
          </p>
          <p>
            具体的な変換手順は次の通りです。
            <br />
            <InlineMath math="\begin{bmatrix} \mathbf{v}_1 & \mathbf{v}_2 \end{bmatrix} = \begin{bmatrix} a & b \\ c & d \end{bmatrix} \begin{bmatrix} \mathbf{w}_1 & \mathbf{w}_2 \end{bmatrix}" />
            <br />
            これにより、ベクトルの座標が基底&nbsp;
            <InlineMath math="C" />
            &nbsp;でどのように表されるかが明示されます。
          </p>
        </li>
      </ol>

      <h2 className="caption">まとめ</h2>
      <p>
        このページでは、標準座標系と新しい基底を用いた座標変換について説明しました。標準基底から新しい基底への変換方法や、任意の基底間の変換手順を学びました。これにより、異なる基底でのベクトルの表現方法を理解し、線形代数の応用に役立てることができます。
      </p>
      <br />
    </>
  );
}
