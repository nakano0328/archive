import { siteTitle } from "@/app/metadata";
import GoogleForm from "@/app/components/GoogleForm";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const metadata = {
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",

  title: `お問い合わせについて - ${siteTitle}`,
  description: "お問い合わせについての概要が書かれています。",
  openGraph: {
    title: `お問い合わせについて - ${siteTitle}`,
    description: "お問い合わせについての概要が書かれています。",
    url: "https://jeonglabo.github.io/nextjs/policy",
    images: [
      {
        url: `${basePath}/icon.png`,
        alt: "本サイトのアイコン",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `お問い合わせについて - ${siteTitle}`,
    description: "お問い合わせについての概要が書かれています。",
    images: [`${basePath}/icon.png`],
  },
};

export default async function Page(props: PageProps) {
  const params = await props.params;

  return (
    <>
      <div style={{ marginTop: "2rem" }}>
        <h2 className="title">お問い合わせについて</h2>
      </div>

      <div className="lastUpdated">最終更新日: 2025/01/22</div>

      <h2 className="caption">問い合わせ</h2>
      <p>
        本サイトに関する問い合わせは、以下のメールアドレスまでお願いいたします。
        <br />
        <br />
        XXX【at】example.com
        <br />
        (【at】を@に変更してください)
      </p>
      <p>また、以下のコメントフォームからコメントを頂けます。</p>

      <div style={{ margin: "5px" }}>
        <h2 className="commentform">コメントフォーム</h2>
        <div style={{ margin: "0px 10px" }}>
          <GoogleForm currentPath={`/${params.slug}`} underComment={false} />
        </div>
      </div>
    </>
  );
}
