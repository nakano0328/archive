// app/linear_algebra/[slug]/page.tsx
import { notFound } from "next/navigation";
import { metadata as linearAlgebraMetadata } from "../metadata";
import DotProductContent from "../contents/DotProductContent";
import CrossProductContent from "../contents/CrossProductContent";

interface PageProps {
  params: {
    slug: string;
  };
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
  // 他のコンポーネントを追加
};

export async function generateMetadata({ params }: PageProps) {
  const metaData = linearAlgebraMetadata[params.slug];

  if (!metaData) {
    return {
      title: "Not Found",
      description: "Page not found",
    };
  }

  const baseUrl = "https://jeonglabo.github.io";

  return {
    title: metaData.title,
    description: metaData.description,
    openGraph: {
      title: metaData.title,
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
      title: metaData.title,
      description: metaData.description,
      images: [`${baseUrl}/linear_algebra/${params.slug}/thumb.png`],
    },
  };
}

export default function Page({ params }: PageProps) {
  const ContentComponent =
    contentComponents[params.slug as keyof typeof contentComponents];

  if (!ContentComponent) {
    notFound();
  }

  return <ContentComponent />;
}
