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

