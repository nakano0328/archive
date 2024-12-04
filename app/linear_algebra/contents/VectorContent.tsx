//import { metadata } from "@/app/linear_algebra/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function pageContent() {
  const pagename: string = "vector"; //ここを変更

  //const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/linear_algebra/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/linear_algebra/${pagename}`;

  return (
    <>
      <h2 className="caption">スカラーとベクトル</h2>
      <p>
        スカラーとベクトルは全く違うものになります。それぞれの定義をまとめておきます。
      </p>
      <ul>
        <li>
          <b>スカラー</b>
        </li>
        <p>
          大きさのみの量のことです。今まで扱ってきた普通の数値と同じような役割を持ちます。（厳密には少し違いますが）
          <br />
          例：温度、身長など
        </p>
        <li>
          <b>ベクトル</b>
        </li>
        <p>
          大きさと向きを持つ量のことです。簡単に言えば矢印の長さと向きのことです。
          <br />
          例：速度、力など
        </p>
      </ul>

      <h2 className="caption">ベクトルの表し方</h2>
      <p>ベクトルの表し方は複数あります。</p>
      <ol>
        <li>
          点Aから点Bに向かうベクトルは&nbsp;
          <InlineMath math="\overrightarrow{AB}" />
          &nbsp;と表されます。また、原点から点Aに向かうベクトルは&nbsp;
          <InlineMath math="\overrightarrow{OA}" />
          &nbsp;と表されます。
        </li>
        <li>
          aベクトルは、上に矢印をつける方法&nbsp;
          <InlineMath math="\overrightarrow{a}" />
          &nbsp;、太文字にする方法&nbsp;
          <InlineMath math="\bm{a}" />
          &nbsp;、黒板太字にする方法&nbsp; 𝕒 &nbsp;が存在します。
          <br />
          テキストで書くときは太文字を、実際に手書きでノートをとるときは矢印をつけるか黒板太字にすると著者は考えています。
        </li>
        <li>
          特別に、0ベクトルは&nbsp;
          <InlineMath math="\overrightarrow{0}" />
          &nbsp;と表される。
        </li>
      </ol>

      <p>
        ここで、&nbsp;
        <InlineMath math="\overrightarrow{AB}" />
        &nbsp;の表し方について説明します。
        <br />
        点Aと点Bは以下のような座標を持っているとします。
        <br />
        <InlineMath math="点A: (a_x, a_y)" />
        <br />
        <InlineMath math="点B: (b_x, b_y)" />
        <br />
        点Aから点Bに向かうベクトルは、点Aから点Bに向かう矢印として表されます。
        <br />
        このベクトルの成分は、点Bの座標から点Aの座標を引いたものになります。式で表すと以下の通りです。
        <br />
      </p>

      <CenteredEquation equation="\overrightarrow{AB} = (b_x - a_x, b_y - a_y)" />

      <h2 className="caption">ベクトルの演算</h2>
      <p>以下にベクトルの演算式を記します。</p>
      <h3>スカラー倍</h3>
      <p>
        ベクトルをスカラー倍すると、ベクトルの大きさが変わります。
        <br />
        例えば2倍すると、ベクトルの大きさが2倍になります。
        <br />
        以下は、赤いベクトル&nbsp;
        <InlineMath math="\overrightarrow{v_a}" />
        &nbsp;と2倍された青いベクトル&nbsp;
        <InlineMath math="\overrightarrow{2v_a}" />
        &nbsp; を表します。
        <br />
        また、マイナス倍されると向きが反対になります。その様子を表したものが以下の図の緑のベクトルになります。
      </p>

      <ImageModal
        imagePath={`${imagePath}/scalar.png`}
        altText="ベクトルv_aのスカラー倍をしたものを表しています。"
      />
      <CustomLink
        href={`${notePath}/scalar.ipynb`}
        imageUrl={`${imagePath}/scalar.png`}
        altText="ベクトルv_aのスカラー倍をしたものを表したグラフ"
        siteName="ベクトルのスカラー倍の表示"
        description="ベクトルのスカラー倍の表示を行っているコードを示しています。"
        target="_blank"
      />

      <br />
      <h3>足し算</h3>
      <CenteredEquation
        equation="\begin{align*}
        \overrightarrow{AB} + \overrightarrow{BC} &= \overrightarrow{AC} \\
        \bm{a}+\bm{b} = (a_x,a_y)+(b_x,b_y) &= (a_x+b_x,a_y+b_y)
        \end{align*}"
      />
      <p>
        AからBに向かうベクトル&nbsp;
        <InlineMath math="\overrightarrow{AB}" />
        &nbsp;とBからCに向かうベクトル&nbsp;
        <InlineMath math="\overrightarrow{BC}" />
        &nbsp;を足すことで、AからCに向かうベクトル&nbsp;
        <InlineMath math="\overrightarrow{AC}" />
        &nbsp;を表します。
      </p>

      <p>
        足し算を図で表すと以下のようになります。赤のベクトル&nbsp;
        <InlineMath math="\bm{a}" />
        &nbsp;と青の&nbsp;
        <InlineMath math="\bm{b}" />
        &nbsp;の足し算の結果が緑の&nbsp;
        <InlineMath math="\bm{c}" />
        &nbsp;となります。
        <br />
        このように、ベクトル同士の足し算では、1つ目のベクトルの先端からもう1つのベクトルをつなげて新しいベクトルを作ることができます。
      </p>
      <ImageModal
        imagePath={`${imagePath}/plus.png`}
        altText="ベクトルaとベクトルbの足し算を表したグラフ"
      />
      <CustomLink
        href={`${notePath}/plus.ipynb`}
        imageUrl={`${imagePath}/plus.png`}
        altText="ベクトルaとベクトルbの足し算を表したグラフ"
        siteName="ベクトルの足し算の表示"
        description="ベクトルの足し算の表示を行っているコードを示しています。"
        target="_blank"
      />

      <p>
        また、ベクトルの足し算では交換法則が成り立ちます。足す順番を変えてもベクトルcは同じになります。
        <br />
        これは成分同士の足し算のほうを考えればわかりやすいです。
      </p>

      <br />
      <h3>引き算</h3>
      <CenteredEquation
        equation="\begin{align*}
        \overrightarrow{OA} - \overrightarrow{OB} &= \overrightarrow{BA} \\
        \bm{a}-\bm{b} = (a_x,a_y)+(b_x,b_y) &= (a_x-b_x,a_y-b_y)
        \end{align*}"
      />
      <p>
        引き算を図で表すと以下のようになります。赤のベクトル&nbsp;
        <InlineMath math="\bm{a}" />
        &nbsp;と青のベクトル&nbsp;
        <InlineMath math="\bm{b}" />
        &nbsp;の引き算の結果が緑のベクトル&nbsp;
        <InlineMath math="\bm{c}" />
        &nbsp;となります。
        <br />
        このように、ベクトル同士の引き算では、ベクトルの先端同士をつなげて新しいベクトルを作ることができます。
      </p>

      <ImageModal
        imagePath={`${imagePath}/minus.png`}
        altText="ベクトルaとベクトルbの引き算を表したグラフ"
      />
      <CustomLink
        href={`${notePath}/minus.ipynb`}
        imageUrl={`${imagePath}/minus.png`}
        altText="ベクトルaとベクトルbの引き算を表したグラフ"
        siteName="ベクトルの引き算の表示"
        description="ベクトルの引き算の表示を行っているコードを示しています。"
        target="_blank"
      />
      <br />
    </>
  );
}
