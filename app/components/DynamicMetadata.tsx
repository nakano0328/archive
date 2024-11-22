import { Metadata } from "next";
import { MetadataCollection, MetaDataItem } from "@/types/metadata";
import { metadata as linearalgebraMetadata } from "@/app/linear_algebra/metadata";
//import { metadata as geometryMetadata } from "@/app/geometry/metadata";

interface DynamicMetadataProps {
  topicKey: string;
  metaKey: string;
}

// メタデータのマッピング
const metadataMapping: Record<string, MetadataCollection> = {
  linear_algebra: linearalgebraMetadata,
  //geometry: geometryMetadata,
  // 必要に応じて他のトピックを追加
};

// 特定のトピックとキーに基づいてメタデータを取得する関数
const getMetaData = (topic: string, key: string): MetaDataItem | undefined => {
  const topicMetadata = metadataMapping[topic];
  if (!topicMetadata) {
    console.warn(`Metadata not found for topic: ${topic}`);
    return undefined;
  }

  const metadata = topicMetadata[key];
  if (!metadata) {
    console.warn(`Metadata not found for key: ${key} in topic: ${topic}`);
    return undefined;
  }

  return metadata;
};

export function generateMetadata({
  topicKey,
  metaKey,
}: DynamicMetadataProps): Metadata {
  const metaData = getMetaData(topicKey, metaKey);

  if (!metaData) {
    return {
      title: "Not Found",
      description: "Content not found",
    };
  }

  const baseUrl = "https://jeonglabo.github.io";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return {
    title: metaData.title,
    description: metaData.description,
    openGraph: {
      title: metaData.title,
      description: metaData.description,
      url: `${baseUrl}/${metaData.topic}/${metaData.title}`,
      images: [
        {
          url: `${basePath}/${metaData.topic}/${metaData.title}/thumb.png`,
          alt: metaData.description,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaData.title,
      description: metaData.description,
      images: [`${basePath}/${metaData.topic}/${metaData.title}/thumb.png`],
    },
  };
}

export default function DynamicMetadata({
  topicKey,
  metaKey,
}: DynamicMetadataProps) {
  return null;
}
