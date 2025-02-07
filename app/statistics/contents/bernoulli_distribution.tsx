//import { metadata } from "@/app/statistics/metadata";
//import CenteredEquation from "@/app/components/CenteredEquation";
//import { InlineMath } from "react-katex";
//import ImageModal from "@/app/components/ImageModal";
//import CustomLink from "@/app/components/CustomLink";

export default function PageContent() {
  //const pagename: string = "bernoulli_distribution_extended"; //ここを変更

  //const metaData = metadata[pagename];
  //const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  //const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  //const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">ベルヌーイ分布とは</h2>
      <p>
        ベルヌーイ分布（Bernoulli
        distribution）は、確率論の基本的な離散確率分布の一つで、
        「ある試行で2つの結果のうちどちらかが起こる確率を表す分布」 です。
        <br />
        具体的には： 成功（1）または失敗（0）のいずれかの結果しか取らない
        <br />
        それぞれの確率を 𝑝 p（成功確率）と 1 − 𝑝 1−p（失敗確率）で表す 例えば：
        コイン投げ（表＝1, 裏＝0） ライトが点灯するかしないか
        検査で製品が合格するかしないか
      </p>
    </>
  );
}
