import { metadata } from "@/app/machine_learning/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function PageContent() {
  const pagename: string = "decisiontree"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">決定木（Decision Tree）</h2>
      <p>
        決定木は、データを木構造で表現し、分類や回帰の問題を解くための機械学習モデルです。シンプルで解釈しやすいことから、統計学や機械学習の初学者から実務まで幅広く利用されています。
      </p>

      <h2 className="caption">決定木の基本構造</h2>
      <ul>
        <li>
          <b>ルートノード（Root Node）:</b>
          決定木の最上部にあるノードで、すべてのデータがここから分割されます。
        </li>
        <li>
          <b>内部ノード（Internal Node）:</b>
          ルールに基づいてデータが分割される場所です。各内部ノードには1つの特徴量と閾値が割り当てられています。
        </li>
        <li>
          <b>リーフノード（Leaf Node）:</b>
          最終的な予測結果（クラスラベルや数値）を出力します。
        </li>
      </ul>

      <h2 className="caption">決定木の種類</h2>
      <ul>
        <li>
          <b>分類木（Classification Tree）:</b>
          目標変数がカテゴリ（クラスラベル）の場合に使用します。例:
          「天気が晴れなら遊びに行く」などのYes/Noを判定する。
        </li>
        <li>
          <b>回帰木（Regression Tree）:</b>
          目標変数が連続値の場合に使用します。例: 家賃や株価を予測するモデル。
        </li>
      </ul>

      <h2 className="caption">決定木の作成方法（アルゴリズム）</h2>
      <h3>分類木の場合</h3>
      <ul>
        <li>
          <b>ジニ不純度（Gini Impurity）:</b>
          <InlineMath math="G = 1 - \sum_{k=1}^K p_k^2" />
          <br />
          ここで <InlineMath math="p_k" /> はクラス <InlineMath math="k" />{" "}
          のデータの割合を表します。
        </li>
        <li>
          <b>情報利得（Information Gain）:</b>
          エントロピーの減少量を基準にします。
          <InlineMath math="H = -\sum_{k=1}^K p_k \log(p_k)" />
        </li>
      </ul>
      <h3>回帰木の場合</h3>
      <p>
        分散の減少を基準に、各分割後のノードで目標変数の分散が最小になるようにします。
      </p>

      <h3>停止条件</h3>
      <ul>
        <li>ノード内のデータ数が一定以下になる。</li>
        <li>分割による改善が閾値未満になる。</li>
        <li>決定木の深さが指定された最大値に達する。</li>
      </ul>

      <h2 className="caption">決定木の利点と欠点</h2>
      <h3>利点</h3>
      <ul>
        <li>
          解釈しやすい:
          木構造のルールが明確なので、誰でもモデルの動作を理解しやすい。
        </li>
        <li>非線形性への対応: データの線形分離が難しい場合でも対応可能。</li>
        <li>前処理が少ない: 特徴量のスケーリングや正規化が不要。</li>
      </ul>
      <h3>欠点</h3>
      <ul>
        <li>
          過学習のリスク:
          深い決定木は過学習しやすいため、剪定（Pruning）などの対策が必要。
        </li>
        <li>
          分割のバイアス: カテゴリ変数の多い特徴量が優先的に選ばれる傾向がある。
        </li>
        <li>不安定性: データのわずかな変化が木構造に大きく影響する。</li>
      </ul>

      <h2 className="caption">決定木の改良・拡張</h2>
      <ul>
        <li>
          <b>ランダムフォレスト（Random Forest）:</b>
          複数の決定木を構築し、それらをアンサンブルすることで性能を向上。バギング（Bagging）を使用して、過学習を抑制し、モデルの安定性を向上。
        </li>
        <li>
          <b>勾配ブースティング（Gradient Boosting）:</b>
          決定木を逐次構築し、予測精度を徐々に改善。XGBoostやLightGBMが代表的な実装。
        </li>
      </ul>

      <h2 className="caption">決定木の具体例</h2>
      <h3>分類木の例</h3>
      <p>
        「天気」「気温」「湿度」を基に外出するかを予測するモデル：
        <br />
        ルートノード: 「天気は晴れですか？」
        <br />
        Yes → 次の質問: 「気温は高いですか？」
        <br />
        Yes → 外出する
        <br />
        No → 外出しない
      </p>
      <h3>回帰木の例</h3>
      <p>
        家賃の予測モデル：
        <br />
        ルートノード: 「部屋の広さ &gt; 50㎡」
        <br />
        Yes → 「駅から徒歩10分以内？」
        <br />
        Yes → 家賃 = 12万円
        <br />
        No → 家賃 = 10万円
        <br />
        No → 「築年数 &lt; 10年？」
        <br />
        Yes → 家賃 = 8万円
        <br />
        No → 家賃 = 6万円
      </p>
    </>
  );
}
