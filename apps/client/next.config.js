/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    externalDir: true,
  },
  images: {
    domains: ['localhost', 'thecoinlogic.com', 'cms.thecoinlogic.com', 'https://assets.coingecko.com'],
  },
};

module.exports = nextConfig;
