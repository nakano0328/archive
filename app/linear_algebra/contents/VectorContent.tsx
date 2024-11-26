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

      <h2 className="caption">ベクトルの演算</h2>
      <p>以下にベクトルの演算式を記します。</p>
      <h3>スカラー倍</h3>

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
        &nbsp;と青の&nbsp;
        <InlineMath math="\bm{b}" />
        &nbsp;の引き算の結果が緑の&nbsp;
        <InlineMath math="\bm{c}" />
        &nbsp;となります。
        <br />
        このように、ベクトル同士の引き算では、ベクトルの先端同士をつなげて新しいベクトルを作ることができます。
      </p>

      <h3>スカラー倍</h3>
      <p>
        例:{" "}
        <b>
          2v<sub>1</sub>→
        </b>
        ,{" "}
        <b>
          12v<sub>1</sub>→
        </b>
        ,{" "}
        <b>
          −v<sub>1</sub>→
        </b>
      </p>
      <p>
        <i>スカラー倍 (Scalar Multiplication)</i>{" "}
        はベクトルの長さや向きを変える。
      </p>

      <h2>位置ベクトル</h2>
      <p>
        座標平面上の位置ベクトルは始点が原点 <b>(0,0)</b> である。
      </p>
      <p>
        例: 点 <b>A(2,2)</b>、点 <b>B(6,4)</b> の位置ベクトル <b>AB−→−</b> は、
        <b>A</b> から <b>B</b> へのベクトル。
      </p>

      <h2>座標変換</h2>
      <ul>
        <li>
          <b>A:</b> <b>(x→−2, y→−2) → (0,0)</b>
        </li>
        <li>
          <b>B:</b> <b>(x→−2, y→−2) → (4,2)</b>
        </li>
      </ul>

      <h2>定理</h2>
      <p>
        点{" "}
        <b>
          P<sub>1</sub>=(x<sub>1</sub>, y<sub>1</sub>)
        </b>
        、点{" "}
        <b>
          P<sub>2</sub>=(x<sub>2</sub>, y<sub>2</sub>)
        </b>{" "}
        の場合：
      </p>
      <p>
        <b>
          P<sub>1</sub>P<sub>2</sub>−→−−=(x<sub>2</sub>−x<sub>1</sub>, y
          <sub>2</sub>−y<sub>1</sub>)
        </b>
      </p>

      <h2>ベクトルの演算と性質</h2>
      <h3>加法</h3>
      <p>
        ベクトル{" "}
        <b>
          v<sub>1</sub>→=(a,b)
        </b>{" "}
        と{" "}
        <b>
          v<sub>2</sub>→=(c,d)
        </b>{" "}
        の場合：
      </p>
      <p>
        <b>
          v<sub>1</sub>→+v<sub>2</sub>→=(a+c, b+d)
        </b>
      </p>

      <h3>引き算</h3>
      <p>
        <b>
          v<sub>1</sub>→−v<sub>2</sub>→=(a<sub>1</sub>, b<sub>1</sub>)−(a
          <sub>2</sub>, b<sub>2</sub>)=(a<sub>1</sub>−a<sub>2</sub>, b
          <sub>1</sub>−b<sub>2</sub>)
        </b>
      </p>

      <h3>スカラー倍</h3>
      <p>
        <b>nv→=(na, nb)</b>
      </p>

      <h3>ノルムと内積</h3>
      <p>
        <b>ノルム (ベクトルの長さ)</b>
      </p>
      <p>
        ベクトル{" "}
        <b>
          v→=(v<sub>1</sub>,v<sub>2</sub>)
        </b>{" "}
        の場合：
      </p>
      <p>
        <b>
          ∥v→∥=√(v<sub>1</sub>
          <sup>2</sup>+v<sub>2</sub>
          <sup>2</sup>)
        </b>
      </p>
      <p>
        一般のベクトル{" "}
        <b>
          v→=(v<sub>1</sub>,v<sub>2</sub>,…,v<sub>n</sub>)
        </b>{" "}
        の場合：
      </p>
      <p>
        <b>
          ∥v→∥=√(∑<sub>k=1</sub>
          <sup>n</sup>v<sub>k</sub>
          <sup>2</sup>)
        </b>
      </p>

      <h3>ノルムの性質</h3>
      <ul>
        <li>
          <b>∥v→∥≥0</b>
        </li>
        <li>
          <b>∥v→∥=0⟺v→=0→</b>
        </li>
        <li>
          <b>∥nv→∥=|n|∥v→∥</b> （<i>n</i> はスカラー）
        </li>
      </ul>

      <h3>単位ベクトル (Unit Vector)</h3>
      <p>
        長さが1のベクトル：<b>u→=v→/∥v→∥</b>
      </p>
      <p>
        例：2次元では <b>(1,0)</b>, <b>(0,1)</b>、3次元では <b>(1,0,0)</b>,{" "}
        <b>(0,1,0)</b>, <b>(0,0,1)</b>
      </p>
      <p>
        標準単位ベクトル：
        <b>
          e<sub>1</sub>→, e<sub>2</sub>→, e<sub>3</sub>→
        </b>
      </p>

      <h3>距離 (Distance)</h3>
      <p>
        点{" "}
        <b>
          A=(x<sub>1</sub>, y<sub>1</sub>)
        </b>{" "}
        と点{" "}
        <b>
          B=(x<sub>2</sub>, y<sub>2</sub>)
        </b>{" "}
        の間の距離 <b>d</b> は：
      </p>
      <p>
        <b>
          d=√((x<sub>2</sub>−x<sub>1</sub>)<sup>2</sup> + (y<sub>2</sub>−y
          <sub>1</sub>)<sup>2</sup>)
        </b>
      </p>
    </>
  );
}
