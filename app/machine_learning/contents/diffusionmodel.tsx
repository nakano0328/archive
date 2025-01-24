import { metadata } from "@/app/machine_learning/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";

export default function PageContent() {
  const pagename: string = "diffusionmodel"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;

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
      <p>
        拡散プロセスは元のデータにノイズを少しづつ追加し、完全なガウスノイズへと変換することが目的です。
        <br />
        図で表すと以下の通りです。
      </p>
      <ImageModal
        imagePath={`${imagePath}/diffusionprocess.png`}
        altText="拡散プロセスのイメージ"
      />
      <h3>拡散プロセスの手順</h3>
      <ol>
        <li>
          <b>データの初期値を設定する。</b>
          <p>
            元のデータ
            <InlineMath math="x_0" />
            を準備する。
          </p>
        </li>
        <li>
          <b>ノイズの段階的な追加をする。</b>
          <p>
            ノイズは時間ステップ <InlineMath math="t" />{" "}
            に応じて、少しずつ強くなります。 <br />
            各時間ステップで、現在のデータ <InlineMath math="x_{t-1}" />{" "}
            に小さなノイズを加えて次の状態 <InlineMath math="x_t" />{" "}
            を作ります。
            <br />
            この過程は以下の確率分布に従います。
          </p>
          <CenteredEquation equation="q(x_t \mid x_{t-1}) = \mathcal{N}(x_t; (1 - \beta_t) x_{t-1}, \beta_t I)" />
          <p>
            ここで、
            <br />
            <InlineMath math="\beta_t" /> : 時間ステップ <InlineMath math="t" />{" "}
            におけるノイズの強さを示すスケジュールパラメータ。
            <br />
            <InlineMath math="1 - \beta_t" /> : 元のデータの情報を保持する割合。
          </p>
        </li>
        <li>
          <b>最終状態</b>
          <InlineMath math="x_T" />
          <p>
            時間 <InlineMath math="T" />
            では、データは完全なランダムノイズ（標準正規分布）になります。
          </p>
        </li>
      </ol>
      <h3>拡散プロセスの数式</h3>
      <p>
        拡散過程を一度に表すと、任意のステップ
        <InlineMath math="t" />
        におけるデータ
        <InlineMath math="x_t" />
        は、元のデータ
        <InlineMath math="x_0" />
        とガウスノイズ
        <InlineMath math="\epsilon" />
        を用いて次のように表現できます。
      </p>
      <CenteredEquation equation="x_t = \sqrt{\bar{\alpha_t}} x_0 + \sqrt{1 - \bar{\alpha_t}} \epsilon" />
      <p>
        ここで。
        <br />
        <InlineMath math="\bar{\alpha_t} = \prod_{s=1}^{t}(1-\beta_s)" />
        : <InlineMath math="t" /> までのノイズ量の累積。
      </p>

      <h2 className="caption">生成プロセス</h2>
      <p>
        生成プロセスは、拡散プロセスで生成されたデータを元に、元のデータを復元することが目的です。
        <br />
        図で表すと以下の通りです。
      </p>
      <ImageModal
        imagePath={`${imagePath}/generalprocess.png`}
        altText="生成プロセスのイメージ"
      />
      <h3>生成プロセスの手順</h3>
      <ol>
        <li>
          <b>データの初期値を設定する。</b>
          <p>
            拡散プロセスで生成されたデータ
            <InlineMath math="x_T" />
            を準備する。
          </p>
        </li>
        <li>
          <b>段階的な復元をする。</b>
          <p>
            学習したモデル
            <InlineMath math="p_\theta" />
            を使用し、ノイズから元のデータを生成します。
            <br />
            各ステップ
            <InlineMath math="t" />
            では、現在の状態
            <InlineMath math="x_t" />
            から一つ前の状態
            <InlineMath math="x_{t-1}" />
            を推定します。
          </p>
          <CenteredEquation equation="p_\theta(x_{t-1} \mid x_t) = \mathcal{N}(x_{t-1} ; \mu_\theta(x_t,t) \sum_\theta(x_t,t))" />
          <p>
            ここで、
            <br />
            <InlineMath math="\mu_\theta(x_t,t)" /> : モデルが学習した平均値。
            <br />
            <InlineMath math="\sum_\theta(x_t,t)" /> :
            共分散（通常は固定値として扱う）。
          </p>
        </li>
        <li>
          <b>復元ステップの詳細</b>
          <p>
            モデルが学習するのは、現在のノイズデータ​
            <InlineMath math="x_t" />
            から次の状態
            <InlineMath math="x_{t-1}" />
            を生成するためのノイズの除去方法です。
            <br />
            実際には、ノイズ
            <InlineMath math="\epsilon_\theta(x_t,t)" />
            を予測し、それを除去することで元のデータを復元します。
          </p>
          <CenteredEquation equation="\epsilon_\theta(x_t,t) = \mu_\theta(x_t,t) - x_{t-1}" />
        </li>
        <li>
          <b>最終状態</b>
          <InlineMath math="x_0" />
          <p>
            最終的に、元のデータ
            <InlineMath math="x_0" />
            を復元します。
          </p>
        </li>
      </ol>

      <h2 className="caption">拡散モデルの利点</h2>
      <p>拡散モデルは、生成モデルとして以下の利点があります。</p>
      <ul>
        <li>
          <b>ノイズの除去</b>
          <p>
            ノイズを段階的に除去することで、元のデータを復元することができます。
          </p>
        </li>
        <li>
          <b>ノイズの制御</b>
          <p>ノイズの強さを時間ステップごとに調整することができます。</p>
        </li>
        <li>
          <b>高品質な生成</b>
          <p>
            拡散プロセスで生成されたデータは、高品質な生成画像を作成することができます。
          </p>
        </li>
      </ul>
    </>
  );
}
