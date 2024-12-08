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
      className='breadcrumb'
    >
      <ol
        style={{
          listStyle: "none",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          margin: 0,
          padding: "10px 10px 5px",
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
            <span style={{ margin: '0px 8px', width: '0', height: '0', borderTop: '5px solid transparent', borderBottom: '5px solid transparent', borderLeft: '10px solid black' }} />

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
