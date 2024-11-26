import { siteTitle } from "@/app/metadata";
import { MetadataCollection } from "@/types/metadata";

export const metadata: MetadataCollection = {
  dotproduct: {
    title: "内積とは",
    tabtitle: `内積とは - ${siteTitle}`,
    description:
      "内積は、ベクトル同士の積の一種で、ベクトルの方向を計算する際などに用いられます。",
    lastUpdated: "2024-11-26",
    topic: "linear_algebra",
  },
  crossproduct: {
    title: "外積とは",
    tabtitle: `外積とは - ${siteTitle}`,
    description:
      "外積は、ベクトル同士の積の一種で、ベクトルに垂直なベクトルを計算するために使用されます。",
    lastUpdated: "2024-11-26",
    topic: "linear_algebra",
  },
  vector: {
    title: "ベクトルとは",
    tabtitle: `ベクトルとは - ${siteTitle}`,
    description:
      "ベクトルは、向きと大きさを持つ量のことで、線形代数の基本的な概念になります。",
    lastUpdated: "2024-11-26",
    topic: "linear_algebra",
  },
  // 他のトピックもここに追加できます
};
