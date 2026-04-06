import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const isPagesDeploy = process.env.GITHUB_WORKFLOW === 'Deploy to GitHub Pages';

const nextConfig: NextConfig = {
  output: isPagesDeploy ? 'export' : 'standalone',
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions ? '/my-app' : '',
  assetPrefix: isGithubActions ? '/my-app/' : '',
};

export default nextConfig;