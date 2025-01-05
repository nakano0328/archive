import { metadata } from "@/app/machine_learning/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function pageContent() {
  const pagename: string = "adam"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">モメンタムを用いた最適化手法 - ADAM</h2>
      <p>
        ※本投稿はAndrew Ng教授の講義を元にまとめた内容です。
        <br />
        <br />
        Pythonライブラリを使ったディープラーニング学習アルゴリズムのチュートリアルでは、最適化を行う際にほとんどの場合、Gradient
        Descentの代わりにADAM Optimizerを使用することが推奨されています。
        <br />
        ADAMがGradient
        Descentに比べてどのような点で優れているのか、その背景について詳しく見ていきましょう。
      </p>
      <p>
        前提知識として、勾配降下法（Gradient
        Descent）について理解していることが前提となります。
        <br />
        勾配降下法については以下のページを参照してください。
      </p>
      <CustomLink
        href="/machine_learning/gradient_descent"
        imageUrl={`${basePath}/machine_learning/gradient_descent/thumb.png`}
        altText="勾配降下法のページのサムネ"
        siteName={metadata.gradient_descent.title}
        description={metadata.gradient_descent.description}
      />

      <h2 className="caption">勾配降下法の問題</h2>
      <p>
        勾配降下法では、収束が遅くなる、または振動しながら収束することがあります。
        これにより学習の効率が低下する場合があります。
      </p>
      <ImageModal
        imagePath={`${imagePath}/gradient_descent_issues.png`}
        altText="コスト関数最適化時の振動の例"
      />
      <p>
        上記のような問題に対処するため、モメンタムやRMSPropといった手法が提案されています。
      </p>

      <h2 className="caption">モメンタムを用いた勾配降下法</h2>
      <p>
        モメンタム手法は、勾配の反復ごとの変動をスムーズにし、振動を抑えることで収束を加速します。
        アルゴリズムは以下のように定義されます。
      </p>
      <CenteredEquation equation="V_{dw}(t) = \beta_1 V_{dw}(t-1) + (1 - \beta_1) dW(t)" />
      <CenteredEquation equation="W := W - \alpha V_{dw}(t)" />

      <h2 className="caption">RMSProp</h2>
      <p>
        RMSPropは、勾配の大きさを基に学習率を調整します。
        以下にアルゴリズムを示します。
      </p>
      <CenteredEquation equation="S_{dw}(t) = \beta_2 S_{dw}(t-1) + (1 - \beta_2) dW^2(t)" />
      <CenteredEquation equation="W := W - \frac{\alpha dW(t)}{\sqrt{S_{dw}(t)} + \epsilon}" />

      <h2 className="caption">ADAM（Adaptive Moment Estimation）</h2>
      <p>
        ADAMは、モメンタムとRMSPropを組み合わせた最適化手法です。
        各反復における更新は以下の通りです。
      </p>
      <CenteredEquation equation="V_{dw}(t) = \beta_1 V_{dw}(t-1) + (1 - \beta_1) dW(t)" />
      <CenteredEquation equation="S_{dw}(t) = \beta_2 S_{dw}(t-1) + (1 - \beta_2) dW^2(t)" />
      <CenteredEquation equation="W := W - \frac{\alpha V_{dw}(t)}{\sqrt{S_{dw}(t)} + \epsilon}" />
      <p>
        ADAMは学習速度、安定性の向上に寄与し、多くのディープラーニングモデルで広く使用されています。
      </p>

      <h2 className="caption">推奨設定</h2>
      <p>以下のパラメータがADAMの使用時に推奨されます。</p>
      <ul>
        <li>
          <InlineMath math="\beta_1 = 0.9" />
        </li>
        <li>
          <InlineMath math="\beta_2 = 0.99" />
        </li>
        <li>
          <InlineMath math="\epsilon = 10^{-8}" />
        </li>
      </ul>

      <h2 className="caption">参考文献</h2>
      <p>
        Kingma, D. P., & Ba, J. (2015). Adam: A method for stochastic
        optimization. ICLR.
      </p>
    </>
  );
}
