import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function pageContent() {
  const pagename: string = "vector2"; //ここを変更

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/linear_algebra/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/linear_algebra/${pagename}`;

  return (
    <>
      <h2 className="caption">ノルム</h2>
      <p>
        ベクトルのノルムは、ベクトルの大きさを表す量です。
        <br />
        ただし、ユークリッド空間（一般的な2次元や3次元の空間）の場合、ノルムは大きさの定義と一致することが多いため、同じ意味として扱われる場合もあります。
      </p>

      <p>
        任意のベクトル&nbsp;
        <InlineMath math="\bm{a}=(a_1,a_2,...,a_n)" />
        &nbsp;のノルムは次式のように定義されます。
      </p>

      <CenteredEquation
        equation="\begin{align*}
        \|\bm{a}\| = \sqrt{a_1^2 + a_2^2 + ... + a_n^2}
        \end{align*}"
      />

      <p>
        また、任意のベクトルが2次元の場合(&nbsp;
        <InlineMath math="\bm{a}=(a_1,a_2)" />
        &nbsp;)、ノルムは次のように表されます。
      </p>

      <CenteredEquation
        equation="\begin{align*}
        \|\bm{a}\| = \sqrt{a_1^2 + a_2^2}
        \end{align*}"
      />

      <p>ノルムの性質として以下のことがあげられます。</p>
      <ul>
        <li>
          ベクトルのノルムは常に0以上の値を取ります。
          <p>
            式で表すと、以下の通りです。
            <br />
            &nbsp;
            <InlineMath math="\|\overrightarrow{v}\| \geq 0" />
            &nbsp;
          </p>
        </li>
        <li>
          ベクトルのノルムが0の場合、そのベクトルは0ベクトルと呼ばれます。
          <p>
            式で表すと、以下の通りです。
            <br />
            &nbsp;
            <InlineMath math="\|\overrightarrow{v}\| = 0 \iff \overrightarrow{v} = \overrightarrow{0}" />
          </p>
        </li>
        <li>
          ベクトルのスカラー倍のノルムは、スカラーの絶対値とベクトルのノルムの積と等しいです。
          <p>
            式で表すと、以下の通りです。ここで、cはスカラーです。
            <br />
            &nbsp;
            <InlineMath math="\|c\overrightarrow{v}\| = |c|\|\overrightarrow{v}\|" />
          </p>
        </li>
      </ul>
    </>
  );
}
