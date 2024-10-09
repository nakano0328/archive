import React from "react";
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      {/* サイトタイトルをリンクにする */}
      <h1>
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          数理とシンフォニー
        </Link>
      </h1>
    </header>
  );
};

export default Header;
