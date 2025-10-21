import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Force rebuild for Vercel deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
