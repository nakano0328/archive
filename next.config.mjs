/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  //basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  basePath: process.env.NODE_ENV === "production" ? "/nextjs" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
