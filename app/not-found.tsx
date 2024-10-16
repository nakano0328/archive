// app/not-found.tsx
"use client"; // クライアントコンポーネントであることを指定

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>こんなとこに来ても何もないぜ！早くもどりな！</p> {/* エスケープ */}
      <button onClick={() => router.push("/")}>ホームに戻る</button>
    </div>
  );
}
