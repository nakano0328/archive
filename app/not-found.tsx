// app/not-found.tsx
'use client'; // クライアントコンポーネントであることを指定

import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p> {/* エスケープ */}
            <button onClick={() => router.push('/')}>
                Go back to Home
            </button>
        </div>
    );
}
