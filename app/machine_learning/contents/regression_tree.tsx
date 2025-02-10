import { metadata } from "@/app/machine_learning/metadata";
import ImageModal from "@/app/components/ImageModal";

export default function PageContent() {
  const pagename: string = "regression_tree"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">回帰木(Regression Tree)とは</h2>
      <p>
        回帰木は、目標変数が<b>連続値</b>
        の場合に使用される決定木の一種で、データを木構造に基づいて回帰する手法です。
        <br />
        ルートノードから始まり、データが内部ノードの条件によって分割され、最終的にリーフノードで予測値が決定されます。
      </p>
      <p>回帰木のメリット、デメリットは以下の通りです。</p>

      <h3>メリット</h3>
      <ul>
        <li>
          <b>直感的で解釈が容易</b>
          <p>
            木構造に基づいて分割ルールを視覚化できるため、予測モデルを簡単に説明できます。
          </p>
        </li>
        <li>
          <b>非線形な関係をモデル化できる</b>
          <p>
            入力特徴量と目的変数の間に非線形な関係があっても適切に予測できます。
          </p>
        </li>
        <li>
          <b>前処理がほとんど不要</b>
          <p>
            特徴量のスケーリングや正規化を必要とせず、カテゴリ変数や数値変数をそのまま扱えます。
          </p>
        </li>
        <li>
          <b>特徴選択が自動的に行われる</b>
          <p>分割基準に基づいて重要な特徴量が自動的に選ばれます。</p>
        </li>
      </ul>

      <h3>デメリット</h3>
      <ul>
        <li>
          <b>過学習のリスク</b>
          <p>
            データに対して深く分割しすぎると、過学習を引き起こす可能性があります。
          </p>
        </li>
        <li>
          <b>境界の不連続性</b>
          <p>
            分割点ごとに予測値が段階的に変化するため、予測モデルが不連続な境界を持つことがあります。
          </p>
        </li>
        <li>
          <b>データの分割が決定的</b>
          <p>
            分割基準が単純なため、少量のデータに対して不安定になることがあります。
          </p>
        </li>
      </ul>

      <h2 className="caption">回帰木のアルゴリズム</h2>
      <p>回帰木のアルゴリズムは以下の通りです。</p>
      <ol>
        <li>
          <b>データの分割</b>
          <p>
            データを分割する条件を決定します。分割条件は、目的変数の分散が最小になるように選択されます。
          </p>
        </li>
        <li>
          <b>再帰的な分割</b>
          <p>
            データを分割し、各分割領域に対して再帰的に分割を行います。分割は、指定された深さやノードのサンプル数が一定数以下になるまで続けられます。
          </p>
        </li>
        <li>
          <b>リーフノードの予測値</b>
          <p>
            リーフノードには、その領域の目的変数の平均値が設定されます。これが予測値となります。
          </p>
        </li>
      </ol>

      <h2 className="caption">回帰木の例</h2>
      <p>
        例を用いて考えましょう。
        <br />
        以下のような「部屋の広さ（面積）」「築年数」「価格」を持つ不動産データ（6件）を考えます。価格は連続値（単位は仮に「百万円」）とします。
      </p>
      <ImageModal
        imagePath={`${imagePath}/regression_tree_data.png`}
        altText="回帰木のデータ"
      />
      <p>このデータにおいて回帰木を作成すると以下のようになります。</p>
      <ImageModal
        imagePath={`${imagePath}/regression_tree.png`}
        altText="回帰木"
      />
      <p>
        このように、回帰木はデータを分割して連続値を予測することができます。
      </p>
    </>
  );
}
