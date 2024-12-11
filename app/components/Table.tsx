"use client";

import React, { useEffect, useState } from "react";
import styles from "./Table.module.css"; // CSSモジュールのインポート

type Heading = {
  id: string;
  text: string;
  level: number;
};

interface TableOfContentsProps {
  contentRef: React.RefObject<HTMLElement>;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ contentRef }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    if (contentRef?.current) {
      const extractedHeadings = Array.from(
        contentRef.current.querySelectorAll("h1, h2, h3, h4, h5, h6")
      ).map((heading) => ({
        id:
          heading.id ||
          heading.textContent?.trim().toLowerCase().replace(/\s+/g, "-") ||
          "",
        text: heading.textContent || "",
        level: parseInt(heading.tagName.replace("H", ""), 10),
      }));

      setHeadings(extractedHeadings);
    }
  }, [contentRef]);

  const handleClick = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav aria-label="目次">
      <ul className={styles.tableOfContents}>
        {headings.map(({ id, text, level }) => (
          <li key={id} style={{ marginLeft: `${(level - 1) * 1.5}rem` }}>
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(id);
              }}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContents;
