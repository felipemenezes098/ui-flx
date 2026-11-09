import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const legacyBlocks: Record<string, string> = {
  'bento-grids/primary-item-grid': '/blocks/bento-grids/bento-grids-01',
  'content/grid-media-cards': '/blocks/content/content-02',
  'content/grid-content-cards': '/blocks/content/content-04',
  'content/grid-two-columns': '/blocks/content/content-06',
  'content/grid-content-columns': '/blocks/content/content-07',
  'content/grid-with-media-top': '/blocks/content/content-11',
  'content/icon-list': '/blocks/content/content-12',
  'content/badge-list': '/blocks/content/content-13',
  'content/title-with-media': '/blocks/content/content-14',
  'content/centered-text': '/blocks/cta/cta-01',
  'content/content-08': '/blocks/cta/cta-01',
  'content/select-reveal-media': '/blocks/feature/feature-01',
  'content/content-01': '/blocks/feature/feature-01',
  'content/media-grid-interactive': '/blocks/feature/feature-02',
  'content/content-10': '/blocks/feature/feature-02',
  'content/tabs-media': '/blocks/content',
  'content/content-03': '/blocks/content',
  'content/focus-grid': '/blocks/content',
  'content/grid-cards': '/blocks/content',
  'content/content-09': '/blocks/content',
  'hero/background-media': '/blocks/hero/hero-01',
  'hero/hero-logos-carousel': '/blocks/hero/hero-02',
  'hero/hero-content-media': '/blocks/hero/hero-03',
  'hero/hero-headline-preview': '/blocks/hero/hero-04',
  'hero/text-badges': '/blocks/hero/hero-05',
  'testimonials/single-testimonial': '/blocks/testimonials/testimonials-01',
}

const removedBlockCategories = ['carousel', 'logos', 'scroll', 'showcase']

const currentBlockCategories =
  'hero|content|feature|cta|testimonials|bento-grids|lists'

function legacyBlockRedirects() {
  return Object.entries(legacyBlocks).flatMap(([path, destination]) =>
    ['/blocks', '/preview', '/preview-editor'].map((prefix) => ({
      source: `${prefix}/${path}/:rest*`,
      destination,
      permanent: true,
    })),
  )
}

function removedCategoryRedirects() {
  return removedBlockCategories.flatMap((category) =>
    ['/blocks', '/preview', '/preview-editor', '/preview/blocks'].map(
      (prefix) => ({
        source: `${prefix}/${category}/:rest*`,
        destination: '/blocks',
        permanent: true,
      }),
    ),
  )
}

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async redirects() {
    return [
      ...legacyBlockRedirects(),
      ...removedCategoryRedirects(),
      {
        source: `/preview/:category(${currentBlockCategories})/:slug/:rest*`,
        destination: '/blocks/:category/:slug',
        permanent: true,
      },
      {
        source: '/preview-editor/:category/:slug/:rest*',
        destination: '/blocks/:category/:slug',
        permanent: true,
      },
      {
        source: '/docs/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ai',
        destination: '/',
        permanent: true,
      },
      {
        source: '/intents/:path*',
        destination: '/blocks',
        permanent: true,
      },
      {
        source: '/blocks/content/content-05',
        destination: '/blocks',
        permanent: true,
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
            value: 'public, max-age=2592000, stale-while-revalidate=2592000',
          },
        ],
      },
    ]
  },
  outputFileTracingRoot: __dirname,
  outputFileTracingIncludes: {
    '/og': ['./assets/fonts/**'],
  },
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
