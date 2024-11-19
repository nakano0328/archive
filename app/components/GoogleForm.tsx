"use client";

import { useEffect, useState, useRef } from "react";

const GoogleForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [currentPath, setCurrentPath] = useState<string>("");

  // フォーム参照を取得
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // 現在のページパスを取得
    const path = window.location.pathname;
    setCurrentPath(path);
  }, []);

  const handleFormSubmit = () => {
    setSubmitted(true);

    // フォーム内容をリセット
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <div>
      {/* フォーム送信後のメッセージを表示 */}
      {submitted && (
        <div
          style={{
            backgroundColor: "#d4edda",
            color: "#155724",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          送信しました。ありがとうございます！
        </div>
      )}

      <form
        ref={formRef}
        action="https://docs.google.com/forms/d/e/1FAIpQLSerknIKtmj4M41TIierMy5s-jMwNdj92CzXXuCPfaeEn3t5yw/formResponse"
        target="hidden_iframe"
        method="post"
        onSubmit={(e) => {
          e.preventDefault(); // デフォルト動作を停止
          handleFormSubmit(); // フォーム送信処理
        }}
      >
        <p>
          <input
            name="entry.1814434943"
            placeholder="名前"
            defaultValue="名無しのごんべ"
            required
          />
        </p>
        <p>
          <input
            name="entry.238144512"
            placeholder="メールアドレス"
            type="email"
          />
        </p>
        <p>
          <textarea
            name="entry.911577316"
            placeholder="コメント"
            rows={10}
            cols={40}
            maxLength={400}
            required
          ></textarea>
        </p>
        {/* ページURLを隠しフィールドに送信 */}
        <input type="hidden" name="entry.2025028027" value={currentPath} />

        <input type="submit" id="submitbutton" value="送信" />
        <iframe
          onLoad={() => {
            if (submitted) {
              console.log("フォームが送信されました");
            }
          }}
          id="hidden_iframe"
          name="hidden_iframe"
          style={{ display: "none" }}
        ></iframe>
      </form>
    </div>
  );
};

export default GoogleForm;
