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
    remarkPlugins: ['remark-gfm'], // <- aqui como string
  },
})

export default withMDX(nextConfig)
