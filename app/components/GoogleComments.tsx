"use client";

import React, { useEffect, useState } from "react";

// スプレッドシートIDと範囲を指定します
const sheetId = "1FAIpQLSerknIKtmj4M41TIierMy5s-jMwNdj92CzXXuCPfaeEn3t5yw";
const range = "A3:D";
const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&range=${range}`;

// GoogleCommentsコンポーネント
const GoogleComments: React.FC = () => {
  const [rows, setRows] = useState<string[][]>([]); // 取得したCSVデータを保存

  // データ取得関数
  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const csvText = await response.text();
        const dataRows = csvText.split("\n").map((row) => row.split(","));
        setRows(dataRows); // データを保存
      } catch (error) {
        console.error("Error fetching the sheet data:", error);
      }
    };

    fetchSheetData();
  }, []);

  return (
    <div>
      <h2>Google Sheet Comments</h2>
      {rows.length === 0 ? (
        <p>Loading...</p> // データを読み込むまで待機メッセージを表示
      ) : (
        <table>
          <thead>
            <tr>
              {rows[0].map((header, index) => (
                <th key={index}>{header}</th> // ヘッダーの表示
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td> // 各行のデータを表示
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default GoogleComments;
