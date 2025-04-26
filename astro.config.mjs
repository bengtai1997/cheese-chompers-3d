// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // 添加Cloudflare适配器
  output: 'server',
  adapter: cloudflare(),

  // 启用图像优化
  image: {
    // 启用WebP格式支持
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // 图像优化配置
        formats: ['avif', 'webp', 'png', 'jpeg'],
        quality: 80, // 默认图像质量
        cacheDir: './.cache/image'
      }
    }
  },
  // 性能优化
  build: {
    // 启用CSS和JS的压缩
    minify: true,
    // 启用代码分割
    split: true
  },
  // SEO优化
  site: 'https://cheesechompers3d.pro',
  trailingSlash: 'never'
});
