import { metadata } from "@/app/machine_learning/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";

export default function PageContent() {
  const pagename: string = "classification_tree"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">分類木(Classification Tree)とは</h2>
      <p>
        分類木は、目標変数（ターゲット）が<b>カテゴリ値</b>
        （クラスラベル）の場合に使用される決定木の一種で、データを木構造に基づいて分類する手法です。
        <br />
        ルートノードから始まり、データが内部ノードの条件によって分割され、最終的にリーフノードで予測クラスが決定されます。
      </p>

      <h2 className="caption">分類木のメリット、デメリット</h2>
      <p>分類木のメリット、デメリットは以下の通りです。</p>
      <h3>メリット</h3>
      <ul>
        <li>
          <b>解釈が簡単</b>
          <p>
            木構造が視覚的に表現できるため、専門知識がなくても理解しやすいです。
          </p>
        </li>
        <li>
          <b>データの前処理が不要</b>
          <p>特徴量のスケーリングや正規化が不要です。</p>
        </li>
        <li>
          <b>非線形性への対応</b>
          <p>データの非線形関係を自動的に学習可能</p>
        </li>
      </ul>
      <h3>デメリット</h3>
      <ul>
        <li>
          <b>過学習のリスク</b>
          <p>
            データに対して非常に深い木が構築されると、過学習が発生しやすい。
          </p>
        </li>
        <li>
          <b>不安定性</b>
          <p>データのわずかな変化で木構造が大きく変わることがある。</p>
        </li>
        <li>
          <b>バイアス</b>
          <p>特徴量の種類やスケールに影響される場合がある。</p>
        </li>
      </ul>

      <h2 className="caption">分類木のアルゴリズム</h2>
      <p>分類木のアルゴリズムは以下の通りです。</p>
      <ol>
        <li>
          <b>データの分割</b>
          <p>
            データを分割する条件を決定します。分割条件は、ジニ不純度やエントロピーが最小になるように選択されます。
          </p>
          <p>
            ジニ不純度は、データの不純度を表す指標で、0（純度が高い）から1（純度が低い）の値を取ります。
            <br />
            以下の式で表されます。
          </p>
          <CenteredEquation equation="G = 1 - \sum_{i=1}^{m} p_i^2" />
          <p>
            ここで、
            <InlineMath math="p_i" />
            はクラス
            <InlineMath math="i" />
            の割合を表します。
          </p>
          <p>
            エントロピーは、情報理論の概念で、データの不確実性を表す指標です。
            <br />
            以下の式で表されます。
          </p>
          <CenteredEquation equation="H = -\sum_{i=1}^{m} p_i \log p_i" />
        </li>
        <li>
          <b>再帰的な分割</b>
          <p>
            データを分割し、各分割領域に対して再帰的に分割を行います。分割は、指定された深さやノードのサンプル数が一定数以下になるまで続けられます。
          </p>
        </li>
        <li>
          <b>リーフノードのクラス</b>
          <p>
            リーフノードには、その領域の最頻値（多数決）が設定されます。これが予測クラスとなります。
          </p>
        </li>
      </ol>

      <h2 className="caption">分類木の例</h2>
      <p>
        例を用いて考えましょう。
        <br />
        製品の故障するかどうかを予測する分類木を作成します。
        <br />
        使用時間と温度が故障の原因であると仮定し、以下のようなデータが与えられたとします。
      </p>
      <ImageModal
        imagePath={`${imagePath}/classification_tree_data.png`}
        altText="製品の使用時間、温度と故障のデータ"
      />
      <p>
        ここで、縦軸は温度、横軸は使用時間を表しています。
        <br />
        また、青の点が故障しなかった製品、赤の点が故障した製品を表しています。
        <br />
        このデータにおいて分類木を作成すると以下のようになります。
      </p>
      <ImageModal
        imagePath={`${imagePath}/classification_tree.png`}
        altText="製品の使用時間、温度と故障の分類木"
      />
      <p>
        この分類木をデータに適用すると、使用時間が10時間未満かつ温度が30度未満の製品は故障しないと予測されます。
        <br />
        線で適応したものが以下の通りです。
      </p>
      <ImageModal
        imagePath={`${imagePath}/classification_tree_apply.png`}
        altText="製品の使用時間、温度と故障の分類木を適応した結果"
      />
      <p>
        このように、分類木はデータを分割してクラスを予測することができます。
      </p>
    </>
  );
}
