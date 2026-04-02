/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@cms-builder/core"],
  experimental: {
    serverActions: true
  }
};

export default nextConfig;