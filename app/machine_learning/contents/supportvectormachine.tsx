import { metadata } from "@/app/machine_learning/metadata";
import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";
import ImageModal from "@/app/components/ImageModal";
import CustomLink from "@/app/components/CustomLink";

export default function PageContent() {
  const pagename: string = "supportvectormachine"; //ここを変更

  const metaData = metadata[pagename];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const imagePath = `${basePath}/${metaData.topic}/${pagename}`;
  const notePath = `https://colab.research.google.com/github/jeonglabo/nextjs/blob/main/notebook/${metaData.topic}/${pagename}`;

  return (
    <>
      <h2 className="caption">ハイパープレーンの定義</h2>
      <p>
        ハイパープレーンは、データを分けるための「決定境界」となる部分空間です。
      </p>
      <p>
        n次元空間におけるハイパープレーンは、n次元空間を2つの領域に分割するn-1次元の空間です。
        <br />
        3次元空間ではハイパープレーンは「平面」、2次元空間では「直線」として表されます。
        <br />
        n次元空間におけるハイパープレーンの方程式は次のように表されます。
      </p>
      <CenteredEquation equation="\vec{w} \cdot \vec{x} + b = 0" />
      <ul>
        <li>
          <InlineMath math="\vec{w}" />
          ：法線ベクトル（ハイパープレーンの向きを決める）
        </li>
        <li>
          <InlineMath math="\vec{x}" />
          ：空間内の任意の点
        </li>
        <li>
          <InlineMath math="b" />
          ：バイアス項（ハイパープレーンの位置を調整）
        </li>
      </ul>

      <h2 className="caption">最大マージン分類器</h2>
      <p>SVMの目的は、以下のようなハイパープレーンを求めることです。</p>
      <ul>
        <li>
          データポイントを最も広いマージンで分割するハイパープレーンを見つける。
        </li>
        <li>
          サポートベクターと呼ばれる、ハイパープレーンに最も近いデータポイントを基準に分類を行う。
        </li>
      </ul>
      <p>
        マージン：ハイパープレーンとサポートベクターの距離。
        <br />
        目標：マージンを最大化し、汎化性能（新しいデータに対する適応力）を向上させる。
      </p>
      <p>以下にSVMの基本方針を示します。</p>
      <CenteredEquation equation="y_i(\vec{w} \cdot \vec{x}_i + b) \geq 1, \forall i" />
      <p>
        ここで、
        <InlineMath math="y_i" />
        はデータポイントのラベル（
        <InlineMath math="+1" /> または <InlineMath math="-1" />
        ）。
      </p>

      <h2 className="caption">数学的定式化</h2>
      <p>SVMは、次の最適化問題として定式化されます。</p>
      <h3>目的関数（マージン最大化）：</h3>
      <CenteredEquation equation="\min \frac{1}{2}\|\vec{w}\|^2" />
      <h3>制約条件（正確な分類）：</h3>
      <CenteredEquation equation="y_i(\vec{w} \cdot \vec{x}_i + b) \geq 1" />
      <p>
        この問題は、ラグランジュ乗数法を用いて効率的に解かれます。最終的に、ハイパープレーンは次の式で表されます。
      </p>
      <CenteredEquation equation="\vec{w} = \sum_i \alpha_i y_i \vec{x}_i" />
      <p>
        ここで、
        <InlineMath math="\alpha_i" />
        はラグランジュ乗数です。
      </p>

      <h2 className="caption">4. カーネルトリック (Kernel Trick)</h2>
      <p>
        SVMは、線形分離が不可能なデータに対しても強力です。この場合、カーネルトリックを用いてデータを高次元空間にマッピングし、線形分離を可能にします。
      </p>
      <p>代表的なカーネル関数</p>
      <ul>
        <li>
          <b>線形カーネル</b>
          <p>
            <InlineMath math="K(\vec{x}, \vec{x}') = \vec{x} \cdot \vec{x}'" />
          </p>
        </li>
        <li>
          <b>多項式カーネル</b>
          <p>
            <InlineMath math="K(\vec{x}, \vec{x}') = (\vec{x} \cdot \vec{x}' + c)^d" />
          </p>
        </li>
        <li>
          <b>ガウシアンRBFカーネル</b>
          <p>
            <InlineMath math="K(\vec{x}, \vec{x}') = \exp(-\gamma\|\vec{x} - \vec{x}'\|^2)" />
          </p>
        </li>
      </ul>
      <p>
        これらのカーネルを利用することで、データを高次元に変換し、複雑な境界線を生成します。
      </p>

      <h2 className="caption">5. SVMの特徴</h2>
      <h3>メリット</h3>
      <ul>
        <li>高次元データの処理に適している。</li>
        <li>カーネルにより非線形分類が可能。</li>
        <li>少数のデータでも高い精度を発揮。</li>
      </ul>
      <h3>デメリット</h3>
      <ul>
        <li>計算コストが高いため、大規模データには不向き。</li>
        <li>カーネル選択やハイパーパラメータ（C, γ）の調整が必要。</li>
      </ul>

      <h2 className="caption">使用例</h2>
      <p>
        使用例としてIrisデータセットを用いた分類を行うPythonコードを示します。
        <br />
        このデータセットは、3種類の花（Iris-setosa, Iris-versicolor,
        Iris-virginica）の特徴（花びらやがく片の長さと幅）を基に分類するタスクです。
      </p>

      <p>以下のnotebookで学習を行っています。</p>

      <CustomLink
        href={`${notePath}/iris.ipynb`}
        imageUrl={`${imagePath}/iris.png`}
        altText="SVMによるIrisデータセットの分類の結果"
        siteName="SVMによるIrisデータセットの分類"
        description="SVMによるIrisデータセットの分類を行っているコードを示しています。"
        target="_blank"
      />
      <br />

      <p>結果としてSVMを用いて、花の種類を分類することができました。</p>
      <ImageModal
        imagePath={`${imagePath}/result1.png`}
        altText="SVMの結果の表"
      />
      <ImageModal imagePath={`${imagePath}/iris.png`} altText="SVMの結果の図" />

      <p>結果の説明をします。</p>
      <p>
        <b>表の説明</b>
      </p>

      <ul>
        <li>
          <b>Accuracy（正解率）</b>
          <p>
            モデルの全体的な正解率は 80%
            です。これはテストデータ全体のうち、80%のデータが正しく分類されたことを意味します。
          </p>
        </li>
        <li>
          <b>Precision（適合率）</b>
          <p>そのクラスに分類されたデータのうち、正しく分類された割合です。</p>
        </li>
        <li>
          <b>Recall（再現率）</b>
          <p>そのクラスのデータのうち、正しく分類された割合です。</p>
        </li>
        <li>
          <b>F1-score（F1値）</b>
          <p>PrecisionとRecallのバランスを表します。</p>
        </li>
        <li>
          <b>Support</b>
          <p>そのクラスに属するデータの数です。</p>
        </li>
      </ul>
      <p>
        <b>図の説明</b>
      </p>
      <p>具体的には以下のようなことを言えます。</p>
      <ul>
        <li>
          <b>クラス0(紫色)</b>
          <p>
            すべての指標（precision, recall,
            f1-score）が1.00で、完璧な分類が行われています（support = 19）。
          </p>
        </li>
        <li>
          <b>クラス1(黄色)</b>
          <p>
            再現率が0.54と低めで、誤分類が多いことが示されています（support =
            13）。
          </p>
        </li>
        <li>
          <b>クラス2(緑色)</b>
          <p>
            適合率が0.62、再現率が0.77で、まずまずの分類が行われています（support
            = 13）。
          </p>
        </li>
      </ul>
    </>
  );
}
