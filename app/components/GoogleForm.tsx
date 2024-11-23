"use client";

import React, { useRef, useState } from "react";

interface GoogleFormProps {
  currentPath: string; // サーバーから取得する
}

const GoogleForm: React.FC<GoogleFormProps> = ({ currentPath }) => {
  const [showMessage, setShowMessage] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowMessage(true);

    // フォームの送信
    e.currentTarget.submit();

    // フォームをリセット
    formRef.current?.reset();
  };

  return (
    <div className="space-y-4">
      {showMessage && (
        <div
          className="p-4 mb-4 text-green-700 bg-green-100 rounded-lg"
          style={{
            backgroundColor: "#d4edda",
            color: "#155724",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          送信が完了しました。ありがとうございます。
        </div>
      )}

      <form
        ref={formRef}
        action="https://docs.google.com/forms/d/e/1FAIpQLSerknIKtmj4M41TIierMy5s-jMwNdj92CzXXuCPfaeEn3t5yw/formResponse"
        target="hidden_iframe"
        method="post"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <p>
          <input
            name="entry.1814434943"
            placeholder="名前"
            defaultValue="名無しのごんべ"
            required
            className="w-full p-2 border rounded"
          />
        </p>
        <p>
          <input
            name="entry.238144512"
            placeholder="メールアドレス"
            type="email"
            className="w-full p-2 border rounded"
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
            className="w-full p-2 border rounded"
          ></textarea>
        </p>
        <input type="hidden" name="entry.2025028027" value={currentPath} />

        <input
          type="submit"
          id="submitbutton"
          value="送信"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
        />
      </form>

      <iframe
        id="hidden_iframe"
        name="hidden_iframe"
        style={{ display: "none", border: "none" }}
        width="0"
        height="0"
      />
    </div>
  );
};

export default GoogleForm;
