import { metadata } from "@/app/machine_learning/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function PageContent() {
  const pagename: string = "diffusionmodel"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">拡散モデルとは</h2>
      <p>
        拡散モデル（Diffusion Models）は、生成モデル（Generative
        Model）の一種で、画像や音声などのデータを生成するために使用されます。
        <br />
        近年、特に画像生成タスクにおいて注目されており、DALL·E 2やStable
        Diffusionといったシステムで採用されています。
      </p>
      <p>
        拡散モデルは2つのプロセスによってデータを生成します。拡散プロセスと生成プロセスです。
        <br />
        それぞれについて詳しく説明します。
      </p>

      <h2 className="caption">拡散プロセス</h2>
      <p>拡散モデルは、以下の拡散プロセスによってデータを生成します。</p>

      <ol>
        <li>データの初期値を設定する</li>
        <li>ノイズを加える</li>
        <li>データを更新する</li>
        <li>データを生成する</li>
      </ol>

      <p>図で表すと以下のようになります。</p>

      <ImageModal
        imagePath={`${imagePath}/diffusionprocess.png`}
        altText="拡散プロセスのイメージ"
      />

      <h3>拡散プロセスの数式</h3>
      <CenteredEquation equation="x_{t+1} = x_t + \epsilon \sqrt{dt} \nabla \log p(x_t)" />
      <p>
        ここで、
        <InlineMath math="x_t" />
        は時刻
        <InlineMath math="t" />
        のデータ、
        <InlineMath math="\epsilon" />
        はノイズの強度、
        <InlineMath math="dt" />
        は時間の刻み幅、
        <InlineMath math="\nabla \log p(x_t)" />
        はデータの勾配を表します。
      </p>

      <h2 className="caption">生成プロセス</h2>
    </>
  );
}
