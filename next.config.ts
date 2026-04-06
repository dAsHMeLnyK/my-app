import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const isPages = process.env.IS_PAGES === 'true' || process.env.NEXT_PUBLIC_EXPORT === 'true';
const isDockerBuild = process.env.DOCKER_BUILD === 'true';

const nextConfig: NextConfig = {
  output: isDockerBuild ? 'standalone' : isPages ? 'export' : 'standalone',
  images: {
    unoptimized: true,
  },
  basePath: isGithubActions && isPages ? '/my-app' : '',
  assetPrefix: isGithubActions && isPages ? '/my-app/' : '',
};

export default nextConfig;