import { InlineMath } from "react-katex";

export default function pageContent() {
  return (
    <>
      <h2 className="caption">線形独立の定義</h2>
      <p>
        線形独立は1次独立とも呼ばれます。<br />
        ベクトルが線形独立であるとは、次の式が成り立つことです。
      </p>
      <div className="container">
        <p>
          <InlineMath math="c_1\bm{v}_1,c_2\bm{v}_2,\cdots,c_n\bm{v}_n" />
          &nbsp;を定数とする。
          <br />
          <br />
          任意のベクトル&nbsp;
          <InlineMath math="\bm{v}_1,\bm{v}_2,...,\bm{v}_n" />
          &nbsp;に対して、
          <br />
          <InlineMath math="c_1\bm{v}_1 + c_2\bm{v}_2 + \cdots + c_n\bm{v}_n = \bm{0}" />
          &nbsp;
          を満たす定数<InlineMath math="c_1\bm{v}_1,c_2\bm{v}_2,\cdots,c_n\bm{v}_n" />
          &nbsp;がすべて0のみの場合、&nbsp;
          <InlineMath math="\bm{v}_1,\bm{v}_2,...,\bm{v}_n" />
          &nbsp;は線形独立である。
        </p>
      </div>
      <h2 className="caption">線形従属</h2>
      <p>
        線形従属は1次従属とも呼ばれます。<br />
        逆に、ベクトルが線形従属であるとは、次の式が成り立つことです。
      </p>
      <div className="container">
        <p>
          <InlineMath math="c_1\bm{v}_1,c_2\bm{v}_2,\cdots,c_n\bm{v}_n" />
          &nbsp;を定数とする。
          <br />
          <br />
          任意のベクトル&nbsp;
          <InlineMath math="\bm{v}_1,\bm{v}_2,...,\bm{v}_n" />
          &nbsp;に対して、
          <br />
          <InlineMath math="c_1\bm{v}_1 + c_2\bm{v}_2 + \cdots + c_n\bm{v}_n = \bm{0}" />
          &nbsp;
          を満たす定数<InlineMath math="c_1\bm{v}_1,c_2\bm{v}_2,\cdots,c_n\bm{v}_n" />
          &nbsp;が0以外でも成り立つ場合、&nbsp;
          <InlineMath math="\bm{v}_1,\bm{v}_2,...,\bm{v}_n" />
          &nbsp;は線形従属である。
        </p>
      </div>

      <p>
        このように、線形独立が成り立たない場合、ベクトルは線形従属であるといいます。
      </p>

      <h2 className="caption">線形独立の性質</h2>
      <p>
        線形独立の性質として以下のことがあげられます。
      </p>
      <ul>
        <li>
          ベクトルの組が線形独立であるとき、そのベクトルの組の中でどれか一つを取り除いても線形独立です。
          <p>
            <InlineMath math="\bm{v}_1,\bm{v}_2,\bm{v}_3" />&nbsp;が線形独立であるとき、&nbsp;<InlineMath math="\bm{v}_1,\bm{v}_2" />&nbsp;や&nbsp;<InlineMath math="\bm{v}_1,\bm{v}_3" />&nbsp;も線形独立です。
          </p>
        </li>
        <li>
          ベクトルの組が線形独立であるとき、そのベクトルの組にスカラー倍をしても線形独立です。
          <p>
            <InlineMath math="\bm{v}_1,\bm{v}_2" />&nbsp;が線形独立であるとき、&nbsp;<InlineMath math="c\,\bm{v}_1,c\,\bm{v}_2" />&nbsp;も線形独立です。
          </p>
        </li>
      </ul>

      <h2 className="caption">線形独立の例</h2>
      <p>
        以下のベクトルが線形独立であるかどうかを考えます。
      </p>
      <div className="container">
        <p>
          <InlineMath math="\bm{v}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix} , \bm{v}_2 = \begin{pmatrix} 0 \\ 1 \end{pmatrix}" />
        </p>
      </div>
      <p>
        この場合、線形独立であるかどうかを考えてみましょう。
        <br />
        以下のように計算することで、線形独立であることがわかります。ここで、&nbsp;<InlineMath math="c_1,c_2" />&nbsp;は定数とします。
        <br />
        <br />
        <InlineMath math="c_1\bm{v}_1 + c_2\bm{v}_2 = c_1 \begin{pmatrix} 1 \\ 0 \end{pmatrix} + c_2 \begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} c_1\cdot 1 + c_2\cdot 0 \\ c_1\cdot 0 + c_2\cdot 1 \end{pmatrix} = \begin{pmatrix} c_1 \\ c_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}" />
        <br />
        <br />
        このような式で計算します。この式を満たす定数の組は&nbsp;<InlineMath math="c_1 = 0, c_2 = 0" />&nbsp;のみです。したがって、&nbsp;<InlineMath math="\bm{v}_1,\bm{v}_2" />&nbsp;は線形独立といえます。
      </p>
      <br />
      <hr />
      <p>
        次に以下のベクトルが線形独立であるかどうかを考えます。
      </p>
      <div className="container">
        <p>
          <InlineMath math="\bm{v}_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} , \bm{v}_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} , \bm{v}_3 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}" />
        </p>
      </div>
      <p>
        この場合、線形従属であるかどうかを考えてみましょう。
        <br />
        以下のように計算することで、線形従属であることがわかります。ここで、&nbsp;<InlineMath math="c_1,c_2,c_3" />&nbsp;は定数とします。
        <br />
        <br />
        <InlineMath math="c_1\bm{v}_1 + c_2\bm{v}_2 + c_3\bm{v}_3 = c_1 \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} + c_2 \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} + c_3 \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} c_1 + c_3 \\ c_2 + c_3 \\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}" />
        <br />
        <br />
        このような式で計算します。この式を満たす定数の組は&nbsp;<InlineMath math="c_1 = 0, c_2 = 0, c_3 = 0" />&nbsp;以外にも&nbsp;<InlineMath math="c_1 = 1, c_2 = 1, c_3 = -1" />&nbsp;などがあります。したがって、&nbsp;<InlineMath math="\bm{v}_1,\bm{v}_2,\bm{v}_3" />&nbsp;は線形従属といえます。
        <br />
        <br />
      </p>
    </>
  );
}
