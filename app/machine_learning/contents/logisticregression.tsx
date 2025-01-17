import { metadata } from "@/app/machine_learning/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function PageContent() {
  const pagename: string = "logisticregression"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">ロジスティクス回帰とは</h2>
      <p>
        ロジスティック回帰は、線形回帰を用いて2つのクラスに分類（例えば、「合格/不合格」などの2値分類）するための手法です。
        <br />
        線形回帰では、入力データに対して直線を引いて予測を行いますが、ロジスティック回帰では、入力データに対してS字型の曲線を引いて予測を行います。
      </p>

      <h2 className="caption">ロジスティック回帰の数式</h2>
      <p>ロジスティック回帰の数式は以下のように表されます。</p>
      <CenteredEquation equation="h_{\theta}(x) = \frac{1}{1 + e^{-\theta^Tx}}" />
      <p>
        ここで、
        <InlineMath math="\theta" />
        はパラメータベクトル、
        <InlineMath math="x" />
        は入力データ、
        <InlineMath math="h_{\theta}(x)" />
        は入力データ
        <InlineMath math="x" />
        がクラス1に属する確率を表します。
      </p>
      <ImageModal
        imagePath={`${imagePath}/logistic_regression.png`}
        altText="ロジスティック回帰のイメージ"
      />

      <h2 className="caption">ロジスティック回帰の特徴</h2>
      <ul>
        <li>
          <b>確率的予測</b>
          <p>
            ロジスティック回帰は、入力データがクラス1に属する確率を出力するため、確率的な予測が可能です。
          </p>
        </li>
        <li>
          <b>線形分離不可能なデータにも適用可能</b>
          <p>
            ロジスティック回帰は、線形分離不可能なデータにも適用可能であり、S字型の曲線を用いて分類を行います。
          </p>
        </li>
        <li>
          <b>最尤推定に基づく学習</b>
          <p>ロジスティック回帰は、最尤推定を用いてパラメータを学習します。</p>
        </li>
      </ul>

      <h2 className="caption">ロジスティック回帰の実装</h2>
      <p>
        ロジスティック回帰の実装例は以下のGoogle
        Colabノートブックをご参照ください。
      </p>
    </>
  );
}
