import CenteredEquation from "@/app/components/CenteredEquation";
import { InlineMath } from "react-katex";

export default function PageContent() {
  return (
    <>
      <h2 className="caption">LU分解とは</h2>
      <p>
        <b>LU分解</b>
        (LU decomposition)は、正方行列&nbsp;
        <InlineMath math="A" />
        &nbsp;を<b>下三角行列</b>(Lower triangular matrix)の&nbsp;
        <InlineMath math="L" />
        &nbsp;と<b>上三角行列</b>(Upper triangular matrix)の&nbsp;
        <InlineMath math="U" />
        &nbsp; の積に分解する手法です。
        <br />
        すなわち、次のような分解を指します。
      </p>
      <CenteredEquation equation="A = LU" />
      <p>
        ここで、
        <br />
        <InlineMath math="L" />
        &nbsp; は対角成分が全て1で、それより上の成分が0の下三角行列です。
        <br />
        <InlineMath math="U" />
        &nbsp; は上三角行列です。
      </p>
      <p>
        この分解を利用すると、行列の逆行列の計算、連立一次方程式の高速解法、行列の行列式の計算などを効率的に行うことができます。
        <br />
        特に、科学技術計算や機械学習アルゴリズムで扱われる大規模な行列に対して有用です。
      </p>
      <h2 className="caption">LU分解の利点</h2>
      <ul>
        <li>
          <b>連立一次方程式の高速解法</b>
          <p>
            連立一次方程式の&nbsp;
            <InlineMath math="Ax = b" />
            &nbsp; を解くとき、行列&nbsp;
            <InlineMath math="A" />
            &nbsp; をあらかじめ&nbsp;
            <InlineMath math="LU" />
            &nbsp; として分解しておくと、
          </p>
          <CenteredEquation equation="Ax = LUx = b" />
          <p>
            となります。
            <br />
            ここで&nbsp;
            <InlineMath math="y = Ux" />
            &nbsp; とおくと、
          </p>
          <CenteredEquation equation="Ly = b, Ux = y" />
          <p>
            の2段階の三角行列の解法に分離でき、それぞれの解法が効率化されます。
          </p>
        </li>
        <li>
          <b>行列式の計算</b>
          <p>
            行列&nbsp;
            <InlineMath math="A" />
            &nbsp; の行列式&nbsp;
            <InlineMath math="\det(A)" />
            &nbsp; は、LU分解ができる場合、
          </p>
          <CenteredEquation equation="\det(A) = \det(L)\det(U)" />
          <p>
            となります。対角成分がすべて1の下三角行列&nbsp;
            <InlineMath math="L" />
            &nbsp; の行列式は1なので、
          </p>
          <CenteredEquation equation="\det(A) = \det(U)," />
          <p>
            となり、&nbsp;U&nbsp;の対角成分の積を取るだけで行列式を計算できます。
          </p>
        </li>
        <li>
          <b>逆行列の計算</b>
          <p>
            <InlineMath math="A^{-1} = U^{-1}L^{-1}" />
            を用いて簡単に逆行列を求めることができます。三角行列の逆行列は直接解くよりも計算が容易です。
          </p>
        </li>
      </ul>
      <h2 className="caption">LU分解の前提条件</h2>
      <p>
        一般的に、任意の行列&nbsp;
        <InlineMath math="A" />
        &nbsp; が必ずしもそのまま&nbsp;
        <InlineMath math="LU" />
        &nbsp;
        に分解できるわけではありません。行列によってはピボット選択を行うために
        <b>部分的ピボット選択</b>
        を伴う&nbsp;
        <InlineMath math="PA=LU" />
        &nbsp; 分解を行うことが必要になる場合があります。
        <br />
        ここで&nbsp;
        <InlineMath math="P" />
        &nbsp; は置換行列 (Permutation matrix)
        であり、行の入れ替えを行うために導入されます。
      </p>
      <h2 className="caption">LU分解の手順</h2>
      <h3>前提</h3>
      <p>
        ここでは、
        <InlineMath math="A" /> を <InlineMath math="n \times n" />{" "}
        の正方行列とし、完全ピボットや部分的ピボットを伴わない単純なケースを考えます（数値計算上はピボット選択が必要になることが多いです）。
      </p>
      <h3>手順の概略</h3>
      <ol>
        <li>
          <b>初期化</b>
          <p>
            <InlineMath math="L" /> を <InlineMath math="n \times n" />{" "}
            の単位下三角行列（対角要素が 1）で初期化します。
            <InlineMath math="U" /> を <InlineMath math="A" />{" "}
            と同じ大きさの零行列で初期化します。
          </p>
        </li>
        <li>
          <b>ガウス消去法に基づく分解</b>
          <p>
            ガウス消去法による掃き出し操作を行いながら、消去過程で得られる係数を{" "}
            <InlineMath math="L" /> の要素に格納し、消去後に残る行列を{" "}
            <InlineMath math="U" /> に格納するという流れです。
            <br />
            たとえば、第 <InlineMath math="k" /> ステップ目では、
          </p>
          <ul>
            <li>
              ピボットとなる <InlineMath math="U_{kk}" /> を用いて、{" "}
              <InlineMath math="k" /> 行目より下の行について消去操作を行う。
            </li>
            <li>
              このときに用いる “消去係数” を <InlineMath math="L" />{" "}
              の該当要素に書き込む。
            </li>
            <li>
              消去後の行列を更新し、それが最終的に <InlineMath math="U" />{" "}
              になる。
            </li>
          </ul>
        </li>
        <li>
          <b>結果の確認</b>
          <p>
            得られた下三角行列 <InlineMath math="L" /> と上三角行列{" "}
            <InlineMath math="U" /> を掛け合わせて、元の行列{" "}
            <InlineMath math="A" /> が得られるか確認します。
          </p>
        </li>
      </ol>
      <h2 className="caption">具体例</h2>
      <h3>3次元の場合</h3>
      <CenteredEquation equation="A = \begin{pmatrix} 2 & 1 & 1 \\ 4 & 3 & 3 \\ 8 & 7 & 9 \end{pmatrix}" />
      <p>
        に対して、
        <InlineMath math="A = LU" />
        の形を求めてみます。
      </p>
      <h3>初期化</h3>
      <CenteredEquation equation="L = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}, U = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}" />
      <h3>ステップ 1</h3>
      <p>
        第1列目の先頭要素
        <InlineMath math="2" />
        をピボットとして考える。下の行を消去する係数は、第2行では
        <InlineMath math="\frac{4}{2}=2" />
        、第3行では
        <InlineMath math="\frac{8}{2}=4" />
        。これらの係数を
        <InlineMath math="L" />
        に書き込む。
      </p>
      <CenteredEquation equation="L = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 4 & 0 & 1 \end{pmatrix}, U = \begin{pmatrix} 2 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 3 & 5 \end{pmatrix}" />
      <p>
        一方、
        <InlineMath math="U" />
        の第1行は
        <InlineMath math="A" />
        の第1行をそのまま入れておく。
      </p>
      <CenteredEquation equation="U = \begin{pmatrix} 2 & 1 & 1 \\ 0 & * & * \\ 0 & * & * \end{pmatrix}" />
      <p>
        第2行と第3行からピボットの倍数を引いて、更新後の第2行・第3行を
        <InlineMath math="U" />
        に格納する。
      </p>
      <ul>
        <li>
          第2行: <InlineMath math="(4,3,3) - 2 \times (2,1,1) = (0,1,1)" />
        </li>
        <li>
          第3行: <InlineMath math="(8,7,9) - 4 \times (2,1,1) = (0,3,5)" />
        </li>
      </ul>
      <CenteredEquation equation="U = \begin{pmatrix} 2 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 3 & 5 \end{pmatrix}" />
      <h3>ステップ 2</h3>
      <p>
        次に、
        <InlineMath math="U_{22}=1" />
        をピボットとする。第3行からこのピボットの倍数を引いて消去する係数は
        <InlineMath math="\frac{3}{1}=3" />
        。これを
        <InlineMath math="L_{32}" />
        に書き込む。
      </p>
      <CenteredEquation equation="L = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 4 & 3 & 1 \end{pmatrix}, U = \begin{pmatrix} 2 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 2 \end{pmatrix}" />
      <p>
        第3行を更新:
        <InlineMath math="(0,3,5) - 3 \times (0,1,1) = (0,0,2)" />
      </p>
      <CenteredEquation equation="U = \begin{pmatrix} 2 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 2 \end{pmatrix}" />
      <h3>ステップ 3</h3>
      <p>
        第3行のピボット
        <InlineMath math="U_{33}=2" />
        は消去操作がないので、そのままです。
      </p>
      <p>
        最終的に求まった
        <InlineMath math="L" />
        と
        <InlineMath math="U" />
        は以下のとおりです。
      </p>
      <CenteredEquation equation="L = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 4 & 3 & 1 \end{pmatrix}, U = \begin{pmatrix} 2 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 2 \end{pmatrix}" />
      <p>
        実際に
        <InlineMath math="L \times U" />
        を計算すると元の
        <InlineMath math="A" />
        に戻ることが確認できます。
      </p>
    </>
  );
}
