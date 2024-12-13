// types.ts
type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
};

// components/Pagination.tsx
import Link from "next/link";
import styles from "./Pagination.module.css";

export function Pagination({
  currentPage,
  totalPages,
  basePath,
}: PaginationProps) {
  return (
    <nav className={styles.pagination}>
      {currentPage > 1 && (
        <Link
          href={`${basePath}/linear_algebra?page=${currentPage - 1}`}
          className={styles.pageLink}
        >
          前へ
        </Link>
      )}

      <span className={styles.pageInfo}>
        {currentPage} / {totalPages}
      </span>

      {currentPage < totalPages && (
        <Link
          href={`${basePath}/linear_algebra?page=${currentPage + 1}`}
          className={styles.pageLink}
        >
          次へ
        </Link>
      )}
    </nav>
  );
}
