import { metadata } from "@/app/machine_learning/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function PageContent() {
  const pagename: string = "activationfunction"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">活性化関数とは</h2>
      <p>
        活性化関数（Activation
        Function）は、ニューラルネットワークにおいて重要な役割を果たす数学的な関数で、各ニューロンの出力を決定します。
        <br />
        具体的には、活性化関数は入力信号を受け取り、それを非線形な形に変換して次の層に渡す役割を果たします。
      </p>
      <p>
        以下の図のように、活性化関数は入力信号の総和にバイアス項を加えた値を受け取り、その値に対して非線形な変換を行います。
      </p>
      <ImageModal
        imagePath={`${imagePath}/funtionimage.png`}
        altText="活性化関数のイメージ"
      />

      <h3>活性化関数の役割</h3>
      <ol>
        <li>
          <b>非線形性の導入</b>
          <p>
            ニューラルネットワークが線形モデル（単純な入力と出力の線形関係）を超えて、より複雑なデータパターンや非線形な関係を学習することを可能にします。
          </p>
        </li>
        <li>
          <b>出力の範囲制御</b>
          <p>
            一部の活性化関数は、出力を特定の範囲に制限することで、学習を安定化させます（例:シグモイド関数では出力が0から1の間に収まる）。
          </p>
        </li>
        <li>
          <b>表現力の向上</b>
          <p>
            活性化関数が非線形であることにより、深い層のニューラルネットワークが複雑な関数を近似できるようになります。
          </p>
        </li>
      </ol>

      <h2 className="caption">代表的な活性化関数</h2>
      <h3>シグモイド関数 (Sigmoid Function)</h3>
    </>
  );
}
