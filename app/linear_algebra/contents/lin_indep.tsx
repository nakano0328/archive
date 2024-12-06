import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function pageContent() {
  const pagename: string = "basis"; //ここを変更

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/linear_algebra/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/linear_algebra/${pagename}`;

  return (
    <>
      <h2 className="caption">線形独立の定義</h2>
      <p>
        線形独立の定義を以下に示します。
      </p>
      <div className="container">
        <p>
          ベクトル&nbsp;
          <InlineMath math="\bm{v}_1,\bm{v}_2,...,\bm{v}_n" />
          &nbsp;が線形独立であるとは、次の式が成り立つことです。
          <br />
          &nbsp;
          <InlineMath math="c_1\bm{v}_1 + c_2\bm{v}_2 + \cdots + c_n\bm{v}_n = \bm{0}" />
          &nbsp;

        </p>
      </div>

    </>
  );
}
