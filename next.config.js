/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // assetPrefix: 'https://datathon-splash.netlify.app',
  // basePath: '/datathon',
  images: {
    domains: ['datathon-splash.netlify.app'],
    unoptimized: true
  },
  swcMinify: true
}

module.exports = nextConfig