/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

module.exports = {
  i18n,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.58cdn.com.cn',
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'pic6.58cdn.com.cn',
      },
    ],
  },
}

module.exports = nextConfig;
