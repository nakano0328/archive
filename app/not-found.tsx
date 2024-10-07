// app/not-found.tsx

import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();

    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <button onClick={() => router.push('/')}>
                Go back to Home
            </button>
        </div>
    );
}
