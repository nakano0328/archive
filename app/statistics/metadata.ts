import { siteTitle } from "@/app/metadata";
import { MetadataCollection } from "@/types/metadata";

export const metadata: MetadataCollection = {
  normal_distribution: {
    title: "正規分布",
    tabtitle: `正規分布 - ${siteTitle}`,
    description: "正規分布は、データの分布を表す基本的な確率分布です。",
    lastUpdated: "2025-01-31",
    topic: "statistics",
    keywords: ["正規分布", "確率", "データ分析", "ガウス"],
  },
  binomial_distribution: {
    title: "二項分布",
    tabtitle: `二項分布 - ${siteTitle}`,
    description: "二項分布は、ベルヌーイ試行の結果を表す確率分布です。",
    lastUpdated: "2025-02-06",
    topic: "statistics",
    keywords: ["二項分布", "確率", "ベルヌーイ試行"],
  },
  bernoulli_distribution: {
    title: "ベルヌーイ分布",
    tabtitle: `ベルヌーイ分布 - ${siteTitle}`,
    description: "ベルヌーイ分布は、2値の確率分布を表す確率分布です。",
    lastUpdated: "2025-02-06",
    topic: "statistics",
    keywords: ["ベルヌーイ分布", "確率", "2値"],
  },
};
