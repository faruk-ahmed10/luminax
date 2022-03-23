/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
let nextConfig = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],

  // your other plugins here

]);
nextConfig = {
  ...nextConfig,
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
}


module.exports = nextConfig;
