"use client";

import { useState } from "react";

const GoogleForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const NGComments = ["死ね", "バカ", ".exe"]; // 簡易的なNGワードの設定
  const regex = new RegExp(NGComments.join("|"));

  const test = (wcheck: string): boolean => {
    if (wcheck.match(regex) !== null) {
      alert("ERROR: コメントにNGワードが含まれています");
      return false;
    }

    const submitButton = document.getElementById(
      "submitbutton"
    ) as HTMLInputElement;
    if (submitButton) submitButton.disabled = true;

    const textareas = document.getElementsByTagName("textarea");
    for (let i = 0; i < textareas.length; i++) {
      textareas[i].value = textareas[i].value.replace(/</g, "&lt;");
    }

    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = inputs[i].value.replace(/</g, "&lt;");
    }

    setSubmitted(true);
    return true;
  };

  return (
    <form
      action="https://docs.google.com/forms/d/e/1FAIpQLSerknIKtmj4M41TIierMy5s-jMwNdj92CzXXuCPfaeEn3t5yw/formResponse"
      target="hidden_iframe"
      method="post"
      onSubmit={(e) => {
        e.preventDefault();
        const wcheck = (
          document.getElementById("wcheck") as HTMLTextAreaElement
        ).value;
        if (test(wcheck)) {
          (e.target as HTMLFormElement).submit();
        }
      }}
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
          id="wcheck"
          required
        ></textarea>
      </p>
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
