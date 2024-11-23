// app/linear_algebra/[slug]/page.tsx
import { notFound } from "next/navigation";
import { metadata as linearAlgebraMetadata } from "@/app/linear_algebra/metadata";
import DotProductContent from "@/app/linear_algebra/contents/DotProductContent";
import CrossProductContent from "@/app/linear_algebra/contents/CrossProductContent";
import GoogleForm from "@/app/components/GoogleForm";

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

  if (!ContentComponent) {
    notFound();
  }

  return (
    <>
      <ContentComponent />
      <hr />
      <div style={{ margin: "20px" }}>
        <h1>コメントフォーム</h1>
        <div style={{ margin: "0px 10px" }}>
          <GoogleForm currentPath={`/linear_algebra/${params.slug}`} />
        </div>
      </div>
    </>
  );
}
