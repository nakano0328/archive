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
      <h2 className="caption">ベクトルのノルム</h2>
      <p>
        ベクトルのノルムは、ベクトルの大きさを表す量です。<br />
        ただし、ユークリッド空間（一般的な2次元や3次元の空間）の場合、ノルムは大きさの定義と一致することが多いため、同じ意味として扱われる場合もあります。
      </p>

    </>
  );
}
