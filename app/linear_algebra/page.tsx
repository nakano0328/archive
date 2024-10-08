import Breadcrumb from '@/app/components/Breadcrumb';
import Link from 'next/link'; // Linkをインポート

export default function LinearAlgebraPage() {
  return (
    <div>
      {/* Breadcrumbの表示 */}
      <Breadcrumb
        items={[
          { name: 'ホーム', href: '@/app/' },
          { name: '線形代数', href: '@/app/linear_algebra' },
        ]}
      />

      {/* ページタイトル */}
      <h1>線形代数</h1>

      {/* コンテンツの説明 */}
      <p>ここでは線形代数のさまざまなトピックについて説明します。各トピックを選択して詳細を確認してください。</p>

      {/* 内積ページへのリンク */}
      <div>
        <h2>トピック</h2>
        <ul>
          <li>
            <Link href="/linear_algebra/dotproduct">
              内積の説明を見る
            </Link>
          </li>
          <li>
            <Link href="/linear_algebra/crossproduct">
              外積について
            </Link>
          </li>
          {/* 他のトピックへのリンクも追加可能 */}
          {/* <li><Link href="/linear_algebra/other_topic">他のトピック</Link></li> */}
        </ul>
      </div>
    </div>
  );
}
