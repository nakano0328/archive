"use client";  // クライアントコンポーネントとして指定

import React, { useState, useEffect } from 'react';

interface PythonEditorProps {
    defaultFile: string;
}

const PythonEditor: React.FC<PythonEditorProps> = ({ defaultFile }) => {
    const [code, setCode] = useState<string>('');  // ファイルのコード
    const [output, setOutput] = useState<string>('');  // 実行結果の出力

    useEffect(() => {
        loadFile(defaultFile);
    }, [defaultFile]);

    const loadFile = async (file: string) => {
        try {
            const response = await fetch(`/api/readFile?fileName=${file}`);  // ファイル名をクエリに含める
            if (!response.ok) throw new Error('Failed to load file');
            const data = await response.json();
            setCode(data.content);  // APIから返されたファイルの内容をセット
        } catch (error) {
            console.error('Error loading file:', error);
            setCode('');  // エラーの場合は空のコードに設定
        }
    };

    const runCode = () => {
        try {
            setOutput('');  // 実行結果のリセット
            const print = (text: string) => {
                setOutput(prev => prev + text + '\n');  // 出力結果を追加
            };
            const input = (prompt: string) => {
                return window.prompt(prompt) || '';  // ユーザーからの入力を処理
            };
            new Function('print', 'input', code)(print, input);  // 実行
        } catch (error) {
            setOutput(`Error: ${error}`);  // エラーを出力
        }
    };

    return (
        <div className="p-4 border rounded-lg shadow-md">
            <textarea
                className="w-full h-40 p-2 border rounded font-mono text-sm"
                value={code}  // ファイルの内容をテキストエリアに表示
                onChange={(e) => setCode(e.target.value)}  // コードを編集可能
            />
            <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                onClick={runCode}
            >
                RUN
            </button>
            <pre className="mt-4 p-2 bg-gray-100 rounded font-mono text-sm whitespace-pre-wrap">
                {output}  {/* 実行結果を表示 */}
            </pre>
        </div>
    );
};

export default PythonEditor;
