"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./chatbot.module.css";

interface Message {
  text: string;
  isBot: boolean;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "RAGチャットアシスタントです。質問を入力してください。",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await fetch(`/api/rag?q=${encodeURIComponent(input)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        console.error('Server response:', await res.text());
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      if (!data || !data.answer) {
        throw new Error('Invalid response format');
      }

      const botMessage = {
        text: data.answer,
        isBot: true,
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error details:', error);
      const errorMessage = { text: "エラーが発生しました。", isBot: true };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setLoading(false);
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
        </div>
        <div className={styles.messages}>
          {messages.map((message, index) => (
            <div
              key={index}
              className={message.isBot ? styles.botmessage : styles.usermessage}
            >
              {message.text}
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
            placeholder="質問を入力してください..."
          />
          <button onClick={handleSend} disabled={loading}>
            {loading ? "検索中..." : "送信"}
          </button>
        </div>
      </div>
    </div>
  );
}
