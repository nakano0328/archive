"use client";
import React from "react";

function MainComponent() {
  return (
    <div className="font-sans bg-white min-h-screen flex">
      <main className="w-3/4 p-4">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-[#E6E6FA] h-20"></div>
          <h1 className="relative text-4xl font-bold text-[#4A00E0] mb-2 text-center">
            MathPass
          </h1>
          <p className="relative text-lg text-black text-center">
            このサイトでは、数学の基礎から応用までをカバーします。
          </p>
        </div>
        <p className="text-sm text-gray-500 mb-4 text-right">
          最終更新日: 2024年3月15日
        </p>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-[#4e54c8]">
            解説ページ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 shadow-md rounded p-4">
              <img
                src="path/to/algebra-thumbnail.jpg"
                alt="代数のサムネイル"
                className="mb-4 w-full h-[150px] object-cover rounded"
              />
              <h3 className="text-xl font-bold text-black">代数</h3>
              <p className="text-black mb-2">数と文字を使った数式による表現</p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-[#E6E6FA] text-[#4A00E0] px-2 py-1 text-sm rounded">
                  代数
                </span>
                <span className="bg-[#E6E6FA] text-[#4A00E0] px-2 py-1 text-sm rounded">
                  計算
                </span>
              </div>
            </div>
            <div className="bg-gray-100 shadow-md rounded p-4">
              <img
                src="path/to/linear-algebra-thumbnail.jpg"
                alt="線形代数のサムネイル"
                className="mb-4 w-full h-[150px] object-cover rounded"
              />
              <h3 className="text-xl font-bold text-black">線形代数</h3>
              <p className="text-black mb-2">ベクトルと行列に関する数学概念</p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-[#E6E6FA] text-[#4A00E0] px-2 py-1 text-sm rounded">
                  線形代数
                </span>
                <span className="bg-[#E6E6FA] text-[#4A00E0] px-2 py-1 text-sm rounded">
                  ベクトル
                </span>
              </div>
            </div>
            <div className="bg-gray-100 shadow-md rounded p-4">
              <img
                src="path/to/geometry-thumbnail.jpg"
                alt="幾何学のサムネイル"
                className="mb-4 w-full h-[150px] object-cover rounded"
              />
              <h3 className="text-xl font-bold text-black">幾何学</h3>
              <p className="text-black mb-2">図形とその性質についての研究</p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-[#E6E6FA] text-[#4A00E0] px-2 py-1 text-sm rounded">
                  幾何学
                </span>
                <span className="bg-[#E6E6FA] text-[#4A00E0] px-2 py-1 text-sm rounded">
                  図形
                </span>
              </div>
            </div>
            <div className="bg-gray-100 shadow-md rounded p-4">
              <img
                src="path/to/calculus-thumbnail.jpg"
                alt="微積分のサムネイル"
                className="mb-4 w-full h-[150px] object-cover rounded"
              />
              <h3 className="text-xl font-bold text-black">微積分</h3>
              <p className="text-black mb-2">関数の変化と積分に関する理論</p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-[#E6E6FA] text-[#4A00E0] px-2 py-1 text-sm rounded">
                  微積分
                </span>
                <span className="bg-[#E6E6FA] text-[#4A00E0] px-2 py-1 text-sm rounded">
                  関数
                </span>
              </div>
            </div>
            <div className="bg-gray-100 shadow-md rounded p-4">
              <img
                src="path/to/statistics-thumbnail.jpg"
                alt="統計のサムネイル"
                className="mb-4 w-full h-[150px] object-cover rounded"
              />
              <h3 className="text-xl font-bold text-black">統計</h3>
              <p className="text-black mb-2">データの収集と分析の方法</p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-[#E6E6FA] text-[#4A00E0] px-2 py-1 text-sm rounded">
                  統計
                </span>
                <span className="bg-[#E6E6FA] text-[#4A00E0] px-2 py-1 text-sm rounded">
                  データ
                </span>
              </div>
            </div>
            <div className="bg-gray-100 shadow-md rounded p-4">
              <img
                src="path/to/probability-thumbnail.jpg"
                alt="確率論のサムネイル"
                className="mb-4 w-full h-[150px] object-cover rounded"
              />
              <h3 className="text-xl font-bold text-black">確率論</h3>
              <p className="text-black mb-2">偶然性の数学的な研究</p>
              <div className="flex flex-wrap gap-1">
                <span className="bg-[#E6E6FA] text-[#4A00E0] px-2 py-1 text-sm rounded">
                  確率論
                </span>
                <span className="bg-[#E6E6FA] text-[#4A00E0] px-2 py-1 text-sm rounded">
                  偶然
                </span>
              </div>
            </div>
          </div>
        </section>
        <div className="flex justify-center items-center mt-8 mb-16">
          <div className="flex gap-4 bg-[#F3F4F6] px-4 py-2 rounded">
            <button className="text-[#4A00E0]">前のページ</button>
            <div className="flex gap-2">
              <span className="bg-white text-gray-600 px-2 py-1 rounded">
                1
              </span>
              <span className="bg-white text-black px-2 py-1 rounded font-bold">
                2
              </span>
              <span className="bg-white text-[#4A00E0] px-2 py-1 rounded">
                3
              </span>
              <span className="bg-white text-[#4A00E0] px-2 py-1 rounded">
                4
              </span>
            </div>
            <button className="text-[#4A00E0]">次のページ</button>
          </div>
        </div>
        <section
          id="profile"
          className="mb-8 p-4 bg-gray-100 shadow-md rounded"
        >
          <h2 className="text-2xl font-semibold mb-3 text-[#4e54c8]">
            編集者プロフィール
          </h2>
          <p className="text-black">
            山田太郎 - 数学教育歴15年の経験豊富な講師です。
          </p>
        </section>
        <section
          id="contact"
          className="mb-8 p-4 bg-gray-100 shadow-md rounded"
        >
          <h2 className="text-2xl font-semibold mb-3 text-[#4e54c8]">
            お問い合わせ
          </h2>
          <p className="text-black">Email: contact@math-learning.com</p>
          <p className="text-black">電話: 03-1234-5678</p>
        </section>
      </main>
      <aside className="w-1/4 p-4 bg-gray-100 shadow-md">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">サイト内検索</h2>
          <input
            type="text"
            placeholder="検索キーワードを入力"
            className="w-full p-2 border rounded"
          />
          <button className="mt-2 bg-[#4A00E0] text-white p-2 rounded w-full">
            検索
          </button>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">タグ検索</h2>
          <div className="flex flex-wrap gap-2">
            <a
              href="#algebra"
              className="bg-[#E6E6FA] text-[#4A00E0] px-2 py-1 rounded"
            >
              代数
            </a>
            <a
              href="#linear-algebra"
              className="bg-[#E6E6FA] text-[#4A00E0] px-2 py-1 rounded"
            >
              線形代数
            </a>
            <button className="bg-[#E6E6FA] text-[#4A00E0] px-2 py-1 rounded">
              幾何学
            </button>
            <button className="bg-[#E6E6FA] text-[#4A00E0] px-2 py-1 rounded">
              微積分
            </button>
            <button className="bg-[#E6E6FA] text-[#4A00E0] px-2 py-1 rounded">
              統計
            </button>
          </div>
        </div>
        <nav className="text-left">
          <h2 className="text-xl font-semibold mb-3">リンク集</h2>
          <ul className="list-none">
            <li className="mb-2">
              <a href="#profile" className="text-[#4e54c8]">
                プロフィール
              </a>
            </li>
            <li>
              <a href="#contact" className="text-[#4e54c8]">
                お問い合わせ
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default MainComponent;