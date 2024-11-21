import React from "react";
import Head from "next/head";
import { metadata as linearAlgebraMetadata } from "@/app/linear_algebra/metadata";
// import { metadata as geometryMetadata } from "@/app/geometry/metadata";

// トピックごとのメタデータの型を定義
type Metadata = {
    title: string;
    tabtitle: string;
    description: string;
    lastUpdated: string;
    topic: string;
};

type Topics = {
    linear_algebra: Record<string, Metadata>;
    // geometry: Record<string, Metadata>;
};

// トピックごとのメタデータをマッピング
const topics: Topics = {
    linear_algebra: linearAlgebraMetadata,
    // geometry: geometryMetadata,
};

type DynamicMetadataProps = {
    topicKey: keyof Topics; // トピックキーの型
    metaKey: string; // メタデータキーの型
};

const DynamicMetadata: React.FC<DynamicMetadataProps> = ({ topicKey, metaKey }) => {
    // トピックに対応するメタデータを取得
    const topicMetadata = topics[topicKey];

    const metaData = topicMetadata[metaKey];

    return (
        <Head>
            <title>{metaData.title}</title>
            <meta name="description" content={metaData.description} />
            <meta property="og:title" content={metaData.title} />
            <meta property="og:description" content={metaData.description} />
            <meta property="og:url" content={`https://jeonglabo.github.io/${metaData.topic}/${metaData.title}`} />
            <meta
                property="og:image"
                content={`https://jeonglabo.github.io/${metaData.topic}/${metaData.title}/thumb.png`}
            />
            <meta property="og:image:alt" content={metaData.description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metaData.title} />
            <meta name="twitter:description" content={metaData.description} />
            <meta
                name="twitter:image"
                content={`https://jeonglabo.github.io/${metaData.topic}/${metaData.title}/thumb.png`}
            />
        </Head>
    );
};

export default DynamicMetadata;
