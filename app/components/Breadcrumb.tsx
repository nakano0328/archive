interface BreadcrumbProps {
  serverData: {
    [key: string]: { title: string };
  };
}

export default function Breadcrumb({ serverData }: BreadcrumbProps) {
  const breadcrumbItems = Object.keys(serverData).map((key) => ({
    title: serverData[key].title,
    href: `/${key}`,
  }));

  return (
    <nav aria-label="パンくずリスト">
      <ol>
        {breadcrumbItems.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.title}</a>
            {index < breadcrumbItems.length - 1 && ' / '}
          </li>
        ))}
      </ol>
    </nav>
  );
}
