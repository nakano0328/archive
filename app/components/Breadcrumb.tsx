import Link from "next/link";
import styles from "./Breadcrumb.module.css";

interface BreadcrumbProps {
  items: {
    name: string;
    href: string;
  }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="パンくずリスト" className={styles.breadcrumb}>
      <ol className={styles.breadcrumbList}>
        {/* ホーム文字 */}
        <li className={styles.breadcrumbItem}>
          <Link href="/" className={styles.breadcrumbLink}>
            ホーム
          </Link>
        </li>

        {/* 他のパンくずアイテム */}
        {items.map((item, index) => (
          <li key={index} className={styles.breadcrumbItem}>
            <span className={styles.separator} />
            <Link href={item.href} className={styles.breadcrumbLink}>
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
