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
      'cdn.discordapp.com',
    ],
    minimumCacheTTL: 3600,
  },
};

module.exports = nextConfig;
