import { metadata } from "@/app/machine_learning/metadata";
import ImageModal from "@/app/components/ImageModal";

export default function PageContent() {
  const pagename: string = "gan";

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;

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

      <h2 className="caption">学習方法</h2>
      <p>
        GANの学習は、ジェネレーターとディスクリミネーターの2つのネットワークが互いに競い合うようにして行われます。
        <br />
        つまり、ジェネレーターはディスクリミネーターを騙すように生成し、ディスクリミネーターはジェネレーターが生成した偽物を見破るように学習します。
      </p>
      <ul>
        <li>
          <b>ジェネレーターの学習</b>
          <p>
            ディスクリミネーターを騙すように、本物のデータに近いデータを生成するように学習します。
          </p>
        </li>
        <li>
          <b>ディスクリミネーターの学習</b>
          <p>
            本物のデータを「本物」と判定できるように学習し、ジェネレーターが作った偽物のデータを「偽物」と判定できるように学習します。
          </p>
        </li>
      </ul>
      <p>
        両者交互に学習をすることで、ジェネレーターはより本物に近いデータを生成し、ディスクリミネーターはより正確に本物と偽物を見分けるようになります。
      </p>

      <h2 className="caption">GANの応用</h2>
      <p>
        GANは画像生成だけでなく、音声や文章の生成など様々な分野で活用されています。
        <br />
        また、GANを応用した技術として、画像の修復や変換、画像生成の進化などがあります。
      </p>
    </>
  );
}
