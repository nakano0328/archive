import { Suspense } from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import { metadata as topicsMetadata } from "@/app/machine_learning/metadata";
import { siteTitle } from "@/app/metadata";
import Pagination from "@/app/components/Pagination";

export const metadata = {
  title: `機械学習 - ${siteTitle}`,
};

export default function MachineLearningContents() {
  const topics = Object.keys(topicsMetadata);

  const sortedTopics = topics.sort((a, b) => {
    const dateA = new Date(topicsMetadata[a].lastUpdated).getTime();
    const dateB = new Date(topicsMetadata[b].lastUpdated).getTime();
    return dateB - dateA;
  });

  return (
    <>
      <div className="mainContainer">
        <Breadcrumb items={[{ name: "機械学習", href: "/machine_learning" }]} />
        <Suspense fallback={<div>Loading...</div>}>
          <Pagination
            items={sortedTopics}
            itemsPerPage={12}
            topicsMetadata={topicsMetadata}
            title="machine_learning"
          />
        </Suspense>
      </div>
      <div style={{ textAlign: "right", marginRight: "30px" }}>
        <a href="#">ページトップに戻る</a>
      </div>
    </>
  );
}
