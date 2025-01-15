import Breadcrumb from "@/app/components/Breadcrumb";
import { metadata as topicsMetadata } from "@/app/linear_algebra/metadata";
import { siteTitle } from "@/app/metadata";
import Pagination from "@/app/components/Pagination";

// metadataBaseの設定を追加
export const metadata = {
  title: `線形代数 - ${siteTitle}`,
};

export default function LinearAlgebraContents() {
  const topics = Object.keys(topicsMetadata);

  const sortedTopics = topics.sort((a, b) => {
    const dateA = new Date(topicsMetadata[a].lastUpdated).getTime();
    const dateB = new Date(topicsMetadata[b].lastUpdated).getTime();
    return dateB - dateA;
  });

  return (
    <>
      <div className="mainContainer">
        <Breadcrumb items={[{ name: "線形代数", href: "/linear_algebra" }]} />
        <Pagination
          items={sortedTopics}
          itemsPerPage={12}
          topicsMetadata={topicsMetadata}
          title="linear_algebra"
        />
      </div>
      <div style={{ textAlign: "right", marginRight: "30px" }}>
        <a href="#">ページトップに戻る</a>
      </div>
    </>
  );
}
