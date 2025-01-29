import { metadata } from "@/app/machine_learning/metadata";
import CustomLink from "@/app/components/CustomLink";

export default function PageContent() {
  const pagename: string = "gradientboosting"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">勾配ブースティング決定木の概要</h2>
      <p>
        勾配ブースティング決定木（Gradient Boosting Decision Tree,
        GBDT）は、決定木（Decision
        Tree）を基にしたアンサンブル学習手法の一種であり、
        <b>
          弱学習器（通常は決定木）を順番に学習させることで高精度なモデルを構築する手法
        </b>
        です。
        <br />
        ランダムフォレストとは異なり、GBDTは逐次的に学習を行い、各ステップで前のモデルの誤差を補正するように新しい決定木を追加していきます。これにより、より高精度な予測が可能となります。
        <br />
        決定木については以下のページで詳しく解説しています。
      </p>
      <CustomLink
        href="/machine_learning/decisiontree"
        imageUrl={`${basePath}/machine_learning/decisiontree/thumb.png`}
        altText="決定木のページのサムネ"
        siteName={metadata.decisiontree.title}
        description={metadata.decisiontree.description}
      />
      <p>勾配ブースティング決定木の特徴は以下の通りです。</p>
      <ul>
        <li>
          <b>弱学習器の組み合わせ</b>
          <p>
            GBDTは、複数の弱学習器（決定木）を組み合わせることで、強力なモデルを構築します。
          </p>
        </li>
        <li>
          <b>逐次的な学習</b>
          <p>
            各決定木は前のモデルの誤差を補正するように学習されるため、高い精度を実現します。
          </p>
        </li>
        <li>
          <b>過学習への対処</b>
          <p>
            モデルの複雑さを調整することで、過学習を抑制し汎化性能を向上させます。
          </p>
        </li>
      </ul>
      <h2 className="caption">勾配ブースティング決定木の基本原理</h2>
      <p>
        勾配ブースティング決定木は、誤差を最小化するように弱学習器を組み合わせる手法です。
        <br />
        以下にその基本的な仕組みを説明します。
      </p>
      <ul>
        <li>
          <b>損失関数の最小化</b>
          <p>
            勾配ブースティング決定木は、損失関数（Loss
            Function）を最小化するようにモデルを学習します。
            <br />
            一般的には、回帰タスクでは二乗誤差、分類タスクでは交差エントロピー誤差が使用されます。
          </p>
        </li>
        <li>
          <b>勾配降下法</b>
          <p>
            損失関数の勾配を計算し、その逆方向にパラメータを更新することで、モデルを最適化します。
            <br />
            この手法により、誤差を最小化するようにモデルを学習することが可能となります。
          </p>
        </li>
        <li>
          <b>弱学習器の追加</b>
          <p>
            前のモデルが持つ誤差を補正するような新しい弱学習器を追加していきます。
            <br />
            この過程を繰り返すことで、モデルの精度を向上させます。
          </p>
        </li>
      </ul>
      <h2 className="caption">勾配ブースティング決定木のアルゴリズム</h2>
      <ul>
        <li>
          <b>初期モデルの構築</b>
          <p>
            最初に、全データに対して単純なモデル（例えば平均値や最小深さの決定木）を構築します。
          </p>
        </li>
        <li>
          <b>誤差（残差）の計算</b>
          <p>
            各データ点において、モデルの予測値と実際の値の誤差（残差）を計算します。
          </p>
        </li>
        <li>
          <b>残差を学習する決定木の追加</b>
          <p>前のモデルが持つ残差を予測するような新しい決定木を学習します。</p>
        </li>
        <li>
          <b>モデルの更新</b>
          <p>
            新しい決定木の予測結果を元のモデルに加えることで、誤差を修正していきます。
          </p>
        </li>
        <li>
          <b>ステップ3〜4を繰り返し</b>
          <p>
            一定回数または収束条件を満たすまで、新しい決定木を追加してモデルを強化します。
          </p>
        </li>
      </ul>
      <h2 className="caption">
        勾配ブースティング決定木のメリット、デメリット
      </h2>
      <h3>メリット</h3>
      <ul>
        <li>
          <b>高い予測精度</b>
          <p>逐次的に学習するため、より最適なモデルを構築できる。</p>
        </li>
        <li>
          <b>柔軟な損失関数</b>
          <p>回帰や分類だけでなく、カスタム損失関数を使用可能。</p>
        </li>
        <li>
          <b>特徴量の重要度解析</b>
          <p>どの特徴が予測にどの程度寄与しているかを評価可能。</p>
        </li>
      </ul>
      <h3>デメリット</h3>
      <ul>
        <li>
          <b>計算コストが高い</b>
          <p>逐次学習のため、大規模データでは計算時間が長くなる。</p>
        </li>
        <li>
          <b>過学習しやすい</b>
          <p>過剰な学習を防ぐために、正則化や適切な学習率の調整が必要。</p>
        </li>
        <li>
          <b>並列化が困難</b>
          <p>決定木を順番に学習するため、並列処理が難しい。</p>
        </li>
      </ul>
      <h2 className="caption">実装</h2>
      <p>
        勾配ブースティング決定木は、Pythonの機械学習ライブラリであるScikit-learnを使用することで簡単に実装することができます。
        <br />
        今回の例では、Irisデータセットを使用し、分類問題を解きます。
      </p>
      <p>
        下記のnotebookは、勾配ブースティング決定木を用いてIrisデータセットを分類するコードを示しています。
      </p>
      <CustomLink
        href={`${notePath}/gradientboosting.ipynb`}
        imageUrl={`${imagePath}/gradientboosting.png`}
        altText="勾配ブースティング決定木の結果"
        siteName="勾配ブースティング決定木の実装"
        description="勾配ブースティング決定木の実装を行っているコードを示しています。"
        target="_blank"
      />
    </>
  );
}
