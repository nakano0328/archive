import CenteredEquation from "@/app/components/CenteredEquation";
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
          <b>基底ベクトルの定義:</b>
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
          <img src={`${imagePath}/standard_basis.png`} alt="標準基底の図" />
        </li>
        <li>
          <b>新しい基底の導入:</b>
          <p>
            新しい基底&nbsp;
            <InlineMath math="B" />
            &nbsp;を&nbsp;
            <InlineMath math="\begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}" />
            &nbsp;と定義しています。これにより、新しい座標系が定義されます。
            新しい基底を使うと、同じベクトルを異なる座標として表すことができます。
          </p>
          <img src={`${imagePath}/new_basis.png`} alt="新しい基底の図" />
        </li>
        <li>
          <b>新しい基底を用いた座標表現:</b>
          <p>
            例として、元の座標&nbsp;
            <InlineMath math="(2, 2)" />
            &nbsp;を新しい基底&nbsp;
            <InlineMath math="B" />
            &nbsp;の座標系で表現する過程が示されています。
            新しい基底での表現は次のように行われます:
            <InlineMath math="\begin{bmatrix} 2 \\ 2 \end{bmatrix} = k_1 \begin{bmatrix} 1 \\ 1 \end{bmatrix} + k_2 \begin{bmatrix} 1 \\ -1 \end{bmatrix}" />
            これを行列形式で書くと、
            <InlineMath math="\begin{bmatrix} 2 \\ 2 \end{bmatrix} = \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix} \begin{bmatrix} k_1 \\ k_2 \end{bmatrix}" />
            これを解くことで、新しい基底での座標&nbsp;
            <InlineMath math="\begin{bmatrix} k_1 \\ k_2 \end{bmatrix}" />
            &nbsp;が得られます。
          </p>
          <img src={`${imagePath}/coordinate_transformation.png`} alt="座標変換の図" />
        </li>
      </ol>

      <h2 className="caption">まとめ</h2>
      <p>
        新しい基底を導入することで、同じベクトルや点を異なる視点から表現できます。これにより、座標系を変換して問題を解決する際に便利です。
        このページの内容は、座標変換や異なる基底でのベクトルの表現方法についての理解を深める助けとなります。
      </p>
      <br />
    </>
  );
}
