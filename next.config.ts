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
  experimental: {
    // Prevent resolving modules from parent/sibling directories to avoid
    // mixed path casing loading duplicate module instances on Windows.
    externalDir: false,
  },
};

export default nextConfig;
