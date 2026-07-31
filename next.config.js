/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'portfolio';
const basePath = isProd ? `/${repositoryName}` : '';

const nextConfig = {
  output: 'export',      // génère un site statique
  images: {
    unoptimized: true,   // permet d'utiliser <Image /> ou <img>
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
