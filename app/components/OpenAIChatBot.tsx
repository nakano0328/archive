import React, { useState } from 'react';
import styles from "@/app/components/chatbot.module.css";
import { sendChatMessage } from '@/app/utils/api';

interface Message {
  sender: 'user' | 'bot';  // リテラル型として定義
  content: string;
}

const OpenAIChatBot: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', content: "こんにちは! OpenAIアシスタントです。ご用件をどうぞ。" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    // 明示的な型指定でuserMessageを作成
    const userMessage: Message = {
      sender: 'user',  // 'user' リテラルとして指定
      content: input
    };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const botReply = await sendChatMessage(input);
      // 明示的な型指定でbotMessageを作成
      const botMessage: Message = {
        sender: 'bot',  // 'bot' リテラルとして指定
        content: botReply
      };
      setMessages(prev => [...prev, botMessage]);
    } catch {
      setMessages(prev => [
        ...prev,
        { sender: 'bot', content: 'エラー: 応答を取得できませんでした。' } as Message
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={styles.popup}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3>OpenAIアシスタント</h3>
          <button onClick={onClose}>&times;</button>
        </div>
        <div className={styles.messages}>
          {messages.map((message, index) => (
            <div key={index} className={message.sender === 'bot' ? styles.botmessage : styles.usermessage}>
              {message.content}
            </div>
          ))}
          {isLoading && <div className={styles.botmessage}>入力中...</div>}
        </div>
        <div className={styles.input}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="メッセージを入力..."
          />
          <button onClick={handleSend} disabled={isLoading}>送信</button>
        </div>
      </div>
    </div>
  );
};

export default OpenAIChatBot;
