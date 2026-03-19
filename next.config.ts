import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? '/my-app' : '',
  assetPrefix: isGithubActions ? '/my-app/' : '',
};

export default nextConfig;