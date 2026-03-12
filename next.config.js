/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    staticGenerationTimeout: 120,
  },
}

module.exports = nextConfig
