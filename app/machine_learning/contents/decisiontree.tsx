import { metadata } from "@/app/machine_learning/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function PageContent() {
  const pagename: string = "decisiontree"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">決定木（Decision Tree）</h2>
      <p>
        決定木は、データを木構造で表現し、分類や回帰の問題を解くための機械学習モデルです。
        <br />
        シンプルで解釈しやすいことから、統計学や機械学習の初学者から実務まで幅広く利用されています。
      </p>
      <p>また、決定木は分類木と回帰木の2つを総称して決定木といいます。</p>

      <h2 className="caption">分類木(Classification Tree)</h2>
      <p>
        分類木は、目標変数（ターゲット）がカテゴリ値（クラスラベル）の場合に使用される決定木の一種で、データを木構造に基づいて分類する手法です。
        <br />
        ルートノードから始まり、データが内部ノードの条件によって分割され、最終的にリーフノードで予測クラスが決定されます。
      </p>
      <p>
        例を用いて考えましょう。
        <br />
        ある人が「犬」か「猫」かを判定するために、身長と体重の2つの特徴量を使うことを考えます。
        <br />
        この
        <CustomLink
          href="/machine_learning/contents/decisiontree"
          text="データ"
        />
        を使って、分類木を作成すると以下のようになります。
      </p>
      <ImageModal
        src={`${imagePath}/classification_tree.png`}
        alt="classification_tree"
        width={400}
        height={400}
      />
      <p>
        上記の分類木を用いて、身長が10cm以下かつ体重が1kg以下の場合は「猫」、それ以外の場合は「犬」と判定されます。
      </p>
      <p>
        分類木は、特徴量の重要度を計算することができるため、どの特徴量が予測に寄与しているかを理解することができます。
        <br />
        また、分類木は過学習しやすいため、適切な枝刈りを行うことが重要です。
      </p>

      <h2 className="caption">回帰木(Regression Tree)</h2>
    </>
  );
}
