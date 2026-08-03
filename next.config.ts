import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // @ts-ignore - 'eslint' is a valid property but sometimes missing from NextConfig type
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
