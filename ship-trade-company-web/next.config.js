const withOptimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const isProd = process.env.NODE_ENV === 'production';

module.exports = withBundleAnalyzer(
  withOptimizedImages({
    images: {
      unoptimized: false,  // 启用 Next.js 的默认图片优化
    },
    optimizeImages: true,  // 启用 next-optimized-images 插件中的图片优化
    optimizeImagesInDev: true,  // 启用开发环境中的图片优化

    distDir: '.next',  // 生产构建目录，保留默认配置
    assetPrefix: isProd ? '/next' : '',  // 生产环境使用 /next，开发环境使用默认

    // 开发和生产环境的配置
    typescript: {
      ignoreBuildErrors: true,  // 忽略 TypeScript 构建错误
    },
    eslint: {
      ignoreDuringBuilds: true,  // 忽略 ESLint 构建错误
    },

    webpack(config, options) {
      return config;
    },
  })
);
