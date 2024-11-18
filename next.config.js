/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: 'https://datathon-splash.netlify.app',
  basePath: '/archive/datathon-2024',
  images: {
    domains: ['datathon-splash.netlify.app'],
    unoptimized: true
  },
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://cmudsc.com',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig