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
  // Turbopack configuration
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
