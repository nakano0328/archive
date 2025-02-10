import React from "react";
import Link from "next/link";
import { siteTitle } from "@/app/metadata";

const Header = () => {
  return (
    <header>
      {/* サイトタイトルをリンクにする */}
      <h1>
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          {siteTitle}
        </Link>
      </h1>
    </header>
  );
};

export default Header;
