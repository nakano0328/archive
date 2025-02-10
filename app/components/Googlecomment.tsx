"use client";

import React, { useEffect, useState } from "react";
import * as d3 from "d3";
import { DSVRowString } from "d3";
import { usePathname } from "next/navigation";

interface CommentData extends DSVRowString {
  Name: string;
  Mail: string;
  Timestamp: string;
  Comments: string;
  Path: string;
  Flag: string;
  display: string;
}

const Googlecomment: React.FC = () => {
  const [comments, setComments] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    d3.csv(
      "https://docs.google.com/spreadsheets/d/1CLZmo0gbXZXTiByCr9SMVAaRL4cmKkMljhEuj48Gt8o/export?format=csv&range=A3:G"
    )
      .then((data) => {
        const typedData = data as unknown as CommentData[];
        const filteredData = typedData.filter((item) => {
          const expectedPath = `app${pathname}`;
          return item.display === "1" && item.Path === expectedPath;
        });
        //filteredData.reverse(); // 逆順に表示する場合

        const replaceText = (text: string) => {
          return text.replace(/</g, "&lt;");
        };

        let text = "";
        filteredData.forEach((item, i) => {
          const timestamp = replaceText(item.Timestamp);
          const comment = replaceText(item.Comments);
          text += `<p>${
            i + 1
          }. 名前: <font color="008000"> 名無しのごんべ</font> ${timestamp}</p><pre style="white-space: pre-wrap; word-wrap: break-word; max-width: 100%;">${comment}</pre>`;
        });
        setComments(text);
      })
      .catch(() => {
        setComments("データの取得に失敗しました。");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [pathname]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div id="comments" dangerouslySetInnerHTML={{ __html: comments }} />;
};

export default Googlecomment;
