import React from "react";
import Head from "next/head";
import { allMetadata } from "@/app/allmetadata"; // allmetadata をインポート

type DynamicMetadataProps = {
    topicKey: keyof typeof allMetadata; // トピックキーの型
    metaKey: string;
};

const DynamicMetadata: React.FC<DynamicMetadataProps> = ({ topicKey, metaKey }) => {
    // トピックに対応するメタデータを取得
    const topicMetadata = allMetadata[topicKey];

    if (!topicMetadata) {
        console.error(`Metadata for the topic "${topicKey}" is not defined.`);
        return null;
    }

    const metaData = topicMetadata[metaKey];

    if (!metaData) {
        console.error(`Metadata for the key "${metaKey}" in topic "${topicKey}" is not defined.`);
        return null;
    }

    return (
        <Head>
            <title>{metaData.title}</title>
            <meta name="description" content={metaData.description} />
            <meta property="og:title" content={metaData.title} />
            <meta property="og:description" content={metaData.description} />
            <meta property="og:url" content={`https://jeonglabo.github.io${metaData.path}`} />
            <meta
                property="og:image"
                content={`https://jeonglabo.github.io${metaData.path}/thumb.png`}
            />
            <meta property="og:image:alt" content={metaData.description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metaData.title} />
            <meta name="twitter:description" content={metaData.description} />
            <meta
                name="twitter:image"
                content={`https://jeonglabo.github.io${metaData.path}/thumb.png`}
            />
        </Head>
    );
};

export default DynamicMetadata;
