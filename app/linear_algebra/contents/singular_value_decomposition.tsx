import { metadata } from "@/app/linear_algebra/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function pageContent() {
  const pagename: string = "singular_value_decomposition"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">特異値分解 とは？</h2>
      <p>
        特異値分解 (Singular Value Decomposition)
        は、行列を「回転」「スケーリング（伸縮）」「もう一度回転」という3つのステップに分解する数学的な手法です。
      </p>
      <p>
        これを使うと、複雑な行列の性質がシンプルに理解できるようになります。たとえば、画像の圧縮やデータ分析など、多くの分野で活用されています。
      </p>

      <h2 className="caption">特異値分解の分解式</h2>
      <p>
        特異値分解を使うと、行列 <InlineMath math="\mathbf{A}" />{" "}
        を次のように分解できます。
      </p>
      <CenteredEquation equation="\mathbf{A} = \mathbf{U} \mathbf{\Sigma} \mathbf{V}^T" />
      <p>この式は以下の3つの要素から構成されています。</p>
      <ul>
        <li>
          <b>
            左特異ベクトル (<InlineMath math="\mathbf{U}" />)
          </b>
          : 行列がどの方向に作用するかを示すベクトル
        </li>
        <li>
          <b>
            特異値行列 (<InlineMath math="\mathbf{\Sigma}" />)
          </b>
          : 行列がどの程度スケーリング（拡大・縮小）するかを示す数値
        </li>
        <li>
          <b>
            右特異ベクトル (<InlineMath math="\mathbf{V}" />)
          </b>
          : 行列がデータをどの方向に変換するかを示すベクトル
        </li>
      </ul>

      <h2 className="caption">特異値分解のイメージ</h2>
      <p>特異値分解は、次の3つのステップを通して行列を変換します。</p>
      <ol>
        <li>
          <b>回転:</b> データを右特異ベクトル (
          <InlineMath math="\mathbf{V}" />) に沿って整列させる
        </li>
        <li>
          <b>スケーリング:</b> 特異値 (<InlineMath math="\mathbf{\Sigma}" />)
          を使ってデータを伸縮する
        </li>
        <li>
          <b>再び回転:</b> 左特異ベクトル (<InlineMath math="\mathbf{U}" />)
          に沿って新しい位置に移動する
        </li>
      </ol>
      <p>このプロセスを図解すると次のようになります。</p>
      <ImageModal
        imagePath={`${imagePath}/svd_visualization.png`}
        altText="SVDの視覚化"
      />
      <CustomLink
        href={`${notePath}/svd_visualization.ipynb`}
        imageUrl={`${imagePath}/svd_visualization.png`}
        altText="特異値分解を表したグラフ"
        siteName="特異値分解の表示"
        description="特異値分解の表示を行っているコードを示しています。"
        target="_blank"
      />

      <ul>
        <li>
          <b>Original:</b> 青い点は元のデータ、青い円は3点を通る外枠を示します。
        </li>
        <li>
          <b>Rotated:</b> オレンジの点は右特異ベクトル <code>V^T</code>{" "}
          による回転後のデータです。
        </li>
        <li>
          <b>Scaled:</b> 緑の点は特異値 <code>Σ</code>{" "}
          によるスケーリング後のデータで、緑の円がその外枠です。
        </li>
        <li>
          <b>Final:</b> 赤い点は左特異ベクトル <code>U</code>{" "}
          による再回転後のデータを示し、赤い円が最終範囲です。
        </li>
      </ul>

      <h2 className="caption">具体例: 簡単な行列の特異値分解</h2>
      <p>
        実際に簡単な行列 <InlineMath math="\mathbf{A}" /> を分解してみましょう。
      </p>
      <CenteredEquation
        equation="
        \mathbf{A} = \begin{bmatrix} 2 & 2 \end{bmatrix} =
        \begin{bmatrix} \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} \end{bmatrix}
        \begin{bmatrix} 3 & 0 \\ 0 & 1 \end{bmatrix}
        \begin{bmatrix} \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} \end{bmatrix}"
      />

      <h2 className="caption">応用: 画像圧縮と特異値分解</h2>
      <p>
        特異値分解は画像の圧縮にも利用されます。たとえば、大きな行列（画像データ）を以下のように分解し、重要な情報を保持しながらデータ量を減らせます。
      </p>
      <CenteredEquation equation="\mathbf{A} \approx \sigma_1 \mathbf{u}_1 \mathbf{v}_1^T + \sigma_2 \mathbf{u}_2 \mathbf{v}_2^T + \ldots" />

      <p>
        これにより、画像の品質を大きく損なわずにデータを圧縮できます。特にデータ分析や機械学習の前処理でよく使われます。
      </p>
    </>
  );
}
