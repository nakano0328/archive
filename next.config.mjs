/** @type {import('next').NextConfig} */
const nextConfig = {
    // ↓ next build を実行する際に Static Export を利用します。
    output: 'export',
    // サブディレクトリのパスを設定します。
    //basePath: '/nextjs',
    // 静的アセットのパスを設定します。
    //assetPrefix: '/nextjs/',
};

export default nextConfig;
