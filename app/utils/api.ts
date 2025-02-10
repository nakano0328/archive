// api.ts
const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = process.env.OPENAI_API_KEY; // .envファイルから読み込み

if (!API_KEY) {
  throw new Error(
    "API_KEY is not defined. Please set REACT_APP_API_KEY in your .env file."
  );
}

// API呼び出し関数
export const sendChatMessage = async (message: string): Promise<string> => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "あなたは工学系の専門家です。以下の質問に簡潔に答えてください。なるべく2文以内でお願いします。",
          },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching API:", error);
    throw new Error("Failed to fetch API response");
  }
};
