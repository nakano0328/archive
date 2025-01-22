import { metadata } from "@/app/machine_learning/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function PageContent() {
  const pagename: string = "neural_networks"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">ニューラルネットワークの基本構造</h2>
      <p>
        ニューラルネットワークは人間の脳の神経細胞（ニューロン）を数式で模倣した機械学習モデルです。
        <br />
        ニューラルネットワークは「層（レイヤー）」という概念を中心に構成されます。大まかに以下の3種類の層を持つことが多いです。
      </p>

      <h3>入力層（Input Layer）</h3>
      <p>
        モデルに入力されるデータを受け取る層です。
        <br />
        例：画像認識の場合、画像を画素（ピクセル）値の集まりとして入力する。
      </p>

      <h3>隠れ層（Hidden Layer）または中間層</h3>
      <p>
        入力を受け取り、中間的な特徴抽出や変換を行う層です。
        <br />
        ネットワークの<b>深さ</b>は主にこの隠れ層がいくつあるかで決まります。
        <br />
        ディープラーニングでは多数の隠れ層を積み重ねることで複雑なパターンを学習できるようになります。
      </p>

      <CenteredEquation equation="y = f\left(\sum_{i=1}^{n} w_i x_i + b\right)" />

      <h3>出力層（Output Layer）</h3>
      <p>
        分類、回帰などの最終的な結果を出力する層です。
        <br />
        例：画像分類タスクの場合、各クラス（カテゴリ）に対する確率を出力する。
      </p>

      <p>これらの内容を図で表すと、以下のようになります。</p>

      <ImageModal
        imagePath={`${imagePath}/structure.png`}
        altText="ニューラルネットワークの基本構造"
      />

      <h2 className="caption">活性化関数</h2>
      <p>
        各ニューロンは、前の層から入力される値と、それに対応する「重み（ウェイト）」をかけ合わせて合計し、バイアス（bias）という定数を足します。
        その後、<b>活性化関数</b>を通して非線形変換を行います。
      </p>

      <CenteredEquation equation="a = \sigma\left(\sum_{i=1}^{n} w_i x_i + b\right)" />

      <p>活性化関数については以下のページを参照してください。</p>
      <CustomLink
        href="/machine_learning/activationfunction"
        imageUrl={`${basePath}/machine_learning/activationfunction/thumb.png`}
        altText="活性化関数のページのサムネ"
        siteName={metadata.activationfunction.title}
        description={metadata.activationfunction.description}
      />

      <h2 className="caption">学習プロセス</h2>
      <p>
        ニューラルネットワークの学習プロセスは以下のステップを繰り返すことで行われます。
      </p>
      <ol>
        <li>
          <b>順伝播（Forward Propagation）</b>
          <p>
            入力から出力層に向かって演算を行い、最終的な予測を得ます。
            <br />
            <InlineMath math="\hat{y} = f(x; \theta)" />
          </p>
        </li>
        <li>
          <b>誤差計算（Loss Calculation）</b>
          <p>
            出力結果と正解ラベル（教師データ）との誤差を計算します。
            <br />
            <InlineMath math="\mathcal{L} = \frac{1}{m} \sum_{i=1}^{m} (y_i - \hat{y}_i)^2" />
          </p>
        </li>
        <li>
          <b>逆伝播（Back Propagation）</b>
          <p>
            誤差を基に勾配を計算し、重みを更新します。
            <br />
            <InlineMath math="w := w - \eta \frac{\partial \mathcal{L}}{\partial w}" />
          </p>
          <p>誤差逆伝播法については以下のページを参照してください。</p>
          <CustomLink
            href="/machine_learning/backpropagation"
            imageUrl={`${basePath}/machine_learning/backpropagation/thumb.png`}
            altText="活性化関数のページのサムネ"
            siteName={metadata.backpropagation.title}
            description={metadata.backpropagation.description}
          />
        </li>
        <li>
          <b>重み・バイアスの更新</b>
          <p>勾配を使用して、重みやバイアスを更新します。</p>
        </li>
      </ol>

      <h2 className="caption">応用例</h2>
      <p>
        ニューラルネットワークの応用分野は非常に広く、以下の分野が挙げられます。
      </p>
      <ul>
        <li>画像認識、自然言語処理、音声認識、レコメンドシステムなど。</li>
      </ul>

      <h2 className="caption">使用例</h2>
      <p>
        使用例として、2つのクラスのデータを分類する学習を行います。
        <br />
        今回はデータはダミーデータを作成して使用します。
      </p>
      <p>
        今回使用したモデルは活性化関数は ReLU、最適化アルゴリズムは Adam
        を採用しました。
      </p>

      <p>以下のnotebookで学習を行っています。</p>
      <CustomLink
        href={`${notePath}/neural.ipynb`}
        imageUrl={`${imagePath}/neural.png`}
        altText="ニューラルネットワークによる学習の結果"
        siteName="ニューラルネットワークによる学習"
        description="ニューラルネットワークによる学習を行っているコードを示しています。"
        target="_blank"
      />
      <br />

      <p>
        結果として2つに分類することができました。また、正解率は90%を超えているため高い精度が出たと言えます。
      </p>
      <ImageModal
        imagePath={`${imagePath}/neural.png`}
        altText="ニューラルネットワークによる学習の結果"
      />
    </>
  );
}
