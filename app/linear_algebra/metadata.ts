import { siteTitle } from "@/app/metadata";
import { MetadataCollection } from "@/types/metadata";

export const metadata: MetadataCollection = {
  dotproduct: {
    title: "内積とは",
    tabtitle: `内積とは - ${siteTitle}`,
    description: "内積の定義や計算方法、性質について説明しています。",
    lastUpdated: "2024-11-26",
    topic: "linear_algebra",
  },
  crossproduct: {
    title: "外積とは",
    tabtitle: `外積とは - ${siteTitle}`,
    description: "外積の定義や計算方法、性質について説明しています。",
    lastUpdated: "2024-11-26",
    topic: "linear_algebra",
  },
  vector: {
    title: "ベクトルの演算",
    tabtitle: `ベクトルの演算 - ${siteTitle}`,
    description:
      "ベクトルの和、スカラー倍、内積、外積など、ベクトルの演算について説明しています。",
    lastUpdated: "2024-12-04",
    topic: "linear_algebra",
  },
  norm: {
    title: "ベクトルのノルム",
    tabtitle: `ベクトルのノルム - ${siteTitle}`,
    description: "ベクトルの大きさを表すノルムについて説明しています。",
    lastUpdated: "2024-12-05",
    topic: "linear_algebra",
  },
  basis: {
    title: "基底",
    tabtitle: `基底 - ${siteTitle}`,
    description: "ベクトル空間の基底について定義、性質、例を説明しています。",
    lastUpdated: "2024-12-10",
    topic: "linear_algebra",
  },
  lin_indep: {
    title: "線形独立と線形従属",
    tabtitle: `線形独立と線形従属 - ${siteTitle}`,
    description: "ベクトルの線形独立性と線形従属性について説明しています。",
    lastUpdated: "2024-12-06",
    topic: "linear_algebra",
  },
  eq_matrix: {
    title: "連立方程式の行列表現",
    tabtitle: `連立方程式の行列表現 - ${siteTitle}`,
    description:
      "連立方程式を行列を使って表現する方法と解法について説明しています。",
    lastUpdated: "2024-12-11",
    topic: "linear_algebra",
  },
  matrix: {
    title: "行列とは",
    tabtitle: `行列とは - ${siteTitle}`,
    description: "行列の基本的な意味、性質ついて説明しています。",
    lastUpdated: "2024-12-11",
    topic: "linear_algebra",
  },
  matrix_ope: {
    title: "行列の演算",
    tabtitle: `行列の演算 - ${siteTitle}`,
    description:
      "行列の和、スカラー倍、積など、行列の演算について説明しています。",
    lastUpdated: "2024-12-13",
    topic: "linear_algebra",
  },
  inverse_matrix: {
    title: "逆行列",
    tabtitle: `逆行列 - ${siteTitle}`,
    description: "逆行列の定義、求め方、性質について説明しています。",
    lastUpdated: "2024-12-13",
    topic: "linear_algebra",
  },
  determinant: {
    title: "行列式",
    tabtitle: `行列式 - ${siteTitle}`,
    description: "行列式の定義、求め方、性質について説明しています。",
    lastUpdated: "2024-12-13",
    topic: "linear_algebra",
  },
  cofactor_matrix: {
    title: "余因子行列と余因子展開",
    tabtitle: `余因子行列と余因子展開 - ${siteTitle}`,
    description: "余因子行列と余因子展開について説明しています。",
    lastUpdated: "2024-12-13",
    topic: "linear_algebra",
  },
  // 他のトピックもここに追加できます
};
