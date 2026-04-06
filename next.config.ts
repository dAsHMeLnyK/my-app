import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
const isStaticExport = process.env.NEXT_PUBLIC_EXPORT === 'true';

const nextConfig: NextConfig = {
  output: isStaticExport ? 'export' : 'standalone',
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? '/my-app' : '',
  assetPrefix: isGithubActions ? '/my-app/' : '',
};

export default nextConfig;