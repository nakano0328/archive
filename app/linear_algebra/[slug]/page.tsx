// app/linear_algebra/[slug]/page.tsx
import { notFound } from "next/navigation";
import Breadcrumb from "@/app/components/Breadcrumb";
import { metadata as linearAlgebraMetadata } from "@/app/linear_algebra/metadata";
import GoogleForm from "@/app/components/GoogleForm";
import Image from "next/image";
import { formatDate } from "@/app/components/formatDate";

import DotProductContent from "@/app/linear_algebra/contents/dotproduct";
import CrossProductContent from "@/app/linear_algebra/contents/crossproduct";
import VectorContent from "@/app/linear_algebra/contents/vector";
import NormContent from "@/app/linear_algebra/contents/norm";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 静的に生成するパスのパラメータを定義
export async function generateStaticParams() {
  // metadataのキーから静的パスを生成
  return Object.keys(linearAlgebraMetadata).map((slug) => ({
    slug: slug,
  }));
}

// ページコンポーネントのマッピング
const contentComponents = {
  dotproduct: DotProductContent,
  crossproduct: CrossProductContent,
  vector: VectorContent,
  norm: NormContent,
  // 他のコンポーネントを追加
};

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const metaData = linearAlgebraMetadata[params.slug];

  if (!metaData) {
    return {
      title: "Not Found",
      description: "Page not found",
    };
  }

  const baseUrl = "https://jeonglabo.github.io/nextjs";

  return {
    title: metaData.tabtitle,
    description: metaData.description,
    openGraph: {
      title: metaData.tabtitle,
      description: metaData.description,
      url: `${baseUrl}/linear_algebra/${params.slug}`,
      images: [
        {
          url: `${baseUrl}/linear_algebra/${params.slug}/thumb.png`,
          alt: metaData.description,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaData.tabtitle,
      description: metaData.description,
      images: [`${baseUrl}/linear_algebra/${params.slug}/thumb.png`],
    },
  };
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const ContentComponent =
    contentComponents[params.slug as keyof typeof contentComponents];
  const metaData = linearAlgebraMetadata[params.slug];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (!ContentComponent) {
    notFound();
  }

  return (
    <>
      <div style={{ padding: "20px" }}>
        <Breadcrumb
          items={[
            { name: "線形代数", href: `/${metaData.topic}` },
            {
              name: metaData.title,
              href: `/${metaData.topic}/${params.slug}`,
            },
          ]}
        />

        <Image
          src={`${basePath}/${metaData.topic}/${params.slug}/thumb.png`}
          alt={metaData.title}
          width={100}
          height={50}
          className="thumbpage"
        />
        <h1 className="title">{metaData.title}</h1>

        <div className="lastUpdated">
          最終更新日: {formatDate(metaData.lastUpdated)}
        </div>
        <p>{metaData.description}</p>

        {/* ページコンテンツ */}
        <ContentComponent />
        <hr />
        <div style={{ margin: "20px" }}>
          <h2 className="caption">コメントフォーム</h2>
          <div style={{ margin: "0px 10px" }}>
            <GoogleForm currentPath={`/linear_algebra/${params.slug}`} />
          </div>
        </div>
      </div>
    </>
  );
}
