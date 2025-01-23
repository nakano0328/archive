import { metadata } from "@/app/machine_learning/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function PageContent() {
  const pagename: string = "gan"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">GANとは：AI界の画期的な発明</h2>
      <p>
        2014年にIan Goodfellowによって提案されたGAN（Generative Adversarial
        Network）は、 機械学習における画期的な発明として注目を集めています。
        本物そっくりのデータを生成できる能力は、芸術作品の創造から科学研究まで、
        幅広い分野に革新をもたらしています。
      </p>

      <div className="theory-box">
        <h2 className="caption">理論的基礎：対立する2つのネットワーク</h2>
        <p>
          GANの核心は、生成器（Generator）と識別器（Discriminator）という2つのニューラルネットワークの競争にあります。
          この関係は、以下の数式で表現されます：
        </p>
        <CenteredEquation equation="V(D, G) = \min_G \max_D \mathbb{E}_{x \sim p_{data}(x)}[\log D(x)] + \mathbb{E}_{z \sim p_z(z)}[\log(1 - D(G(z)))]" />
      </div>

      <h2 className="caption">GANの基本構造</h2>
      <p>
        まず生成モデルは、ランダムなベクトルやノイズを入力として、
        本物と見分けがつかないほどリアルなデータを生み出そうと試みます。
        対する識別モデルは、与えられたデータが本物か合成かを学習し、
        その結果に応じてモデル全体のパラメータを更新していく仕組みです。
      </p>
      <ImageModal
        imagePath={`${imagePath}/gan_structure.png`}
        altText="GANの基本構造を示す図"
      />

      <h2 className="caption">学習プロセス</h2>
      <p>
        GANの学習では、まず生成モデルが雑音から生成したデータを識別モデルに入力し、
        その判定結果から識別モデルと生成モデルの両方が更新を繰り返します。
        このサイクルを積み重ねることで、生成モデルはより意味のあるデータを生み出し、
        識別モデルは鋭い判断力を身につけていくのです。
      </p>

      <h2 className="caption">応用例</h2>
      <p>
        生成した画像を学習データとして活用するデータ拡張、
        欠損した場所を補完する画像補完、
        静止画から動きのある映像を生み出すなど、多種多様な応用が可能です。
        特に人物の顔画像生成はそのクオリティの高さが注目を集めており、
        ディープフェイクのような新たな技術分野も生まれています。
      </p>

      <h2 className="caption">課題と限界</h2>
      <p>
        一方で、学習が不安定になりやすいという課題が存在します。
        生成モデルと識別モデルのバランスが崩れると、
        生成モデルが一部のパターンしか作れなくなる「モード崩壊」に陥りがちです。
        また、高度なモデルを構築する場合には大量のデータと計算資源が必要となるため、
        学習コストの高さも大きな問題となっています。
      </p>

      <h2 className="caption">派生モデル</h2>
      <p>
        近年はGANを改良した様々な派生モデルも提案されています。
        たとえば、畳み込み構造を活用するDCGANや、収束の安定性を高めるWGAN、
        さらに高画質な画像生成を目指すStyleGANなど、それぞれに特化した特徴があります。
        これらの進化系モデルは、より多彩な応用や品質向上を実現しています。
      </p>

      <CustomLink
        href={notePath}
        imageUrl={`${imagePath}/gan_notes.png`}
        altText="GANに関する詳細なノート"
        siteName="GANに関する詳細なノート"
        description="GANの実装と応用についてさらに学べます。"
        target="_blank"
      />
    </>
  );
}
