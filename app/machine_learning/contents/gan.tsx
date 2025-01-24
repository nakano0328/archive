import { metadata } from "@/app/machine_learning/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function PageContent() {
  const pagename: string = "gan";

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">GANとは</h2>
      <p>
        <b>GAN</b>
        (Generative Adversarial Network,
        敵対的生成ネットワーク)とは、2014年にIan
        Goodfellow氏らによって提唱された機械学習モデルの一種です。
        <br />
        GANは主に「生成モデル」の分野に属し、あるデータ（画像や音声、文章など）を新たに生成することを目的としています。
      </p>

      <h2 className="caption">GANの構造</h2>
      <p>GANは大きく分けて2つのネットワークで構成されています。</p>
      <h3>ジェネレーター（Generator）</h3>
      <p>
        ランダムなノイズなどを入力として、擬似的に本物のようなデータを「生成」するネットワークです。
        <br />
        たとえば画像生成のタスクでは、ノイズベクトルを入力して、本物の画像と見分けがつかないような画像を出力しようとします。
      </p>
      <h3>ディスクリミネーター（Discriminator）</h3>
      <p>
        入力されたデータが本物か、それとも生成された偽物かを判定（分類）するネットワークです。
        <br />
        実際のデータセットから取得した「本物のデータ」と、ジェネレーターが生成した「偽物のデータ」を見分けることを学習します。
      </p>

      <p>画像で表すと以下の通りです。</p>
      <ImageModal
        imagePath={`${imagePath}/gan_structure.png`}
        altText="GANの構造"
      />
    </>
  );
}
