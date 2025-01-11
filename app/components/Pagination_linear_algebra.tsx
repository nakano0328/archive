"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import Card2 from "@/app/components/Card2";
import { formatDate } from "@/app/components/formatDate";
import Image from "next/image";
import styles from "@/app/components/Pagination.module.css";

interface TopicMetadata {
  [key: string]: {
    title: string;
    lastUpdated: string;
    description: string;
    // 他の必要なフィールドを追加
  };
}

interface PaginationProps {
  items: string[];
  itemsPerPage: number;
  topicsMetadata: TopicMetadata;
}

export default function Pagination({
  items,
  itemsPerPage,
  topicsMetadata,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const handlePageChange = (pageNumber: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", pageNumber.toString());
    router.push(`/linear_algebra?${params.toString()}`);
  };

  return (
    <>
      <div className={styles.paginationgrid}>
        {currentItems.map((topic) => (
          <Link
            key={topic}
            href={`/linear_algebra/${topic}`}
            style={{ textDecoration: "none" }}
          >
            <Card2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div className={styles.mobileLayout}>
                  {/* サムネイル画像の読み込み */}
                  <Image
                    src={`${basePath}/linear_algebra/${topic}/thumb.png`}
                    alt={topicsMetadata[topic].title}
                    width={100} // 横幅はそのまま
                    height={100} // 必須だが実際のスタイルに影響しない
                    className={styles.thumb}
                  />
                  <div className={styles.linkText}>
                    <p className={styles.title}>
                      {topicsMetadata[topic].title}
                    </p>
                    <p className={styles.description}>
                      {topicsMetadata[topic].description}
                    </p>
                  </div>
                </div>
                {/* 最終更新日を右下に配置 */}
                <div className={styles.lastUpdated}>
                  最終更新日: {formatDate(topicsMetadata[topic].lastUpdated)}
                </div>
              </div>
            </Card2>
          </Link>
        ))}
      </div>

      {/* ページネーションコントロール */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          gap: "10px",
        }}
      >
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            style={{
              padding: "8px 12px",
              border:
                currentPage === page ? "2px solid #007bff" : "1px solid #ddd",
              backgroundColor: currentPage === page ? "#007bff" : "white",
              color: currentPage === page ? "white" : "black",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            {page}
          </button>
        ))}
      </div>
    </>
  );
}
