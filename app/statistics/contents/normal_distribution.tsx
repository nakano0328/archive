import { metadata } from "@/app/statistics/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function PageContent() {
  const pagename: string = "normal_distribution"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">正規分布とは</h2>
      <p>
        正規分布（Normal Distribution）は、ガウス分布とも呼ばれ、
        統計学において最も重要な確率分布の一つです。
        <br />
        これは、確率密度関数（PDF）が以下の式で表される分布です。
      </p>
      <CenteredEquation equation="f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( -\frac{(x - \mu)^2}{2\sigma^2} \right)" />
      <p>
        ここで、
        <InlineMath math="\mu" /> は平均（mean）、
        <InlineMath math="\sigma^2" /> は分散（variance）を表します。
      </p>
      <h2 className="caption">式の導出</h2>
      <p>
        実際に正規分布の公式を導出します。
        <br />
        正規分布の公式は非常に複雑なので以下の図のように3つに分けて導出します。
      </p>
      <ImageModal
        imagePath={`${imagePath}/normal_distribution_derivation.png`}
        altText="正規分布の導出"
      />
      <h3>1.指数関数の導出</h3>
      <p>
        まずは、指数関数の導出から始めます。
        <br />
        指数関数の公式は以下のようになります。
      </p>
      <CenteredEquation equation="e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots" />
      <h3>2.二項定理の導出</h3>
      <p>
        次に、二項定理の導出を行います。
        <br />
        二項定理の公式は以下のようになります。
      </p>
      <CenteredEquation equation="(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k" />
      <h3>3.正規分布の導出</h3>
      <p>
        最後に、正規分布の導出を行います。
        <br />
        正規分布の公式は以下のようになります。
      </p>
      <CenteredEquation equation="f(x) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left( -\frac{(x - \mu)^2}{2\sigma^2} \right)" />

      <h2 className="caption">正規分布の性質</h2>
      <ul>
        <li>
          平均 <InlineMath math="\mu" /> を中心に左右対称である。
        </li>
        <li>
          標準偏差 <InlineMath math="\sigma" /> により分布の広がりが決まる。
        </li>
        <li>中心極限定理により、多くの自然現象が正規分布に従う。</li>
      </ul>
      <h2 className="caption">標準正規分布</h2>
      <p>
        標準正規分布（Standard Normal Distribution）は、 平均が 0、分散が 1
        の正規分布の特別なケースです。 その確率密度関数は以下のようになります。
      </p>
      <CenteredEquation equation="\phi(z) = \frac{1}{\sqrt{2\pi}} \exp\left( -\frac{z^2}{2} \right)" />
      <p>
        ここで <InlineMath math="z = \frac{x - \mu}{\sigma}" />{" "}
        は標準化変数です。
      </p>
      <ImageModal
        imagePath={`${imagePath}/normal_distribution.png`}
        altText="正規分布のグラフ"
      />
    </>
  );
}
