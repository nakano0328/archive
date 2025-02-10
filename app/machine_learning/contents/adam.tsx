import { metadata } from "@/app/machine_learning/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function PageContent() {
  const pagename: string = "adam"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">モメンタムを用いた最適化手法 - ADAM</h2>
      <p>※本投稿はAndrew Ng教授の講義を元にまとめた内容です。</p>
      <p>
        Pythonライブラリを使ったディープラーニング学習アルゴリズムのチュートリアルでは、最適化を行う際にほとんどの場合、勾配降下法の代わりにADAM
        Optimizerを使用することが推奨されています。
        <br />
        ADAMが勾配降下法に比べてどのような点で優れているのか、その背景について詳しく見ていきましょう。
      </p>
      <p>
        前提知識として、勾配降下法について理解していることが前提となります。
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

      <h2 className="caption">勾配降下法の問題点</h2>
      <p>
        勾配降下法では、収束が遅くなる、または振動しながら収束することがあります。
        <br />
        これにより学習の効率が低下する場合があります。
      </p>
      <ImageModal
        imagePath={`${imagePath}/gradient_descent_issues.png`}
        altText="コスト関数最適化時の振動の例"
      />
      <p>理想は以下のような経路で収束することです。</p>
      <ImageModal
        imagePath={`${imagePath}/gradient_descent_ideal.png`}
        altText="コスト関数最適化時の理想的な経路"
      />
      <p>
        上記のような問題に対処するため、モメンタムやRMSPropといった手法が提案されています。
      </p>

      <h2 className="caption">モメンタムを用いた勾配降下法</h2>
      <p>
        モメンタムを導入した勾配降下法は、反復ごとに方向が逆転する場合は更新量を減少させ、反復が同じ方向に続く場合には加速する更新方法です。
        <br />
        この方法は<b>モメンタム</b>と呼ばれます。
        <br />
        アルゴリズムは以下のように定義されます。
      </p>
      <ol>
        <li>初期化</li>
        <CenteredEquation equation="V_{dw}(0) = 0 ,V_{db}(0) = 0 " />
        <li>
          各反復で、現在のバッチに対して <InlineMath math="dW(t) , db(t) " />{" "}
          を計算します。
        </li>
        <li>以下のようにステップを更新する。</li>
        <CenteredEquation
          equation="\begin{aligned}
          V_{dw}(t) &= \beta_1 V_{dw}(t-1) + (1 - \beta_1) dW(t) \\
          V_{db}(t) &= \beta_1 V_{db}(t-1) + (1 - \beta_1) db(t)
          \end{aligned}"
        />
        <p>この時に重みも更新します。</p>
        <CenteredEquation equation="\begin{aligned} W &:= W - \alpha V_{dw}(t) \\ b &:= b - \alpha V_{db}(t) \end{aligned}" />
      </ol>

      <h2 className="caption">RMSProp</h2>
      <p>
        RMSPropは「Root Mean Square Propagation」の略です。
        <br />
        RMSPropは、勾配の方向ではなく、勾配の大きさを基に学習率を調整します。
        <br />
        このアルゴリズムはモメンタムとと同じような使用方法を持ちながら、より学習速度の調整に特化しています。
        <br />
        アルゴリズムは以下のように定義されます。
      </p>
      <ol>
        <li>初期化</li>
        <CenteredEquation equation="S_{dw}(t) = 0 ,S_{db}(t) = 0 " />
        <li>
          各反復で、現在のバッチに対して <InlineMath math="dW(t) , db(t) " />{" "}
          を計算します。
        </li>
        <li>以下のようにステップを更新する。</li>
        <CenteredEquation
          equation="\begin{aligned}
          S_{dw}(t) &= \beta_2 S_{dw}(t-1) + (1 - \beta_2) dW^2(t) \\
          S_{db}(t) &= \beta_2 S_{db}(t-1) + (1 - \beta_2) db^2(t)
          \end{aligned}"
        />
        <p>この時に重みも更新します。</p>
        <CenteredEquation equation="\begin{aligned} W &:= W - \frac{\alpha}{\sqrt{S_{dw}(t)} + \epsilon} dW(t) \\ b &:= b - \frac{\alpha}{\sqrt{S_{db}(t)} + \epsilon} db(t) \end{aligned}" />
      </ol>

      <h2 className="caption">ADAM（Adaptive Moment Estimation）</h2>
      <p>
        ADAMは、モメンタムとRMSPropの両者の利点を組み合わせた最適化手法です。
        <br />
        アルゴリズムは以下のように定義されます。
      </p>
      <ol>
        <li>初期化</li>
        <CenteredEquation equation="V_{dw}(0) = 0 ,V_{db}(0) = 0 ,S_{dw}(0) = 0 ,S_{db}(0) = 0 " />
        <li>
          各反復で、現在のバッチに対して <InlineMath math="dW(t) , db(t) " />{" "}
          を計算します。
        </li>
        <li>以下のようにステップを更新する。</li>
        <CenteredEquation
          equation="\begin{aligned}
          V_{dw}(t) &= \beta_1 V_{dw}(t-1) + (1 - \beta_1) dW(t) \\
          V_{db}(t) &= \beta_1 V_{db}(t-1) + (1 - \beta_1) db(t) \\
          S_{dw}(t) &= \beta_2 S_{dw}(t-1) + (1 - \beta_2) dW^2(t) \\
          S_{db}(t) &= \beta_2 S_{db}(t-1) + (1 - \beta_2) db^2(t)
          \end{aligned}"
        />
        <p>この時に重みも更新します。</p>
        <CenteredEquation
          equation="\begin{aligned}
          W &:= W - \frac{\alpha}{\sqrt{S_{dw}(t)} + \epsilon} V_{dw}(t) \\
          b &:= b - \frac{\alpha}{\sqrt{S_{db}(t)} + \epsilon} V_{db}(t)
          \end{aligned}"
        />
      </ol>
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
      <p>ADAM: A Method for Stochastic Optimization, Kingma & Ba, ICLR, 2015</p>
    </>
  );
}
