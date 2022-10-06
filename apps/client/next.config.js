/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    externalDir: true,
  },
  images: {
    domains: [
      'localhost',
      'thecoinlogic.com',
      'cms.thecoinlogic.com',
      'https://assets.coingecko.com',
      'assets.coingecko.com',
    ],
    minimumCacheTTL: 3600,
  },
};

module.exports = nextConfig;
