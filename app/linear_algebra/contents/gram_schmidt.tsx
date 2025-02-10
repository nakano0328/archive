import { metadata } from "@/app/linear_algebra/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function PageContent() {
  const pagename: string = "gram_schmidt"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">グラム・シュミットの直交化とは</h2>
      <p>
        グラム・シュミットの直交化とは、ベクトル空間内の線形独立なベクトルの組を直交化する手法です。
        <br />
        直交化されたベクトルは、正規直交基底を構成します。
      </p>

      <h2 className="caption">正規直交とは</h2>
      <h3>正規とは</h3>
      <p>
        正規とは、ベクトルの大きさが1であることを指します。
        <br />
        ベクトル
        <InlineMath math="\bm{u}" />
        が
        <InlineMath math="\|\bm{u}\| = 1" />
        の時、ベクトル
        <InlineMath math="\bm{u}" />
        は正規化されていると言います。
      </p>
      <h3>直交とは</h3>
      <p>
        直交とは、2つのベクトルが直交することを指します。
        <br />
        ベクトル
        <InlineMath math="\bm{u},\bm{b}" />
        が直交する時、
        <InlineMath math="\bm{u} \perp \bm{b}" />
        と表します。
      </p>
      <p>また、直交するベクトルの内積は0になります。</p>
      <CenteredEquation equation="\bm{u} \cdot \bm{b} = 0" />

      <h2 className="caption">直交化の手順</h2>
      <p>
        グラム・シュミットの直交化の手順は以下の通りです。
        <br />
        以下は3つのベクトルの直交化の手順です。
        <br />
        ここで、
        <InlineMath math="\bm{v}_1,\bm{v}_2,\bm{v}_3" />
        は線形独立なベクトルで、
        <InlineMath math="\bm{u}_1,\bm{u}_2,\bm{u}_3" />
        は直交化されたベクトルです。
      </p>
      <ol>
        <li>
          <InlineMath math="\bm{v}_1" />
          を正規化する。
          <CenteredEquation equation="\bm{u}_1 = \frac{\bm{v}_1}{\|\bm{v}_1\|}" />
        </li>
        <li>
          <InlineMath math="\bm{v}_2" />
          に対して、
          <InlineMath math="\bm{v}_1" />
          との直交成分を求め、正規化をする。
          <CenteredEquation equation="\bm{u}_2 = \frac{\bm{v}_2 - (\bm{u}_1 \cdot \bm{v}_2)\bm{u}_1}{\|\bm{v}_2 - (\bm{u}_1 \cdot \bm{v}_2)\bm{u}_1\|}" />
        </li>
        <li>
          <InlineMath math="\bm{v}_3" />
          に対して、
          <InlineMath math="\bm{v}_1" />
          と
          <InlineMath math="\bm{v}_2" />
          に直交する成分を求め、正規化をする。
          <CenteredEquation equation="\bm{u}_3 = \frac{\bm{v}_3 - (\bm{u}_1 \cdot \bm{v}_3)\bm{u}_1 - (\bm{u}_2 \cdot \bm{v}_3)\bm{u}_2}{\|\bm{v}_3 - (\bm{u}_1 \cdot \bm{v}_3)\bm{u}_1 - (\bm{u}_2 \cdot \bm{v}_3)\bm{u}_2\|}" />
        </li>
      </ol>
      <p>
        このようにして、
        <InlineMath math="\bm{v}_1,\bm{v}_2,\bm{v}_3" />
        の直交化を行います。
      </p>

      <p>
        また、ベクトルがn次元の場合は、n個のベクトルを直交化することになります。
        <br />
        その時の直交化の式は以下の通りです。
      </p>

      <CenteredEquation equation="\bm{u}_i = \frac{\bm{v}_i - \sum\limits_{j=1}^{i-1} (\bm{u}_j \cdot \bm{v}_i)\bm{u}_j}{\|\bm{v}_i - \sum\limits_{j=1}^{i-1} (\bm{u}_j \cdot \bm{v}_i)\bm{u}_j\|}" />

      <h2 className="caption">図解</h2>
      <p>以下の図よりグラムシュミットの直交化を求めることができます。</p>
      <ImageModal
        imagePath={`${imagePath}/v1tov2.png`}
        altText="グラム・シュミットの直交化の図"
      />
      <CustomLink
        href={`${notePath}/v1tov2.ipynb`}
        imageUrl={`${imagePath}/v1tov2.png`}
        altText="グラム・シュミットの直交化を表したグラフ"
        siteName="グラム・シュミットの直交化の図解"
        description="グラム・シュミットの直交化の図解を行っているコードを示しています。"
        target="_blank"
      />
      <br />
      <p>
        ここで、赤いベクトルは
        <InlineMath math="\bm{v}_1" />
        です。
        <br />
        青いベクトルは
        <InlineMath math="\bm{v}_2" />
        です。
        <br />
        緑のベクトルは
        <InlineMath math="\bm{v}_2" />を<InlineMath math="\bm{v}_1" />
        に射影したベクトルです。式で表すと以下の通りです。
      </p>
      <CenteredEquation equation="(\bm{u}_1\cdot\bm{v}_2)\bm{u}_1" />
      <p>
        オレンジのベクトルは
        <InlineMath math="\bm{v}_2" />
        から射影ベクトルを引いた結果のベクトルです。
        <br />
        <br />
        この図を用いてグラムシュミットの直行化の式を導出する方法は以下の通りです。
      </p>

      <p>
        オレンジのベクトルは青いベクトルから緑のベクトルを引いた結果のベクトルです。
        <br />
        青いベクトルは
        <InlineMath math="\bm{v}_2" />
        です。
        <br />
        緑のベクトルは
        <InlineMath math="(\bm{u}_1\cdot\bm{v}_2)\bm{u}_1" /> です。
        <br />
        これらよりオレンジのベクトルは以下のように表せます。
      </p>
      <CenteredEquation equation="\bm{v}_2 - (\bm{u}_1\cdot\bm{v}_2)\bm{u}_1" />
      <p>これを正規化することにより新しいベクトルを取得できます。</p>

      <h2 className="caption">具体例</h2>
      <p>
        例を与えて考えてみましょう。ベクトル
        <InlineMath math="\bm{v}_1,\bm{v}_2,\bm{v}_3" />
        を以下のような数字を与えた3次元ベクトルとします。
      </p>

      <CenteredEquation
        equation="
        \bm{v}_1 = \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix} ,
        \bm{v}_2 = \begin{bmatrix} 1 \\ 1 \\ 0 \end{bmatrix} ,
        \bm{v}_3 = \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}"
      />

      <ol>
        <li>
          <InlineMath math="\bm{v}_1" />
          を正規化して
          <InlineMath math="\bm{u}_1" />
          を求めます。
          <CenteredEquation equation="\bm{u}_1 = \frac{\bm{v}_1}{\|\bm{v}_1\|} = \frac{1}{\sqrt{2}}\begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix}" />
        </li>
        <li>
          <InlineMath math="\bm{v}_2" />
          に対して、
          <InlineMath math="\bm{v}_1" />
          との直交成分を求め、正規化して
          <InlineMath math="\bm{u}_2" />
          を求めます。
          <br />
          <br />
          ここで、
          <CenteredEquation equation="(\bm{u}_1 \cdot \bm{v}_2)\bm{u}_1 = \frac{1}{\sqrt{2}}\begin{bmatrix} 1 \\ 2 \\ -1 \end{bmatrix}" />
          となるので、
          <CenteredEquation equation="\bm{u}_2 = \frac{\bm{v}_2 - (\bm{u}_1 \cdot \bm{v}_2)\bm{u}_1}{\|\bm{v}_2 - (\bm{u}_1 \cdot \bm{v}_2)\bm{u}_1\|} = \frac{1}{\sqrt{6}}\begin{bmatrix} 1 \\ 2 \\ -1 \end{bmatrix}" />
          となります。
        </li>
        <li>
          <InlineMath math="\bm{v}_3" />
          に対して、
          <InlineMath math="\bm{v}_1" />
          と
          <InlineMath math="\bm{v}_2" />
          に直交する成分を求め、正規化して
          <InlineMath math="\bm{u}_3" />
          を求めます。
          <br />
          <br />
          ここで、
          <CenteredEquation equation="(\bm{u}_1 \cdot \bm{v}_3)\bm{u}_1 = \begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix}" />
          および
          <CenteredEquation equation="(\bm{u}_2 \cdot \bm{v}_3)\bm{u}_2 = \frac{1}{3}\begin{bmatrix} 1 \\ 2 \\ -1 \end{bmatrix}" />
          となるので、
          <CenteredEquation equation="\bm{u}_3 = \frac{\bm{v}_3 - (\bm{u}_1 \cdot \bm{v}_3)\bm{u}_1 - (\bm{u}_2 \cdot \bm{v}_3)\bm{u}_2}{\|\bm{v}_3 - (\bm{u}_1 \cdot \bm{v}_3)\bm{u}_1 - (\bm{u}_2 \cdot \bm{v}_3)\bm{u}_2\|} = \frac{1}{\sqrt{3}}\begin{bmatrix} -1 \\ 1 \\ 1 \end{bmatrix}" />
          となります。
        </li>
      </ol>
      <h3>結果</h3>
      <p>以上の手順により、</p>
      <CenteredEquation equation="\bm{u}_1=\frac{1}{\sqrt{2}}\begin{bmatrix} 1 \\ 0 \\ 1 \end{bmatrix},\bm{u}_2=\frac{1}{\sqrt{6}}\begin{bmatrix} 1 \\ 2 \\ -1 \end{bmatrix},\bm{u}_3=\frac{1}{\sqrt{3}}\begin{bmatrix} -1 \\ 1 \\ 1 \end{bmatrix}" />
      <p>となりました。</p>
    </>
  );
}
