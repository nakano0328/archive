import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";

export default function pageContent() {
  return (
    <>
      <h2 className="caption">定義</h2>
      <p>
        2x2の行列の固有値分解について説明します。行列{" "}
        <InlineMath math="\mathbf{A}" />
        に固有の値と固有のベクトルがあるとき、次のように分けることができます。
      </p>
      <CenteredEquation equation="\mathbf{A} \mathbf{x}_1 = \lambda_1 \mathbf{x}_1, \quad \mathbf{A} \mathbf{x}_2 = \lambda_2 \mathbf{x}_2" />
      <p>
        行列 <InlineMath math="\mathbf{A}" /> を次のように分けます。
      </p>
      <CenteredEquation equation="\mathbf{A} [\mathbf{x}_1, \mathbf{x}_2] = [\mathbf{x}_1, \mathbf{x}_2] \begin{bmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{bmatrix}" />
      <p>
        ここで、
        <InlineMath math="\mathbf{P} = [\mathbf{x}_1, \mathbf{x}_2]" />{" "}
        は固有のベクトルを並べた行列で、
        <InlineMath math="\mathbf{\Lambda} = \begin{bmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{bmatrix}" />{" "}
        は固有の値を並べた行列です。
        <br />
        これを使うと次のように書けます。
      </p>

      <CenteredEquation equation="\mathbf{A} = \mathbf{P} \mathbf{\Lambda} \mathbf{P}^{-1}" />

      <p>
        これが固有値分解の式です。
        <br />
        これは、行列が対角化できて、固有のベクトルが独立しているときに使います。固有値分解は行列の特徴を調べるのに便利な方法です。
      </p>

      <h2 className="caption">性質</h2>
      <p>固有値分解には次の性質があります。</p>
      <ol>
        <li>
          行列のべき乗
          <InlineMath math="\mathbf{A}^k = \mathbf{P} \mathbf{\Lambda}^k \mathbf{P}^{-1}" />
          <p>以下のようにするとこの式が導かれます。</p>
          <CenteredEquation equation="\mathbf{A}^k = \mathbf{P} \mathbf{\Lambda} \mathbf{P}^{-1} \mathbf{P} \mathbf{\Lambda} \mathbf{P}^{-1} \cdots \mathbf{P} \mathbf{\Lambda} \mathbf{P}^{-1}" />
          <p>
            ここで、
            <InlineMath math="\mathbf{P}^{-1} \mathbf{P} = \mathbf{I}" />
            なので、
          </p>
          <CenteredEquation equation="\mathbf{A}^k = \mathbf{P} \mathbf{\Lambda}^k \mathbf{P}^{-1}" />
          <p>となります。</p>
          <p>
            ここで、
            <InlineMath math="\mathbf{\Lambda}^k" /> は対角行列で、各要素は{" "}
            <InlineMath math="\lambda_i^k" /> です。
          </p>
          <CenteredEquation
            equation="\mathbf{\Lambda}^k =
          \begin{bmatrix}
          \lambda_1^k & 0 & \cdots & 0 \\
          0 & \lambda_2^k & \cdots & 0 \\
          \vdots & \vdots & \ddots & \vdots \\
          0 & 0 & \cdots & \lambda_m^k
          \end{bmatrix}"
          />
        </li>
        <li>
          逆行列
          <p>行列の逆行列は、次のように固有分解を使って表します。</p>
          <InlineMath math="\mathbf{A}^{-1} = \mathbf{P} \mathbf{\Lambda}^{-1} \mathbf{P}^{-1}" />
          <p>
            ここで、
            <InlineMath math="\mathbf{\Lambda}^{-1}" />{" "}
            は以下のように計算します。
          </p>
          <CenteredEquation
            equation="\mathbf{\Lambda}^{-1} =
            \begin{bmatrix}
            \frac{1}{\lambda_1} & 0 & \cdots & 0 \\
            0 & \frac{1}{\lambda_2} & \cdots & 0 \\
            \vdots & \vdots & \ddots & \vdots \\
            0 & 0 & \cdots & \frac{1}{\lambda_m}
            \end{bmatrix}"
          />
        </li>
        <li>
          行列式
          <p>
            行列の行列式は、その固有値（λ₁, λ₂, ...,
            λₙ）を使って次のように計算できます：
          </p>
          <CenteredEquation equation="\det(\mathbf{A}) = \prod_{i=1}^{n} \lambda_i" />
          <p>これは、全ての固有値を掛け合わせた結果です。</p>
        </li>
        <li>
          トレース
          <p>行列のトレースは、その固有値の総和として表されます：</p>
          <CenteredEquation equation="\text{tr}(\mathbf{A}) = \lambda_1 + \lambda_2 + \cdots + \lambda_n" />
          <p>トレースは、行列の対角成分を全て足し合わせた値でもあります。</p>
        </li>
        <li>
          ランク落ち行列
          <p>
            行列がランク落ち行列である場合、 行列式はゼロになります
            <InlineMath math="\det(\mathbf{A}) = 0" />
            <br />
            また、少なくとも1つの固有値がゼロになります
            <InlineMath math="\exists \lambda_i = 0" />
          </p>
        </li>
      </ol>

      <h2 className="caption">例題</h2>
      <h3>問題</h3>
      <div
        style={{
          margin: "20px 0",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "#ffffff",
          border: "1px solid #000000",
        }}
      >
        <p>
          行列 <InlineMath math="A" /> を次のように定義します。
          <br />
          <br />
          <InlineMath
            math="A =\begin{bmatrix}
        4 & 1 & 0 \\
        0 & 2 & 0 \\
        0 & 0 & 3
        \end{bmatrix}"
          />
        </p>
        <p>
          この行列を対角化し、行列 <InlineMath math="A^5" />{" "}
          を計算してください。
        </p>
      </div>

      <h3>解答</h3>
      <h4>1. 固有値の計算</h4>
      <p>
        行列 <InlineMath math="A" /> の固有値を求めます。固有値{" "}
        <InlineMath math="\lambda" />
        は、次の方程式から求めます。
      </p>
      <CenteredEquation equation="\det(A - \lambda I) = 0" />
      <p>計算をします。</p>
      <CenteredEquation
        equation="A - \lambda I =
          \begin{bmatrix}
          4 - \lambda & 1 & 0 \\
          0 & 2 - \lambda & 0 \\
          0 & 0 & 3 - \lambda
          \end{bmatrix}"
      />
      <p>この行列の行列式は次のようになります。</p>
      <CenteredEquation equation="\det(A - \lambda I) = (4 - \lambda)(2 - \lambda)(3 - \lambda)" />
      <p>これをゼロにします。</p>
      <CenteredEquation equation="(4 - \lambda)(2 - \lambda)(3 - \lambda) = 0" />
      <p>
        よって、固有値は <InlineMath math="\lambda_1 = 4" />,{" "}
        <InlineMath math="\lambda_2 = 2" />, <InlineMath math="\lambda_3 = 3" />{" "}
        です。
      </p>

      <h4>2. 固有ベクトルの計算</h4>
      <p>次に、各固有値に対応する固有ベクトルを求めます。</p>

      <ol>
        <li>
          <InlineMath math="\lambda_1 = 4" /> の場合
          <CenteredEquation
            equation="(A - 4I)\vec{v} = 0 \implies
          \begin{bmatrix}
          0 & 1 & 0 \\
          0 & -2 & 0 \\
          0 & 0 & -1
          \end{bmatrix}
          \vec{v} = 0"
          />
          <p>
            この行列から、固有ベクトルは{" "}
            <InlineMath math="\vec{v}_1 = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}" />{" "}
            です。
          </p>
        </li>
        <li>
          <InlineMath math="\lambda_2 = 2" /> の場合
          <CenteredEquation
            equation="(A - 2I)\vec{v} = 0 \implies
          \begin{bmatrix}
          2 & 1 & 0 \\
          0 & 0 & 0 \\
          0 & 0 & 1
          \end{bmatrix}
          \vec{v} = 0"
          />
          <p>
            この行列から、固有ベクトルは{" "}
            <InlineMath math="\vec{v}_2 = \begin{bmatrix} 1 \\ -2 \\ 0 \end{bmatrix}" />{" "}
            です。
          </p>
        </li>
        <li>
          <InlineMath math="\lambda_3 = 3" /> の場合
          <CenteredEquation
            equation="(A - 3I)\vec{v} = 0 \implies
          \begin{bmatrix}
          1 & 1 & 0 \\
          0 & -1 & 0 \\
          0 & 0 & 0
          \end{bmatrix}
          \vec{v} = 0"
          />
          <p>
            この行列から、固有ベクトルは{" "}
            <InlineMath math="\vec{v}_3 = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}" />{" "}
            です。
          </p>
        </li>
      </ol>

      <h4>3. 行列の対角化</h4>
      <p>
        固有ベクトルを使って、行列 <InlineMath math="P" /> と対角行列{" "}
        <InlineMath math="D" /> を作ります。
      </p>
      <CenteredEquation
        equation="P =
          \begin{bmatrix}
          1 & 1 & 0 \\
          0 & -2 & 0 \\
          0 & 0 & 1
          \end{bmatrix}, \quad
          D =
          \begin{bmatrix}
          4 & 0 & 0 \\
          0 & 2 & 0 \\
          0 & 0 & 3
          \end{bmatrix}"
      />
      <p>対角化の式は次の通りです。</p>
      <CenteredEquation equation="A = PDP^{-1}" />

      <h4>
        4. <InlineMath math="A^5" /> の計算
      </h4>
      <p>行列のべき乗は、対角化を使って次のように計算します。</p>
      <CenteredEquation equation="A^5 = PD^5P^{-1}" />
      <p>
        ここで、対角行列のべき乗 <InlineMath math="D^5" />{" "}
        は、各対角の数を5乗します。
      </p>
      <CenteredEquation
        equation="D^5 =
          \begin{bmatrix}
          4^5 & 0 & 0 \\
          0 & 2^5 & 0 \\
          0 & 0 & 3^5
          \end{bmatrix}
          =
          \begin{bmatrix}
          1024 & 0 & 0 \\
          0 & 32 & 0 \\
          0 & 0 & 243
          \end{bmatrix}"
      />
      <p>また、対角化行列Pの逆行列を求めます。</p>
      <CenteredEquation
        equation="P^{-1} = \begin{bmatrix}
          1 & \frac{1}{2} & 0 \\
          0 & -\frac{1}{2} & 0 \\
          0 & 0 & 1
          \end{bmatrix}"
      />
      <p>以上より</p>
      <CenteredEquation
        equation="A^5 = P D^5 P^{-1} =
          \begin{bmatrix}
          1 & 1 & 0 \\
          0 & -2 & 0 \\
          0 & 0 & 1
          \end{bmatrix}
          \begin{bmatrix}
          1024 & 0 & 0 \\
          0 & 32 & 0 \\
          0 & 0 & 243
          \end{bmatrix}
          \begin{bmatrix}
          1 & \frac{1}{2} & 0 \\
          0 & -\frac{1}{2} & 0 \\
          0 & 0 & 1
          \end{bmatrix}
          =
          \begin{bmatrix}
          1024 & 496 & 0 \\
          0 & 32 & 0 \\
          0 & 0 & 243
          \end{bmatrix}"
      />

      <h3>答え</h3>
      <p>
        よって、
        <br />
        <InlineMath
          math="A^5 =
          \begin{bmatrix}
          1024 & 496 & 0 \\
          0 & 32 & 0 \\
          0 & 0 & 243
          \end{bmatrix}"
        />
        <br />
        です。
      </p>
    </>
  );
}
