interface BreadcrumbProps {
  items: {
    name: string;
    href: string;
  }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="パンくずリスト">
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.name}</a>
            {index < items.length - 1 && ' / '}
          </li>
        ))}
      </ol>
    </nav>
  );
}
