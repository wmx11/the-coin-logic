/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    externalDir: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      'localhost',
      'thecoinlogic.com',
      'cms.thecoinlogic.com',
      'https://assets.coingecko.com',
      'assets.coingecko.com',
      'cryptologos.cc',
    ],
    minimumCacheTTL: 3600,
  },
};

module.exports = nextConfig;
