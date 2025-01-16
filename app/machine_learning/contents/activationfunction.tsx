import { metadata } from "@/app/machine_learning/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import ImageModal from "@/app/components/ImageModal";

export default function PageContent() {
  const pagename: string = "activationfunction"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">活性化関数とは</h2>
      <p>
        活性化関数（Activation
        Function）は、ニューラルネットワークにおいて重要な役割を果たす数学的な関数で、各ニューロンの出力を決定します。
        <br />
        具体的には、活性化関数は入力信号を受け取り、それを非線形な形に変換して次の層に渡す役割を果たします。
      </p>
      <p>
        以下の図のように、活性化関数は入力信号の総和にバイアス項を加えた値を受け取り、その値に対して非線形な変換を行います。
      </p>
      <ImageModal
        imagePath={`${imagePath}/functionimage.png`}
        altText="活性化関数の使用のイメージ"
      />

      <h3>活性化関数の役割</h3>
      <ol>
        <li>
          <b>非線形性の導入</b>
          <p>
            ニューラルネットワークが線形モデル（単純な入力と出力の線形関係）を超えて、より複雑なデータパターンや非線形な関係を学習することを可能にします。
          </p>
        </li>
        <li>
          <b>出力の範囲制御</b>
          <p>
            一部の活性化関数は、出力を特定の範囲に制限することで、学習を安定化させます（例:シグモイド関数では出力が0から1の間に収まる）。
          </p>
        </li>
        <li>
          <b>表現力の向上</b>
          <p>
            活性化関数が非線形であることにより、深い層のニューラルネットワークが複雑な関数を近似できるようになります。
          </p>
        </li>
      </ol>

      <h2 className="caption">代表的な活性化関数</h2>
      <h3>シグモイド関数</h3>
      <CenteredEquation equation="\sigma(x) = \frac{1}{1 + e^{-x}}" />
      <ImageModal
        imagePath={`${imagePath}/sigmoid.png`}
        altText="シグモイド関数のグラフ"
      />
      <ol>
        <li>出力範囲:(0,1)</li>
        <li>
          特徴:出力が0~1の範囲に収まるため、確率のような表現が可能です。
          <br />
          ただし、大きな入力では勾配消失問題が起こりやすいです。
        </li>
      </ol>

      <h3>tanh関数(双曲線正接関数)</h3>
      <CenteredEquation equation="\tanh(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}}" />
      <ImageModal
        imagePath={`${imagePath}/tanh.png`}
        altText="tanh関数のグラフ"
      />
      <ol>
        <li>出力範囲:(-1,1)</li>
        <li>
          特徴:出力が-1~1の範囲に収まるため、シグモイド関数よりも中心が0に近いです。
          <br />
          勾配消失問題はシグモイド関数よりも緩和されるが、発生はします。
        </li>
      </ol>

      <h3>ReLU関数(ランプ関数)</h3>
      <CenteredEquation equation="ReLU(x) = \max(0,x)" />
      <ImageModal
        imagePath={`${imagePath}/relu.png`}
        altText="ReLU関数のグラフ"
      />
      <ol>
        <li>出力範囲:[0,∞)</li>
        <li>
          特徴:入力が正の場合はそのまま出力し、負の場合は0を出力します。
          <br />
          勾配消失問題が軽減され、計算が簡単なため、現在最も広く使われている活性化関数です。
        </li>
      </ol>

      <h3>Leaky ReLU関数</h3>
      <CenteredEquation equation="LeakyReLU(x) = \max(\alpha x,x)" />
      <ImageModal
        imagePath={`${imagePath}/leakyrelu.png`}
        altText="Leaky ReLU関数のグラフ"
      />
      <ol>
        <li>出力範囲:(-∞,∞)</li>
        <li>
          特徴:入力が正の場合はそのまま出力し、負の場合はα倍した値を出力します。
          <br />
          ReLU関数の負の領域における勾配消失問題を解決するために提案された活性化関数です。
        </li>
      </ol>

      <h3>ソフトマックス関数</h3>
      <CenteredEquation equation="softmax(x_i) = \frac{e^{x_i}}{\sum_{j=1}^{n} e^{x_j}}" />
      <p>
        ソフトマックス関数は、複数の入力値を受け取り、それぞれの値を正規化して確率分布として出力します。
        <br />
        一般的に、分類問題の出力層で使用され、出力が各クラスに属する確率を表します。
      </p>

      <h2 className="caption">まとめ</h2>
      <p>
        活性化関数は、ニューラルネットワークの非線形性を導入し、表現力を向上させる重要な要素です。
        <br />
        また、活性化関数の選択はモデルの性能や収束速度に大きな影響を与えるため、適切な活性化関数を選択することが重要です。
      </p>
      <p>
        今回紹介した活性化関数以外にも、様々な活性化関数が提案されており、研究や実装において適切な活性化関数を選択することが求められます。
      </p>
    </>
  );
}
