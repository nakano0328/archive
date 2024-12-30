import Breadcrumb from "@/app/components/Breadcrumb";
import { metadata as topicsMetadata } from "@/app/machine_learning/metadata"; // コンテンツのメタデータをインポート
import { siteTitle } from "@/app/metadata";
import Pagination from "@/app/components/Pagination_machine_learning";

// ページのメタデータ（ブラウザのタイトル設定など）
export const metadata = {
  title: `機械学習 - ${siteTitle}`,
};

export default function LinearAlgebraContents() {
  const topics = Object.keys(topicsMetadata);

  // 最終更新日順にソート
  const sortedTopics = topics.sort((a, b) => {
    const dateA = new Date(topicsMetadata[a].lastUpdated).getTime();
    const dateB = new Date(topicsMetadata[b].lastUpdated).getTime();
    return dateB - dateA;
  });

  return (
    <>
      <div style={{ padding: "20px" }}>
        {/* Breadcrumbの表示 */}
        <Breadcrumb items={[{ name: "機械学習", href: "/machine_learning" }]} />

        <Pagination
          items={sortedTopics}
          itemsPerPage={12}
          topicsMetadata={topicsMetadata}
        />
      </div>
      <div style={{ textAlign: "right", marginRight: "30px" }}>
        <a href="#">ページトップに戻る</a>
      </div>
    </>
  );
}
