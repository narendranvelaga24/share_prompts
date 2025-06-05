/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Remove appDir: true (no longer needed in Next.js 13.4+)
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
}

module.exports = nextConfig