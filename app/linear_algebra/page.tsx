// app/linear_algebra/page.tsx

export const metadata = {
  title: 'Linear Algebra',
  description: 'Overview of linear algebra topics.',
};

export default function LinearAlgebraPage() {
  const pages = [
    {
      name: 'Dot Product',
      description: 'This page explains the dot product in linear algebra.',
      path: '/linear_algebra/dotproduct',
    },
    // 他のページもここに追加する
    {
      name: 'Another Page',
      description: 'Description for another page.',
      path: '/linear_algebra/anotherpage', // 実際のページのパス
    },
  ];

  return (
    <div>
      <h1>Linear Algebra Pages</h1>
      <ul>
        {pages.map((page, index) => (
          <li key={index}>
            <a href={page.path}>
              {page.name} - {page.description}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
