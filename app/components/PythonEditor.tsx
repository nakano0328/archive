"use client";
import React, { useState } from 'react';

const PythonEditor: React.FC = () => {
    const [code, setCode] = useState<string>('print("Hello, World!")');
    const [output, setOutput] = useState<string>('');

    const runCode = () => {
        try {
            // This is a very simple simulation of Python's print function
            const print = (text: string) => {
                setOutput(prev => prev + text + '\n');
            };

            // Clear previous output
            setOutput('');

            // Execute the code (this is not real Python execution, just a simulation)
            // eslint-disable-next-line no-new-func
            new Function('print', code)(print);
        } catch (error) {
            setOutput(`Error: ${error}`);
        }
    };

    return (
        <div className="p-4 border rounded-lg shadow-md">
            <textarea
                className="w-full h-40 p-2 border rounded font-mono text-sm"
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
            <button
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                onClick={runCode}
            >
                Run Code
            </button>
            <pre className="mt-4 p-2 bg-gray-100 rounded font-mono text-sm whitespace-pre-wrap">
                {output}
            </pre>
        </div>
    );
};

export default PythonEditor;
