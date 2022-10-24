/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['img1.daumcdn.net'],
  },
  webpack(config, {}) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      child_process: false,
      net: false,
      crypto: false,
    }
    return config
  },
  reactStrictMode: true,
}

module.exports = nextConfig
