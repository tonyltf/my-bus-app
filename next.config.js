/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';
import runtimeCaching from 'next-pwa/cache.js';

const nextConfig = {
  experimental: {
    appDir: true,
  },
}


const isProduction = process.env.NODE_ENV === 'production';

module.exports = withPWA({
  dest: 'public',
  disable: !isProduction,
  runtimeCaching,
})({
  ...nextConfig
});
