import { metadata } from "@/app/machine_learning/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function PageContent() {
  const pagename: string = "linearregression"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">線形回帰とは</h2>
      <p>
        線形回帰は、入力変数と出力変数の間の関係をモデル化するための統計的手法です。
        <br />
        説明変数（独立変数）と目的変数（従属変数）との間に線形関係がある場合に適用されます。
      </p>
      <p>
        線形回帰は説明変数の数によって、単回帰分析と重回帰分析に分けられます。
        <br />
        説明変数が１つなら<b>単回帰分析</b>、複数なら<b>重回帰分析</b>
        となります。
      </p>

      <h2 className="caption">線形回帰のやり方</h2>
      <p>
        単回帰分析と重回帰分析の手法は異なりますが、基本的な流れは同じです。
        <br />
        線形回帰の目的は、説明変数と目的変数の関係をモデル化することです。
        <br />
        具体的には、説明変数と目的変数の関係を表す直線を求めることが目的です。
      </p>
      <p>線形回帰の手順は以下の通りです。</p>
      <ol>
        <li>
          <b>データセットの収集、処理</b>
          <p>データセットを収集し、分析をしやすいようにデータを加工します。</p>
        </li>
        <li>
          <b>モデルの選択</b>
          <p>
            単回帰分析か重回帰分析かを選択します。これは、説明変数の数によって決まります。
          </p>
        </li>
        <li>
          <b>パラメータの最適化</b>
          <p>
            モデルのパラメータを最適化します。これは、誤差を最小化するようにパラメータを調整することです。
          </p>
        </li>
        <li>
          <b>モデルの評価</b>
          <p>
            モデルの性能を評価します。これは、予測精度や誤差、決定係数を評価することです。
          </p>
        </li>
      </ol>

      <h2 className="caption">単回帰分析</h2>
      <p>
        単回帰分析は、説明変数が1つの場合の線形回帰です。
        <br />
        以下の式で表されます。
      </p>
      <CenteredEquation equation="y = \beta_0 + \beta_1 x + \epsilon" />
      <p>
        ここで、
        <InlineMath math="\beta_0" />
        は切片、
        <InlineMath math="\beta_1" />
        は傾き、
        <InlineMath math="\epsilon" />
        は誤差です。
        <br />
        この式は、説明変数
        <InlineMath math="x" />
        に対して目的変数
        <InlineMath math="y" />
        を予測するモデルです。
      </p>
      <p>
        単回帰分析では、
        <InlineMath math="\beta_0" />
        と
        <InlineMath math="\beta_1" />
        を最適化することで、説明変数と目的変数の関係をモデル化します。
      </p>

      <h2 className="caption">単回帰分析の例</h2>
      <p>
        以下のデータを使って、単回帰分析を行います。
        <br />
        このデータは、機械学習ライブラリのscikit-learnに含まれるカルフォルニアの住宅のデータセットです。
        <br />
        世帯の平均収入を説明変数
        <InlineMath math="x" />
        、住宅価格の中央値を目的変数
        <InlineMath math="y" />
        として、単回帰分析を行います。
      </p>

      <ImageModal
        imagePath={`${imagePath}/simple_data.png`}
        altText="単回帰分析のデータ"
      />

      <p>
        このデータの関係を数式で表せるのが単回帰分析です。また、このデータ以外でも同様の傾向があるかを調べることができます。
      </p>

      <p>以下のNotebookで単回帰分析を行っています。</p>

      <CustomLink
        href={`${notePath}/simple.ipynb`}
        imageUrl={`${imagePath}/simple.png`}
        altText="単回帰分析の結果"
        siteName="単回帰分析"
        description="単回帰分析を行っているコードを示しています。"
        target="_blank"
      />

      <p>単回帰分析結果は以下の通りです。</p>

      <ImageModal
        imagePath={`${imagePath}/simple.png`}
        altText="単回帰分析の結果"
      />

      <ul>
        <li>
          <b>平均二乗誤差(MSE)</b>
          <p>モデルの予測精度を示します。値が小さいほど良いです。</p>
        </li>
        <li>
          <b>決定係数(R²)</b>
          <p>モデルがどの程度データを説明しているか（1に近いほど良い）。</p>
        </li>
      </ul>

      <p>
        この結果から、世帯の平均収入が上がると住宅価格の中央値も上がる傾向があることがわかります。
      </p>

      <h2 className="caption">重回帰分析</h2>
      <p>
        重回帰分析は、説明変数が複数の場合の線形回帰です。
        <br />
        以下の式で表されます。
      </p>
      <CenteredEquation equation="y = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \cdots + \beta_n x_n + \epsilon" />
      <p>
        ここで、
        <InlineMath math="\beta_0" />
        は切片、
        <InlineMath math="\beta_1, \beta_2, \ldots, \beta_n" />
        は各説明変数の係数、
        <InlineMath math="\epsilon" />
        は誤差です。
        <br />
        この式は、複数の説明変数
        <InlineMath math="x_1, x_2, \ldots, x_n" />
        に対して目的変数
        <InlineMath math="y" />
        を予測するモデルです。
      </p>
      <p>
        重回帰分析では、
        <InlineMath math="\beta_0, \beta_1, \ldots, \beta_n" />
        を最適化することで、説明変数と目的変数の関係をモデル化します。
      </p>

      <h2 className="caption">重回帰分析の例</h2>
      <p>
        以下のデータを使って、重回帰分析を行います。
        <br />
        このデータも、機械学習ライブラリのscikit-learnに含まれるカルフォルニアの住宅のデータセットです。
        <br />
        世帯の平均収入、1世帯あたりの平均部屋数、1世帯当たりの平均占有人数を説明変数として、重回帰分析を行います。
      </p>
      <p>以下のNotebookで重回帰分析を行っています。</p>

      <CustomLink
        href={`${notePath}/multiple.ipynb`}
        imageUrl={`${imagePath}/multiple.png`}
        altText="重回帰分析の結果"
        siteName="重回帰分析"
        description="重回帰分析を行っているコードを示しています。"
        target="_blank"
      />

      <p>重回帰分析結果は以下の通りです。</p>
      <p>
        平均二乗誤差（MSE）: 0.69
        <br />
        決定係数（R^2）: 0.48
        <br />
        <br />
        回帰係数：
        <br />
        <InlineMath math="x_1" /> (MedInc) : 0.434683 <br />
        <InlineMath math="x_2" /> (AveRooms) : -0.038326 <br />
        <InlineMath math="x_3" /> (AveOccup) : -0.004174
      </p>

      <p>
        この結果から、世帯の平均収入が高いほど住宅価格の中央値が高くなる傾向があることがわかります。
        <br />
        また、1世帯あたりの平均部屋数が多いほど住宅価格の中央値が低くなる傾向があることがわかります。
        <br />
        1世帯当たりの平均占有人数は住宅価格の中央値にあまり影響を与えていないことがわかります。
      </p>
    </>
  );
}
