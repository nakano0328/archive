import Link from "next/link";

interface BreadcrumbProps {
  items: {
    name: string;
    href: string;
  }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="パンくずリスト"
      style={{ backgroundColor: "#ffffff", padding: "10px", border: "1px solid #b0b0b0" }}
    >
      <ol
        style={{
          listStyle: "none",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          margin: 0,
          padding: 0,
        }}
      >
        {/* ホーム文字 */}
        <li>
          <Link href="/" style={{ color: "#000000", textDecoration: "none" }}>
            ホーム
          </Link>
        </li>

        {/* 他のパンくずアイテム */}
        {items.map((item, index) => (
          <li
            key={index}
            style={{ display: "flex", alignItems: "center", color: "#000000" }}
          >
            <span style={{ margin: "0 8px" }}>›</span>
            <Link
              href={item.href}
              style={{ color: "#000000", textDecoration: "none" }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
