import { siteTitle } from "@/app/metadata";
import { MetadataCollection } from "@/types/metadata";

export const metadata: MetadataCollection = {
  autoencoder: {
    title: "オートエンコーダ",
    tabtitle: `オートエンコーダ - ${siteTitle}`,
    description:
      "オートエンコーダは、入力データを効率的に圧縮し再構成する自己教師あり学習モデルです。",
    lastUpdated: "2025-01-09",
    topic: "machine_learning",
  },
  adam: {
    title: "ADAM",
    tabtitle: `ADAM - ${siteTitle}`,
    description:
      "ADAMは、モメンタムと適応学習率を組み合わせた高度な最適化手法です。",
    lastUpdated: "2025-01-05",
    topic: "machine_learning",
  },
  gradient_descent: {
    title: "勾配降下法",
    tabtitle: `勾配降下法 - ${siteTitle}`,
    description:
      "勾配降下法は、関数の最小値を見つけるための基本的な最適化アルゴリズムです。",
    lastUpdated: "2025-01-09",
    topic: "machine_learning",
  },
  informationentropy: {
    title: "情報エントロピー",
    tabtitle: `情報エントロピー - ${siteTitle}`,
    description:
      "情報エントロピーは、情報の不確実性やランダム性を測定する概念です。",
    lastUpdated: "2025-01-09",
    topic: "machine_learning",
  },
  linearregression: {
    title: "線形回帰",
    tabtitle: `線形回帰 - ${siteTitle}`,
    description:
      "線形回帰は、独立変数と従属変数の線形関係をモデル化する手法です。",
    lastUpdated: "2025-01-15",
    topic: "machine_learning",
  },
  activationfunction: {
    title: "活性化関数",
    tabtitle: `活性化関数 - ${siteTitle}`,
    description:
      "活性化関数は、ニューラルネットワークのノードの出力を非線形に変換します。",
    lastUpdated: "2025-01-16",
    topic: "machine_learning",
  },
  vanishinggradient: {
    title: "勾配消失問題",
    tabtitle: `勾配消失問題 - ${siteTitle}`,
    description:
      "勾配消失問題は、深いニューラルネットワークで勾配が極端に小さくなる現象です。",
    lastUpdated: "2025-01-16",
    topic: "machine_learning",
  },
  logisticregression: {
    title: "ロジスティック回帰",
    tabtitle: `ロジスティック回帰 - ${siteTitle}`,
    description:
      "ロジスティック回帰は、分類問題に用いられる確率的な予測モデルです。",
    lastUpdated: "2025-01-16",
    topic: "machine_learning",
  },
  backpropagation: {
    title: "誤差逆伝播法",
    tabtitle: `誤差逆伝播法 - ${siteTitle}`,
    description:
      "誤差逆伝播法は、ニューラルネットワークの学習に用いられる効率的なアルゴリズムです。",
    lastUpdated: "2025-01-22",
    topic: "machine_learning",
  },
  supportvectormachine: {
    title: "サポートベクターマシン",
    tabtitle: `サポートベクターマシン - ${siteTitle}`,
    description:
      "サポートベクターマシンは、分類と回帰に用いられる強力な監督学習モデルです。",
    lastUpdated: "2025-01-22",
    topic: "machine_learning",
  },
  neural_networks: {
    title: "ニューラルネットワーク",
    tabtitle: `ニューラルネットワーク - ${siteTitle}`,
    description:
      "ニューラルネットワークは、人間の脳を模倣した構造で学習と推論を行うモデルです。",
    lastUpdated: "2025-01-22",
    topic: "machine_learning",
  },
  diffusionmodel: {
    title: "拡散モデル",
    tabtitle: `拡散モデル - ${siteTitle}`,
    description:
      "拡散モデルは、画像や音声などのデータを生成するために使用されます。",
    lastUpdated: "2025-01-23",
    topic: "machine_learning",
  },
  gan: {
    title: "GAN",
    tabtitle: `GAN - ${siteTitle}`,
    description:
      "GAN（生成対向ネットワーク）は、生成モデルと識別モデルを競わせて学習するアーキテクチャです。",
    lastUpdated: "2025-01-24",
    topic: "machine_learning",
  },
  decisiontree: {
    title: "決定木",
    tabtitle: `決定木 - ${siteTitle}`,
    description:
      "決定木は、データの特徴に基づいて判断を行う階層的な分類および回帰モデルです。",
    lastUpdated: "2025-01-24",
    topic: "machine_learning",
  },
  classification_tree: {
    title: "分類木",
    tabtitle: `分類木 - ${siteTitle}`,
    description: "分類木は、カテゴリ値の目標変数を持つ決定木の一種です。",
    lastUpdated: "2025-01-24",
    topic: "machine_learning",
  },
  regression_tree: {
    title: "回帰木",
    tabtitle: `回帰木 - ${siteTitle}`,
    description: "回帰木は、連続値の目標変数を持つ決定木の一種です。",
    lastUpdated: "2025-01-24",
    topic: "machine_learning",
  },
};
