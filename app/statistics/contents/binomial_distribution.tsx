import { metadata } from "@/app/statistics/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";

export default function PageContent() {
  const pagename: string = "binomial_distribution"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">二項分布とは</h2>
      <p>
        <b>二項分布</b>
        は、ある試行の結果が成功か失敗のいずれかである場合に、その試行を独立にn回行ったとき、成功する回数の確率分布です。
        <br />
        例えば、
      </p>
      <ul>
        <li>コインをn回投げて表が出る回数（表が出る確率が毎回同じ場合）</li>
        <li>製品をn個検査して不良品の個数（不良品である確率が毎回同じ場合）</li>
        <li>
          n人にアンケートを実施して特定の回答をする人数（特定の回答をする確率が毎回同じ場合）
        </li>
      </ul>
      <p>などが二項分布に従います。</p>
      <p>二項分布は、以下の3つの要素で特徴づけられます。</p>
      <ul>
        <li>
          <b>試行回数(n)</b>：試行の総数。
        </li>
        <li>
          <b>成功確率(p)</b> : 1回の試行で成功する確率。
        </li>
        <li>
          <b>成功回数(k)</b>：実際に成功した回数（確率変数の値）。
        </li>
      </ul>
      <p>
        二項分布では、それぞれの成功回数kに対して、その回数が起こる確率が定まります。この確率を表す関数を
        <b>確率質量関数</b>と呼びます。
      </p>
      <h2 className="caption">二項分布の確率質量関数</h2>
      <p>二項分布の確率質量関数は、以下の式で表されます。</p>
      <CenteredEquation equation="P(X=k) = \binom{n}{k} p^k (1-p)^{n-k}" />
      <p>ここで、</p>
      <ul>
        <li>
          <p>
            <InlineMath math="P(X=k) " /> : 成功回数がk回である確率
          </p>
        </li>
        <li>
          <p>
            <InlineMath math="\binom{n}{k}" /> :
            二項係数（n個からk個を選ぶ組み合わせの数）。例えば、n=4, k=2
            の場合、4つのものから2つを選ぶ組み合わせの数を表します。
          </p>
        </li>
        <li>
          <InlineMath math="k=0,1,2,\ldots,n" /> :
          kは0からnまでの整数値をとります。
        </li>
        <li>
          <p>
            <InlineMath math="\binom{n}{k} = \frac{n!}{k!(n-k)!}" /> :
            二項係数の計算式
          </p>
        </li>
      </ul>
      <h2 className="caption">kの意味</h2>
      <p>
        二項分布においてkは、n回の試行で成功する回数を表します。確率質量関数
        <InlineMath math="P(X=k)" />
        は、n回の試行でk回成功する確率を示します。
      </p>
      <p>例えば、3回中2回成功する場合:</p>
      <ul>
        <li>(成功, 成功, 失敗)</li>
        <li>(成功, 失敗, 成功)</li>
        <li>(失敗, 成功, 成功)</li>
      </ul>
      <p>これらの全てが3回中2回成功、1回失敗のケースに該当します。</p>
      <h2 className="caption">二項分布の性質</h2>

      <h3>期待値</h3>
      <p>
        二項分布の期待値は、n回の試行で平均的に何回成功するかを表し、以下の式で表されます。
      </p>
      <CenteredEquation equation="E(X) = np" />
      <p>
        例えば、成功確率0.5の試行を10回行う場合、期待値は10 * 0.5 = 5
        となり、平均して5回成功すると考えられます。
      </p>
      <h3>分散</h3>
      <p>
        二項分布の分散は、成功回数のばらつき具合を表し、以下の式で表されます。
      </p>
      <CenteredEquation equation="V(X) = np(1-p)" />
      <p>
        例えば、成功確率0.5の試行を10回行う場合、分散は10 * 0.5 * 0.5 = 2.5
        となります。
      </p>
      <h2 className="caption">二項分布の例</h2>
      <p>例として、成功確率が0.5の場合、試行回数が10回の二項分布を示します。</p>
      <ImageModal
        imagePath={`${imagePath}/binomial_distribution.png`}
        altText="二項分布の例"
      />
    </>
  );
}
