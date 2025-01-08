import React, { useState, useEffect, useRef } from "react";
import styles from "@/app/components/chatbot.module.css";
import { getBotResponse } from "@/app/utils/botResponses";
import "katex/dist/katex.min.css";
import { InlineMath } from "react-katex";

interface Message {
  text: string;
  isBot: boolean;
}

const ChatBot: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "こんにちは！このチャットでのやり取りは、サービス向上やサイト改善のために匿名化して活用させていただきます。安心してご利用ください😊",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    // ユーザーメッセージを追加
    const userMessage = { text: input, isBot: false };
    setMessages((prev) => [...prev, userMessage]);

    // ボットの応答を取得
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      const botMessage = { text: botResponse, isBot: true };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);

    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className={styles.popup}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>チャットアシスタント</h3>
          <button onClick={onClose}>&times;</button>
        </div>
        <div className={styles.messages}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={message.isBot ? styles.botmessage : styles.usermessage}
            >
              {message.text.split("$").map((part, i) => {
                if (i % 2 === 1) {
                  return <InlineMath key={i} math={part} />;
                } else {
                  const linkRegex = /\[\[(.*?)\]\]\((.*?)\)/g;
                  const segments = part.split(linkRegex);
                  return segments.map((segment, j) => {
                    if (j % 3 === 1) {
                      return (
                        <a
                          className={styles.messagelink}
                          key={j}
                          href={segments[j + 1]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {segment}
                        </a>
                      );
                    } else if (j % 3 === 2) {
                      return null;
                    } else {
                      return segment;
                    }
                  });
                }
              })}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className={styles.input}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="メッセージを入力..."
          />
          <button onClick={handleSend}>送信</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
