import React, { useState } from 'react';
import ChatBot from './ChatBot';
import styles from "./chatbot.module.css";

interface SidebarProps {
    setQuery: (query: string) => void; // 検索クエリを設定するための関数
}

const Sidebar: React.FC<SidebarProps> = ({ setQuery }) => {
    const [inputValue, setInputValue] = useState<string>(''); // ローカルで入力を管理
    const [showChat, setShowChat] = useState(false);

    const handleSearch = () => {
        setQuery(inputValue); // 検索ボタンを押した時にクエリを設定
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSearch(); // Enterキーで検索を実行
        }
    };

    return (
        <div className="sidebar">
            <div className="search-container" style={{ alignItems: 'center' }}>
                <h3>サイト内検索</h3>
                <div style={{ display: 'flex' }}>
                    <input
                        type="text"
                        placeholder="ここに入力して検索"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)} // 検索クエリを入力
                        onKeyDown={handleKeyDown} // Enterキーで検索実行
                        style={{
                            padding: '8px',
                            flexGrow: 1,
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            marginRight: '5px',
                            height: '18px',
                        }}
                    />
                    <button
                        onClick={handleSearch} // ボタンを押すと検索実行
                        style={{
                            padding: '8px 16px',
                            backgroundColor: '#007BFF',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                        }}
                    >
                        検索
                    </button>
                </div>
            </div>
            <div className={styles.buttoncontainer}>
                <button
                    className={styles.toggle}
                    onClick={() => setShowChat(!showChat)}
                >
                    💬 チャットアシスタント
                </button>
            </div>
            {showChat && <ChatBot onClose={() => setShowChat(false)} />}
        </div>
    );
};

export default Sidebar;
