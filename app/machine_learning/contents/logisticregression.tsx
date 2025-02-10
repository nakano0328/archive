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
        ロジスティック回帰は、線形回帰を用いて2つのクラスに分類するための手法です。
        <br />
        実世界ではスパムメールの判定(スパム/非スパム)や疾患の診断(疾患あり/なし)などに使用されます。
      </p>

      <h3>線形回帰との違い</h3>
      <p>
        線形回帰では、入力データに対して直線を引いて予測を行いますが、ロジスティック回帰では、入力データに対してS字型の曲線(シグモイド)を引いて予測を行います。
        <br />
        <br />
        図で表すと以下のようになります。左が線形回帰で、右がロジスティクス回帰です。
      </p>
      <ImageModal
        imagePath={`${imagePath}/logistic_linear.png`}
        altText="線形回帰の図(左)とロジスティクス回帰の図(右)"
      />

      <h2 className="caption">メリット</h2>
      <p>ロジスティック回帰は、以下のようなメリットがあります。</p>
      <ul>
        <li>線形回帰よりも過学習しにくい</li>
        <li>確率を出力することができる</li>
        <li>特徴量の重要度を知ることができる</li>
      </ul>

      <h2 className="caption">数学的な背景</h2>
      <p>
        ロジスティック回帰の数式は、シグモイド関数を用いて表現されます。
        <br />
        シグモイド関数は以下のように表されます。
      </p>
      <CenteredEquation equation="\sigma(x) = \frac{1}{1 + e^{-x}}" />
      <p>
        この関数は、入力
        <InlineMath math="x" />
        に対して0から1の値を出力します。
        <br />
        そのため、確率として考えることができます。
      </p>
      <p>
        ロジスティック回帰の数式は、入力変数
        <InlineMath math="X" />
        と、パラメータ
        <InlineMath math="\omega" />
        を用いて以下のように計算されます。
      </p>
      <CenteredEquation equation="P(y=1|X) = \sigma(\omega^TX) = \frac{1}{1+e^{-(\omega_0+\omega_1x_1+\omega_2x_2+\cdots+\omega_nx_n)}}" />

      <h2 className="caption">ロジスティック回帰の実装</h2>
      <h3>問題設定</h3>
      <p>
        2種類の花(花Aと花B)があります。この花の種類を分類することを考えます。
      </p>

      <h3>データセット</h3>
      <p>
        花の特徴量として「花びらの長さ」と「花びらの幅」を持っているデータセットを使用します。
        <br />
        (今回はダミーデータを作成して用いることにします。)
      </p>

      <h3>実装</h3>
      <p>
        分析の実装は以下のNotebookで行っています。
        <br />
        ロジスティクス回帰のライブラリとしては、scikit-learnのLogisticRegressionを使用しています。
      </p>

      <CustomLink
        href={`${notePath}/logistic.ipynb`}
        imageUrl={`${imagePath}/logistic.png`}
        altText="ロジスティクス回帰の結果"
        siteName="ロジスティクス回帰の実装"
        description="ロジスティクス回帰の実装を行っているコードを示しています。"
        target="_blank"
      />

      <h3>結果</h3>
      <p>
        ロジスティクス回帰を用いて、花の種類を分類することができました。
        <br />
        以下の図は、花の特徴量を元に分類した結果です。
      </p>
      <ImageModal
        imagePath={`${imagePath}/result1.png`}
        altText="ロジスティクス回帰の結果の表"
      />
      <ImageModal
        imagePath={`${imagePath}/logistic.png`}
        altText="ロジスティクス回帰の結果の図"
      />

      <p>結果の説明をします。</p>
      <p>
        <b>表の説明</b>
      </p>

      <ul>
        <li>
          <b>Accuracy（正解率）</b>
          <p>
            モデルの全体的な正解率は 83.3%
            です。これはモデルがテストデータの約83%を正しく分類したことを意味します。
          </p>
        </li>
        <li>
          <b>Precision（適合率）</b>
          <p>
            花A: モデルが花Aと予測したもののうち、87%が実際に花Aでした。
            <br />
            花B: モデルが花Bと予測したもののうち、80%が実際に花Bでした。
          </p>
        </li>
        <li>
          <b>Recall（再現率）</b>
          <p>
            花A: 実際に花Aであるデータのうち、81%を正しく予測しました。
            <br />
            花B: 実際に花Bであるデータのうち、86%を正しく予測しました。
          </p>
        </li>
        <li>
          <b>F1-score（F1値）</b>
          <p>
            PrecisionとRecallのバランスを表します。
            <br />
            花Aと花BのF1スコアがほぼ同じ（0.84と0.83）で、分類のバランスが良いと言えます。
          </p>
        </li>
      </ul>
      <p>
        <b>図の説明</b>
        <br />
        青い点が花A、赤い点が花Bを表しています。
        <br />
        点線は分類の境界を表しており、この境界を基準に花Aと花Bを分類しています。
      </p>

      <h3>考察</h3>
      <p>
        モデルは高い正解率（83.3%）を達成しており、花Aと花Bの分類性能が比較的バランス良いです。
        <br />
        グラフの決定境界に近いデータポイントでは、モデルの判断がやや曖昧になる可能性がありますが、全体的にはしっかり分類できています。
        <br />
        この結果から、ロジスティック回帰はこの問題に対して適切に機能していると言えます。
      </p>
    </>
  );
}
