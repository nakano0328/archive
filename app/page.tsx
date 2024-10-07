"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Home = () => {
  const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // パンくずリストを生成する関数
  useEffect(() => {
    const pathArray = window.location.pathname.split("/").filter(Boolean);
    const breadcrumbItems = ["ホーム", ...pathArray];
    setBreadcrumbs(breadcrumbItems);
  }, []);

  // ダミーデータとして、タグリストをセット
  useEffect(() => {
    const dummyTags = ["代数", "線形代数", "幾何学", "統計", "確率論"];
    setTags(dummyTags);
  }, []);

  // タグが選択されたときの処理
  const handleTagClick = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  // 選択されたタグを削除する処理
  const removeTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  return (
    <div>
      <header>
        <h1>
          <a href="@/app">Mathlium</a>
        </h1>
        <p>このサイトでは、数学の基礎から応用までをカバーします。</p>
      </header>

      {/* パンくずリスト */}
      <nav aria-label="breadcrumb">
        <div className="breadcrumb-container">
          <ul className="breadcrumb">
            {breadcrumbs.map((crumb, index) => (
              <li key={index}>
                {index === breadcrumbs.length - 1 ? (
                  crumb
                ) : (
                  <Link href={`/${crumb}`}>{crumb}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* タグ検索 */}
      <div className="tag-search">
        <h3>タグ検索</h3>
        <div>
          {tags.map((tag, index) => (
            <button key={index} onClick={() => handleTagClick(tag)}>
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* 選択されたタグ */}
      <div id="selected-tags" className="selected-tags">
        <h3>選択されたタグ</h3>
        {selectedTags.map((tag, index) => (
          <span key={index} className="tag">
            {tag} <button onClick={() => removeTag(tag)}>×</button>
          </span>
        ))}
      </div>

      {/* リンク集 */}
      <div className="links">
        <h3>リンク集</h3>
        <ul>
          <li>
            <Link href="/editor_profile">プロフィール</Link>
          </li>
          <li>
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </div>

      <footer>
        <p>編集者プロフィール: 山田太郎 - 数学教育歴15年の経験豊富な講師です。</p>
        <p>お問い合わせ: Email: mathlium@example.com 電話: 03-1234-5678</p>
      </footer>
    </div>
  );
};

export default Home;
