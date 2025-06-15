import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      'example.com',       // ← your external host(s)
      'cdn.myapp.com',     // ← add more as needed
    ],
  }
};

export default nextConfig;
