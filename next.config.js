/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',      // génère un site statique
  images: {
    unoptimized: true,   // permet d'utiliser <Image /> ou <img>
  },
  basePath: isProd ? '/portfolio' : '',  // sous-dossier GitHub Pages
  assetPrefix: isProd ? '/portfolio/' : '',
};

module.exports = nextConfig;
