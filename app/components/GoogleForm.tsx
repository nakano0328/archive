"use client";

import { useEffect, useState } from "react";

const GoogleForm = () => {
  const [submitted, setSubmitted] = useState(false);
  //const [currentPageUrl, setCurrentPageUrl] = useState<string>("");
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    // 現在のページURLを取得
    //const url = window.location.href;
    //setCurrentPageUrl(url);

    // 現在のページパスを取得
    const path = window.location.pathname;
    setCurrentPath(path);
  }, []);

  return (
    <form
      action="https://docs.google.com/forms/d/e/1FAIpQLSerknIKtmj4M41TIierMy5s-jMwNdj92CzXXuCPfaeEn3t5yw/formResponse"
      target="hidden_iframe"
      method="post"
      onSubmit={() => setSubmitted(true)}
    >
      <p>
        <input
          name="entry.1814434943"
          placeholder="名前"
          defaultValue="名無し"
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
      {/*
      <input type="hidden" name="entry.2025028027" value={currentPageUrl} />
      */}
      <input type="hidden" name="entry.2025028027" value={currentPath} />

      <input type="submit" id="submitbutton" value="送信" />
      <iframe
        onLoad={() => {
          if (submitted) {
            window.location.reload();
          }
        }}
        id="hidden_iframe"
        name="hidden_iframe"
        style={{ display: "none" }}
      ></iframe>
    </form>
  );
};

export default GoogleForm;
