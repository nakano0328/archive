'use client';

import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// パス名と表示する名前を対応させるマッピング
const breadcrumbMap: { [key: string]: string } = {
  'linear_algebra': '線形代数',
  'dotproduct': '内積',
  // 必要に応じて他のパスと名前も追加できます
  // 'another_path': 'Another Display Name',
};

export default function Breadcrumb() {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<Array<{ name: string, href: string }>>([]);

  useEffect(() => {
    if (router) {
      // パスを分割して各階層に対するパンくずリストを生成
      const pathArray = router.asPath.split('/').filter((path) => path);
      const breadcrumbList = pathArray.map((path, index) => {
        const href = '/' + pathArray.slice(0, index + 1).join('/');
        const name = breadcrumbMap[path] || path; // パスに対応する名前がない場合、そのままパスを表示
        return { name, href };
      });

      // ホームを追加
      setBreadcrumbs([{ name: 'ホーム', href: ' > ' }, ...breadcrumbList]);
    }
  }, [router]);

  return (
    <nav aria-label="パンくずリスト">
      <ol>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index}>
            <Link href={breadcrumb.href}>{breadcrumb.name}</Link>
            {index < breadcrumbs.length - 1 && ' > '}
          </li>
        ))}
      </ol>
    </nav>
  );
}
