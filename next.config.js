/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig;

