import { metadata } from "@/app/linear_algebra/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function PageContent() {
  const pagename: string = "eigen_property"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">固有値の性質</h2>
      <p>固有値と固有ベクトルの求め方は以下のページをご覧ください。</p>

      <CustomLink
        href="/linear_algebra/eigen_solve"
        imageUrl={`${basePath}/linear_algebra/eigen_solve/thumb.png`}
        altText="固有値と固有ベクトルの求め方ページのサムネ"
        siteName={metadata.eigen_solve.title}
        description={metadata.eigen_solve.description}
      />

      <p>n次正方行列 A の固有値について、以下の性質が成り立ちます。</p>
      <ol>
        <li>
          固有値の総和は、行列の対角成分の和（トレース）に等しいです
          <CenteredEquation equation="\sum_{i=1}^n \lambda_i = \text{tr}(A)" />
        </li>
        <li>
          固有値の積は、行列式に等しいです
          <CenteredEquation equation="\prod_{i=1}^n \lambda_i = \det(A)" />
        </li>
        <li>
          対称行列の固有値はすべて実数であり、直交行列によって対角化可能です
        </li>
        <li>実対称行列の異なる固有値に対応する固有ベクトルは直交します</li>
        <li>
          三角行列（上三角行列または下三角行列）の固有値は、その対角成分となります
        </li>
        <li>
          行列 A とその転置行列 A<sup>T</sup> は同じ固有値を持ちます
        </li>
      </ol>
      <p>
        これらの性質は、線形代数や量子力学などの分野で重要な役割を果たします。
      </p>

      <h2 className="caption">固有ベクトルの性質</h2>
      <p>固有ベクトルについても、以下の性質が成り立ちます。</p>
      <ol>
        <li>異なる固有値に対応する固有ベクトルは直交します</li>
        <li>固有ベクトルはゼロベクトルではないです</li>
        <li>固有ベクトルは一次独立です</li>
      </ol>
      <p>これらの性質は、固有値問題を解く際に重要な役割を果たします。</p>

      <h2 className="caption">基底変換</h2>
      <p>
        固有ベクトルを基底とする座標変換を行うことで、行列の対角化が可能です。この基底変換によって、行列の計算や解析が容易になります。
      </p>
      <p>以下に例を示します。</p>
      <p>
        線形変換行列
        <InlineMath math="\mathbf{A} = \begin{bmatrix}2 & -1 \\ -1 & 2 \end{bmatrix}" />
        &nbsp;を用いて任意のベクトル
        <InlineMath math="\mathbf{x} =\begin{bmatrix}2 \\ 1 \end{bmatrix}" />
        を線形変換することを考えます。
        <br />
        まずこの行列を成す、2つの列ベクトルを基底とする線形空間を考えます。この行列より、最初の列ベクトルは
        <InlineMath math="\mathbf{x} =\begin{bmatrix}2 \\ -1 \end{bmatrix}" />
        となります。これは以下の図の赤いベクトルです。
        <br />
        2つ目の列ベクトルは
        <InlineMath math="\mathbf{x} =\begin{bmatrix}-1 \\ 2 \end{bmatrix}" />
        となります。これは以下の図の青いベクトルです。
        <br />
        この様子を図示すると、以下のようになります。
      </p>

      <ImageModal
        imagePath={`${imagePath}/basis_transform.png`}
        altText="基底の行列の例"
      />
      <br />
      <br />

      <CustomLink
        href={`${notePath}/basis_transform.ipynb`}
        imageUrl={`${imagePath}/basis_transform.png`}
        altText="行列の基底の図"
        siteName="行列の基底の図"
        description="行列の基底の図の表示を行っているコードを示しています。"
        target="_blank"
      />

      <p>
        この行列の固有値と固有ベクトルを求めます。固有値は
        <InlineMath math="\lambda = 3, 1" />
        であり、固有ベクトルは
        <InlineMath math="\mathbf{v}_1 = \begin{bmatrix}1 \\ 1 \end{bmatrix}" />
        、
        <InlineMath math="\mathbf{v}_2 = \begin{bmatrix}-1 \\ 1 \end{bmatrix}" />
        です。
        <br />
        固有ベクトルを図示すると以下のようになります。
      </p>

      <ImageModal
        imagePath={`${imagePath}/eigen_vector.png`}
        altText="固有ベクトルの例"
      />
      <br />
      <br />

      <CustomLink
        href={`${notePath}/eigen_vector.ipynb`}
        imageUrl={`${imagePath}/eigen_vector.png`}
        altText="固有ベクトルの図"
        siteName="固有ベクトルの図"
        description="固有ベクトルの図の表示を行っているコードを示しています。"
        target="_blank"
      />

      <p>これにより以下のような座標変換が行われます。</p>

      <ImageModal
        imagePath={`${imagePath}/basis_change.png`}
        altText="座標変換の例"
      />
      <br />
      <br />

      <CustomLink
        href={`${notePath}/basis_change.ipynb`}
        imageUrl={`${imagePath}/basis_change.png`}
        altText="座標変換の図"
        siteName="座標変換の図"
        description="座標変換の図の表示を行っているコードを示しています。"
        target="_blank"
      />

      <p>
        固有ベクトルを基底とする座標変換を行うことで、行列の対角化が可能です。この基底変換によって、行列の計算や解析が容易になります。
        <br />
        <br />
        対角化については以下のページにまとめています。
      </p>

      <CustomLink
        href="/linear_algebra/diagonalization"
        imageUrl={`${basePath}/linear_algebra/diagonalization/thumb.png`}
        altText="対角化ページのサムネ"
        siteName={metadata.diagonalization.title}
        description={metadata.diagonalization.description}
      />
    </>
  );
}
