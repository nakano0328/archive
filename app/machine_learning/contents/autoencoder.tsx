import { metadata } from "@/app/machine_learning/metadata";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function pageContent() {
  const pagename: string = "autoencoder"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">オートエンコーダ (AutoEncoder)</h2>
      <p>
        オートエンコーダ（以下AE）は、RBM（Restricted Boltzmann
        Machine）と共に、ディープラーニング理論の構築における基盤となった重要な概念の1つです。
        <br />
        AEとRBMは非常に類似した目標を持ち、どちらも入力層（または可視層）のデータに関する隠れた要因（latent
        factors）を隠れ層から取得することを目指しています。
        <br />
        <br />
        AEはデータを圧縮し、再び元に戻す（解凍する）プロセスを行うニューラルネットワークです。AEの目的は、非線形的な次元削減を行い、高次元のデータを低次元の空間で表現することです。
      </p>

      <h2 className="caption">AEの構造と役割</h2>
      <h3>圧縮の観点：エンコーダの役割</h3>
      <p>
        データの圧縮は「次元削減」に似ていますが、AEは非線形な次元削減を行うため、圧縮という言葉を使います。AEはデータを圧縮し、その結果として表現ベクトル（representation
        vector）を生成します。
      </p>

      <h3>解凍の観点：デコーダの役割</h3>
      <p>
        デコーダは、潜在空間内の任意の表現ベクトルを受け取り、それが持つ元の意味を解釈して、元のサイズのデータに復元します。
      </p>

      <h2 className="caption">AEの入出力結果</h2>
      <p>
        AEの本来の役割は、入力データを出力として再現することです。AEが訓練されたモデルが入力を再構成する際の精度は、データの復元能力を測る指標となります。
      </p>

      <h2 className="caption">AEとディープラーニングの関係</h2>
      <p>
        ディープラーニングの核は、単に「層が深い」というだけでなく、深くなることでどのような効果が得られるかにあります。AEは、データセットの抽象的な特性を学習し、低次元の潜在空間に象徴的な特徴を構成するため、データの抽象化を行っています。
      </p>
      <p>
        AEを利用してより深い層を積み重ねたものは「スタックドオートエンコーダ（Stacked
        AutoEncoder）」と呼ばれ、得られた抽象的な特徴を微調整することで、深層ニューラルネットワークを効果的に学習させることが可能となります。
      </p>

      <h2 className="caption">AEの利用</h2>
      <p>
        以下のコードはAEを利用して、手描き文字の画像を学習しているコードを表しています。また、その結果を潜在空間上でのデータ分布を3次元グラフとしてプロットしています。
        <br />
        また、この図は学習結果です。
      </p>

      <ImageModal
        imagePath={`${imagePath}/MNIST.png`}
        altText="手書き文字の学習結果"
      />

      <CustomLink
        href={`${notePath}/MNIST.ipynb`}
        imageUrl={`${imagePath}/MNIST.png`}
        altText="手描き文字の画像を学習結果"
        siteName="手描き文字の画像を学習"
        description="手描き文字の画像を学習を行っているコードを示しています。"
        target="_blank"
      />
    </>
  );
}
