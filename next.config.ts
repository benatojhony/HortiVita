import type { NextConfig } from 'next';

const githubPages = process.env.GITHUB_PAGES === 'true';
const githubBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '/hortivita';

const nextConfig: NextConfig = githubPages
  ? {
      trailingSlash: true,
      basePath: githubBasePath,
      assetPrefix: `${githubBasePath}/`,
    }
  : {};

export default nextConfig;
