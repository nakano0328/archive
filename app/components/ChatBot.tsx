import React, { useState } from 'react';
import styles from "./chatbot.module.css";

interface Message {
  text: string;
  isBot: boolean;
}

const ChatBot: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "こんにちは！何かお手伝いできることはありますか？", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    // ユーザーメッセージを追加
    const userMessage = { text: input, isBot: false };
    setMessages(prev => [...prev, userMessage]);

    // ボットの応答（ここは実際のチャットボットAPIと連携する必要があります）
    setTimeout(() => {
      const botMessage = { text: "申し訳ありません。現在デモ版のため、応答は制限されています。", isBot: true };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className={styles.popup}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>チャットアシスタント</h3>
          <button onClick={onClose}>×</button>
        </div>
        <div className={styles.messages}>
          {messages.map((message, index) => (
            <div key={index} className={message.isBot ? styles.botmessage : styles.usermessage}>
              {message.text}
            </div>
          ))}
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
