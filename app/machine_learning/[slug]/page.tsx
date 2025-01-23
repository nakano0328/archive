// app/machine_learning/[slug]/page.tsx
import { notFound } from "next/navigation";
import Breadcrumb from "@/app/components/Breadcrumb";
import { metadata as MachineLearningMetadata } from "@/app/machine_learning/metadata";
import GoogleForm from "@/app/components/GoogleForm";
import Image from "next/image";
import { formatDate } from "@/app/components/formatDate";
import Table from "@/app/components/Table";

import AutoencoderContent from "@/app/machine_learning/contents/autoencoder";
import AdamContent from "@/app/machine_learning/contents/adam";
import Gradient_DescentContent from "@/app/machine_learning/contents/gradient_descent";
import InformationEntropyContent from "@/app/machine_learning/contents/informationentropy";
import LinearRegressionContent from "@/app/machine_learning/contents/linearregression";
import ActivationFunctionContent from "@/app/machine_learning/contents/activationfunction";
import vanishinggradientContent from "@/app/machine_learning/contents/vanishinggradient";
import LogisticRegressionContent from "@/app/machine_learning/contents/logisticregression";
import BackPropagationContent from "@/app/machine_learning/contents/backpropagation";
import SupportVectorMachineContent from "@/app/machine_learning/contents/supportvectormachine";
import NeuralNetworksContent from "@/app/machine_learning/contents/neural_networks";
import DiffusionModelContent from "@/app/machine_learning/contents/diffusionmodel";
import GanContent from "@/app/machine_learning/contents/gan";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 静的に生成するパスのパラメータを定義
export async function generateStaticParams() {
  // metadataのキーから静的パスを生成
  return Object.keys(MachineLearningMetadata).map((slug) => ({
    slug: slug,
  }));
}

// ページコンポーネントのマッピング
const contentComponents = {
  autoencoder: AutoencoderContent,
  adam: AdamContent,
  gradient_descent: Gradient_DescentContent,
  informationentropy: InformationEntropyContent,
  linearregression: LinearRegressionContent,
  activationfunction: ActivationFunctionContent,
  vanishinggradient: vanishinggradientContent,
  logisticregression: LogisticRegressionContent,
  backpropagation: BackPropagationContent,
  supportvectormachine: SupportVectorMachineContent,
  neural_networks: NeuralNetworksContent,
  diffusionmodel: DiffusionModelContent,
  gan: GanContent,
  // 他のコンポーネントを追加
};

export async function generateMetadata(props: PageProps) {
  const params = await props.params;
  const metaData = MachineLearningMetadata[params.slug];

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
      url: `${baseUrl}/machine_learning/${params.slug}`,
      images: [
        {
          url: `${baseUrl}/machine_learning/${params.slug}/thumb.png`,
          alt: metaData.description,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaData.tabtitle,
      description: metaData.description,
      images: [`${baseUrl}/machine_learning/${params.slug}/thumb.png`],
    },
  };
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const ContentComponent =
    contentComponents[params.slug as keyof typeof contentComponents];
  const metaData = MachineLearningMetadata[params.slug];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  if (!ContentComponent) {
    notFound();
  }

  return (
    <>
      <div className="mainContainer">
        <Breadcrumb
          items={[
            { name: "機械学習", href: `/${metaData.topic}` },
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
        <hr />
        <h1 className="title">{metaData.title}</h1>

        <div className="lastUpdated">
          最終更新日: {formatDate(metaData.lastUpdated)}
        </div>
        <p>{metaData.description}</p>

        <Table />

        {/* ページコンテンツ */}
        <ContentComponent />
        <hr />
        <div style={{ margin: "20px" }}>
          <h2 className="commentform">コメントフォーム</h2>
          <div style={{ margin: "0px 10px" }}>
            <GoogleForm currentPath={`/machine_learning/${params.slug}`} />
          </div>
        </div>
        <div style={{ textAlign: "right", marginRight: "30px" }}>
          <a href="#">ページトップに戻る</a>
        </div>
      </div>
    </>
  );
}
