import Breadcrumb from "@/app/components/Breadcrumb";
import { metadata as topicsMetadata } from "@/app/linear_algebra/metadata"; // コンテンツのメタデータをインポート
import { siteTitle } from "@/app/metadata";
import Pagination from "@/app/components/Pagination_linear_algebra";

// ページのメタデータ（ブラウザのタイトル設定など）
export const metadata = {
  title: `線形代数 - ${siteTitle}`,
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
        <Breadcrumb items={[{ name: "線形代数", href: "/linear_algebra" }]} />

        <Pagination
          items={sortedTopics}
          itemsPerPage={6}
          topicsMetadata={topicsMetadata}
        />
      </div>
      <div style={{ textAlign: "right", marginRight: "30px" }}>
        <a href="#">ページトップに戻る</a>
      </div>
    </>
  );
}
