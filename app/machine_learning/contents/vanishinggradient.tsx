import { metadata } from "@/app/machine_learning/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function PageContent() {
  const pagename: string = "vanishinggradient"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">勾配消失問題とは</h2>
      <p>
        勾配消失問題（Vanishing Gradient
        Problem）は、深層学習において、勾配が逆伝播する際に層を遡るにつれて勾配が次第に小さくなり、最初の層にほとんど影響を与えなくなる問題です。
      </p>

      <h3>原因</h3>
      <p>
        活性化関数の勾配（微分）が0に近い値を取ることが原因です。
        <br />
        特にシグモイド関数やハイパボリックタンジェント関数は、入力が大きいときに勾配が0に近づくため、勾配消失問題が発生しやすいです。
      </p>

      <h2 className="caption">活性化関数の微分</h2>
      <p>シグモイド関数の微分は次のようになります。</p>
      <CenteredEquation equation="f'(x) = f(x)(1 - f(x))" />
      <ImageModal
        imagePath={`${imagePath}/sigmoid.png`}
        altText="シグモイド関数の微分"
      />
      <p>ここで、青い実線は元の関数を、赤い点線は微分を表しています。</p>
      <br />

      <p>ハイパボリックタンジェント関数の微分は次のようになります。</p>
      <CenteredEquation equation="f'(x) = 1 - f(x)^2" />
      <ImageModal
        imagePath={`${imagePath}/tanh.png`}
        altText="ハイパボリックタンジェント関数の微分"
      />
      <p>ここで、青い実線は元の関数を、赤い点線は微分を表しています。</p>
      <br />

      <h2 className="caption">対策</h2>
      <p>
        勾配消失問題を解決するための対策として、ReLU関数やその派生関数が提案されています。
        <br />
        ReLU関数は、入力が0より大きいときにはその値をそのまま出力し、0以下のときには0を出力する関数です。
      </p>

      <h3>ReLU関数</h3>
      <p>
        ReLU関数は
        <InlineMath math="x" />
        が0より小さい場合には、すべて0で定義される関数です。
        <br />
        この関数は活性化関数による勾配消失問題を解決するために提案されました。
      </p>
      <p>ReLU関数とその微分は次のようになります。</p>
      <ImageModal
        imagePath={`${imagePath}/relu.png`}
        altText="ReLU関数とその微分"
      />
      <p>ここで、青い実線は元の関数を、赤い点線は微分を表しています。</p>

      <h2 className="caption">まとめ</h2>
      <p>
        勾配消失問題は、深層学習において勾配が逆伝播する際に層を遡るにつれて勾配が次第に小さくなり、最初の層にほとんど影響を与えなくなる問題です。
        <br />
        この問題を解決するために、ReLU関数やその派生関数が提案されています。
      </p>
      <p>また、今回使用した画像を作成したNotebookは以下のものになります。</p>
      <CustomLink
        href={`${notePath}/notebook.ipynb`}
        imageUrl={`${imagePath}/thumb.png`}
        altText="活性化関数の表示とその微分"
        siteName="活性化関数の表示とその微分"
        description="活性化関数の表示とその微分を行っているコードを示しています。"
        target="_blank"
      />
    </>
  );
}
