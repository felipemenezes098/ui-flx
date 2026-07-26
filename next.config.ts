import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/get-started/introduction',
        permanent: false,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ]
  },
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.brandfetch.io',
      },
      {
        protocol: 'https',
        hostname: 'pixabay.com',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.txt$/,
      use: 'raw-loader',
    })
    return config
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: ['remark-gfm'],
  },
})

export default withMDX(nextConfig)
