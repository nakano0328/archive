// app/linear_algebra/page.tsx
import { useEffect, useState } from 'react';
import fs from 'fs';
import path from 'path';

export default function LinearAlgebraPage() {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    // ディレクトリ内のファイルを読み取る関数
    const fetchPages = async () => {
      const directory = path.join(process.cwd(), 'app/linear_algebra');
      const dirs = fs.readdirSync(directory, { withFileTypes: true });

      const pageComponents = dirs
        .filter((dir) => dir.isDirectory()) // ディレクトリのみをフィルタリング
        .map((dir) => {
          const pagePath = path.join(directory, dir.name, 'page.tsx');
          if (fs.existsSync(pagePath)) {
            const meta = require(`${directory}/${dir.name}/page.tsx`).metadata;
            return { name: dir.name, meta, path: `/linear_algebra/${dir.name}` };
          }
        })
        .filter(Boolean); // 空の値を削除

      setPages(pageComponents);
    };

    fetchPages();
  }, []);

  return (
    <div>
      <h1>Linear Algebra Pages</h1>
      <ul>
        {pages.map((page, index) => (
          <li key={index}>
            <a href={page.path}>
              {page.meta.title} - {page.meta.description}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
