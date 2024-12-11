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

      <p>
        標準座標系では、基底ベクトルは&nbsp;
        <InlineMath math="e_x=(1,0)" />
        &nbsp;と&nbsp;
        <InlineMath math="e_y=(0,1)" />
        &nbsp;です。これらがデフォルトの基底ベクトル（標準基底）です。
        <br />
        例えば点(2,3)は標準基底で表すと、&nbsp;
        <InlineMath math="2e_x+3e_y" />
        &nbsp;となります。
      </p>
    </>
  );
}
