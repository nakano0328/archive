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
    keywords: ["オートエンコーダ", "次元削減", "再構成", "ディープラーニング"],
  },
};
