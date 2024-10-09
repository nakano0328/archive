import React from "react";

const Header = () => {
  return (
    <header>
      {/* サイトタイトルをリンクにする */}
      <h1>
        <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
          数学の探求
        </a>
      </h1>
    </header>
  );
};

export default Header;
