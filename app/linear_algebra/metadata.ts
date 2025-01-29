import { siteTitle } from "@/app/metadata";
import { MetadataCollection } from "@/types/metadata";

export const metadata: MetadataCollection = {
  dotproduct: {
    title: "内積とは",
    tabtitle: `内積とは - ${siteTitle}`,
    description:
      "内積の定義や計算方法、幾何学的な意味合いおよび応用について詳しく説明しています。",
    lastUpdated: "2025-01-09",
    topic: "linear_algebra",
  },
  crossproduct: {
    title: "外積とは",
    tabtitle: `外積とは - ${siteTitle}`,
    description:
      "外積の定義、計算方法、幾何学的な意義、およびベクトル空間における応用例について解説しています。",
    lastUpdated: "2025-01-09",
    topic: "linear_algebra",
  },
  vector: {
    title: "ベクトルの演算",
    tabtitle: `ベクトルの演算 - ${siteTitle}`,
    description:
      "ベクトルの加算、スカラー倍、内積、外積など、基本的なベクトル演算とその応用について詳細に説明しています。",
    lastUpdated: "2024-12-04",
    topic: "linear_algebra",
  },
  norm: {
    title: "ベクトルのノルム",
    tabtitle: `ベクトルのノルム - ${siteTitle}`,
    description:
      "ベクトルの大きさを測るノルムの定義、計算方法、性質、および応用について説明しています。",
    lastUpdated: "2024-12-05",
    topic: "linear_algebra",
  },
  basis: {
    title: "基底",
    tabtitle: `基底 - ${siteTitle}`,
    description:
      "ベクトル空間の基底の定義、性質、具体例や応用について詳しく説明しています。",
    lastUpdated: "2024-12-10",
    topic: "linear_algebra",
  },
  lin_indep: {
    title: "線形独立と線形従属",
    tabtitle: `線形独立と線形従属 - ${siteTitle}`,
    description:
      "ベクトルの線形独立性と線形従属性の概念、判定方法、および応用例について解説しています。",
    lastUpdated: "2024-12-06",
    topic: "linear_algebra",
  },
  eq_matrix: {
    title: "連立方程式の行列表現",
    tabtitle: `連立方程式の行列表現 - ${siteTitle}`,
    description:
      "連立方程式を行列形式で表現し、解く方法やそれに関連する理論について詳しく説明しています。",
    lastUpdated: "2024-12-11",
    topic: "linear_algebra",
  },
  matrix: {
    title: "行列とは",
    tabtitle: `行列とは - ${siteTitle}`,
    description:
      "行列の基本的な概念、性質、およびさまざまな応用について詳細に説明しています。",
    lastUpdated: "2024-12-11",
    topic: "linear_algebra",
  },
  matrix_ope: {
    title: "行列の演算",
    tabtitle: `行列の演算 - ${siteTitle}`,
    description:
      "行列の加算、スカラー倍、積など、基本的な行列演算方法とその応用について詳しく説明しています。",
    lastUpdated: "2024-12-13",
    topic: "linear_algebra",
  },
  inverse_matrix: {
    title: "逆行列",
    tabtitle: `逆行列 - ${siteTitle}`,
    description:
      "逆行列の定義、求め方、性質、および逆行列を用いた応用例について説明しています。",
    lastUpdated: "2025-01-09",
    topic: "linear_algebra",
  },
  determinant: {
    title: "行列式",
    tabtitle: `行列式 - ${siteTitle}`,
    description:
      "行列式の定義、計算方法、性質、および行列式の応用について詳しく説明しています。",
    lastUpdated: "2024-12-13",
    topic: "linear_algebra",
  },
  cofactor_matrix: {
    title: "余因子行列と余因子展開",
    tabtitle: `余因子行列と余因子展開 - ${siteTitle}`,
    description:
      "余因子行列と余因子展開の定義、計算方法、および行列式計算への応用について説明しています。",
    lastUpdated: "2024-12-15",
    topic: "linear_algebra",
  },
  eigen_solve: {
    title: "固有値と固有ベクトルの求め方",
    tabtitle: `固有値と固有ベクトルの求め方 - ${siteTitle}`,
    description:
      "行列の固有値と固有ベクトルの求め方、計算手法、および応用について解説しています。",
    lastUpdated: "2024-12-19",
    topic: "linear_algebra",
  },
  eigen_property: {
    title: "固有値と固有ベクトルの性質",
    tabtitle: `固有値と固有ベクトルの性質 - ${siteTitle}`,
    description:
      "固有値と固有ベクトルの基本的な性質、理論、および応用例について詳述しています。",
    lastUpdated: "2024-12-19",
    topic: "linear_algebra",
  },
  diagonalization: {
    title: "行列の対角化",
    tabtitle: `行列の対角化 - ${siteTitle}`,
    description:
      "行列の対角化手法、条件、プロセスおよび対角化の応用例について説明しています。",
    lastUpdated: "2024-12-23",
    topic: "linear_algebra",
  },
  eigen_decomposition: {
    title: "固有値分解",
    tabtitle: `固有値分解 - ${siteTitle}`,
    description:
      "行列の固有値分解の概念、手法、計算プロセス、および応用について解説しています。",
    lastUpdated: "2024-12-27",
    topic: "linear_algebra",
  },
  eigen_decomposition_trans: {
    title: "固有値分解と信号の変換",
    tabtitle: `固有値分解と信号の変換 - ${siteTitle}`,
    description:
      "固有値分解を用いた信号変換の方法、理論的背景、および実用的な応用例について説明しています。",
    lastUpdated: "2024-12-27",
    topic: "linear_algebra",
  },
  gauss_jordan_elimination: {
    title: "ガウス・ジョルダン消去法",
    tabtitle: `ガウス・ジョルダン消去法 - ${siteTitle}`,
    description:
      "連立方程式を解くためのガウス・ジョルダン消去法の手順、理論、および実際の応用について詳述しています。",
    lastUpdated: "2024-12-27",
    topic: "linear_algebra",
  },
  qr_decomposition: {
    title: "QR分解",
    tabtitle: `QR分解 - ${siteTitle}`,
    description:
      "行列のQR分解の手法、計算方法、および応用例（例えば最小二乗法）について説明しています。",
    lastUpdated: "2024-12-27",
    topic: "linear_algebra",
  },
  gram_schmidt: {
    title: "グラム・シュミットの直交化法",
    tabtitle: `グラム・シュミットの直交化法 - ${siteTitle}`,
    description:
      "グラム・シュミットの直交化法のアルゴリズム、理論、およびベクトル空間での応用について解説しています。",
    lastUpdated: "2024-12-28",
    topic: "linear_algebra",
  },
  matrix_rank: {
    title: "行列のランク",
    tabtitle: `行列のランク - ${siteTitle}`,
    description:
      "行列のランクの定義、計算方法、性質、および応用例について詳しく説明しています。",
    lastUpdated: "2025-01-09",
    topic: "linear_algebra",
  },
  singular_value_decomposition: {
    title: "特異値分解",
    tabtitle: `特異値分解 - ${siteTitle}`,
    description:
      "行列の特異値分解の理論、計算手法、及びデータ解析や機械学習での応用について説明しています。",
    lastUpdated: "2025-01-09",
    topic: "linear_algebra",
  },
  pseudoinverse: {
    title: "疑似行列",
    tabtitle: `疑似行列 - ${siteTitle}`,
    description:
      "行列の疑似行列の定義、計算方法、および応用について詳述しています。",
    lastUpdated: "2025-01-09",
    topic: "linear_algebra",
  },
  linear_combination: {
    title: "線型結合",
    tabtitle: `線型結合 - ${siteTitle}`,
    description:
      "ベクトルの線型結合の概念、構成方法、および線型代数における応用例について説明しています。",
    lastUpdated: "2025-01-09",
    topic: "linear_algebra",
  },
  lu_decomposition: {
    title: "LU分解",
    tabtitle: `LU分解 - ${siteTitle}`,
    description:
      "行列のLU分解の手法、計算方法、および連立方程式の解法への応用について解説しています。",
    lastUpdated: "2025-01-28",
    topic: "linear_algebra",
  },
  // 他のトピックもここに追加できます
};
