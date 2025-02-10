import { metadata } from "@/app/machine_learning/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";

export default function PageContent() {
  const pagename: string = "backpropagation"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">誤差逆伝播法の概要</h2>
      <p>
        誤差逆伝播法（バックプロパゲーション）は、ニューラルネットワークの学習を効率的に行うための中核的なアルゴリズムです。
        学習データに対する「予測誤差」を起点に、各層のパラメータがどの程度その誤差に寄与しているかを計算し、
        重みやバイアスを更新していきます。これにより、モデルが入力と目的変数の関係をより正確に捉えられるようになります。
      </p>
      <ImageModal
        imagePath={`${imagePath}/image.png`}
        altText="誤差逆伝播法のイメージ図"
      />

      <h2 className="caption">誤差逆伝播法の基本的な流れ</h2>
      <p>
        主に次の4ステップを繰り返すことで、ニューラルネットワークのパラメータが最適化されます。
      </p>
      <ol>
        <li>
          <b>順伝播（Forward Propagation）</b>
          <p>
            入力データをネットワークに通し、層ごとの線形演算（
            <InlineMath math="w \cdot x + b" />
            ）と活性化関数（ReLUやSigmoidなど）を適用して出力を得ます。最終的に得られる予測値が、
            その時点でのモデルの推論結果です。
          </p>
        </li>
        <li>
          <b>誤差計算（Error Calculation）</b>
          <p>
            予測値と正解ラベルとの誤差を「損失関数（Loss
            Function）」により定量化します。二乗誤差（MSE）やクロスエントロピー損失がよく使われます。
          </p>
        </li>
        <li>
          <b>誤差の逆伝播（Backward Propagation）</b>
          <p>
            損失関数の値を小さくするために、
            <b>連鎖律（チェーンルール）</b>
            を用いて各層の重みやバイアスの勾配を計算します。
            出力層の誤差から始まり、隠れ層を経て入力層方向に勾配を伝搬させることで、
            層が深くても効率的に偏導関数を求められます。
          </p>
          <p>
            例えば、ある層での線形変換後にReLU関数
            <InlineMath math="\sigma(\cdot)" />
            を適用している場合、勾配計算には
            <InlineMath math="\frac{\partial \sigma}{\partial z}" />
            が含まれます。活性化関数ごとに導関数の形が異なるため、
            ネットワーク全体の勾配はそれらを掛け合わせて算出します。
          </p>
        </li>
        <li>
          <b>パラメータの更新（Parameter Update）</b>
          <p>
            計算した勾配を使って、重み
            <InlineMath math="w" /> とバイアス <InlineMath math="b" />
            を修正します。単純な勾配降下法だけでなく、学習を安定・高速化するため、
            モーメンタムやAdamなどの派生アルゴリズムが広く利用されています。
          </p>
        </li>
      </ol>

      <h2 className="caption">数学的な仕組み</h2>
      <p>
        誤差逆伝播法は、損失関数 <InlineMath math="L" />
        を最小化するために、各パラメータに対して
        <InlineMath math="\frac{\partial L}{\partial w}" /> や{" "}
        <InlineMath math="\frac{\partial L}{\partial b}" />
        を求める過程を自動化します。連鎖律を使うことで、複雑なネットワークでも勾配を局所的な計算の積み重ねで求めることが可能です。
      </p>
      <p>
        一般に、ある層の出力 <InlineMath math="z" />
        が次の層への入力となるので、以下のように勾配を分解できます。
      </p>
      <CenteredEquation equation="\frac{\partial L}{\partial w} = \frac{\partial L}{\partial z} \cdot \frac{\partial z}{\partial w}" />
      <p>
        ここで、
        <InlineMath math="\frac{\partial L}{\partial z}" /> は
        「損失関数が出力に対してどのくらい敏感か」を表し、
        <InlineMath math="\frac{\partial z}{\partial w}" /> は
        「層の入力から出力に至る変換がどのくらい重みによって影響されるか」を示します。
      </p>

      <h2 className="caption">誤差逆伝播法のメリットと課題</h2>
      <p>
        誤差逆伝播法は、深層学習を支える根幹技術であり、
        <b>高次元なパラメータ空間の中で効率よく勾配を計算できる</b>
        というメリットがあります。
      </p>
      <ul>
        <li>複雑なネットワーク構造にも対応可能</li>
        <li>汎用的なアルゴリズムで、多くのタスクに適用可能</li>
      </ul>
      <p>一方、代表的な課題としては以下が挙げられます。</p>
      <ul>
        <li>
          <b>勾配消失問題（Vanishing Gradient Problem）</b>
          <p>
            層が深くなると、活性化関数などの影響で勾配が極端に小さくなり、学習が進まない。
          </p>
        </li>
        <li>
          <b>勾配爆発問題（Exploding Gradient Problem）</b>
          <p>
            勾配が非常に大きくなることで、学習に悪影響が出たりパラメータが発散したりする。
          </p>
        </li>
      </ul>

      <h2 className="caption">応用例</h2>
      <p>誤差逆伝播法は、以下のようなタスクやモデルで広く使われています。</p>
      <ul>
        <li>画像認識（Convolutional Neural Networks: CNN）</li>
        <li>自然言語処理（RNN, Transformersなど）</li>
        <li>時系列データ解析（LSTM, GRUなどの変種RNN）</li>
        <li>強化学習（Deep Q-Network: DQNなど）</li>
      </ul>
      <p>
        このように多岐にわたる分野で、誤差逆伝播法を利用してモデルを最適化し、
        高い性能を実現しています。
      </p>
    </>
  );
}
