/*import { metadata } from "@/app/machine_learning/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";
*/

export default function PageContent() {
  /*const pagename: string = "logisticregression"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;
*/
  return (
    <>
      <h2 className="caption">ロジスティクス回帰とは</h2>
      <p>
        ロジスティック回帰は、線形回帰を用いて2つのクラスに分類（例えば、「合格/不合格」などの2値分類）するための手法です。
        <br />
        線形回帰では、入力データに対して直線を引いて予測を行いますが、ロジスティック回帰では、入力データに対してS字型の曲線を引いて予測を行います。
      </p>

      <p>
        具体的には、ロジスティック回帰は、入力データに対して次のような関数を適用します。
      </p>
    </>
  );
}
