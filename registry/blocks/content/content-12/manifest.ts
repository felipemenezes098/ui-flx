import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content12 } from './content-12'

export const manifest: BlockManifest = {
  slug: 'content-12',
  name: 'Content 12',
  description:
    'A centered section header with supporting copy and a CTA, followed by two large side-by-side photos.',
  category: 'content',
  preset: 'vellum',
  image: {
    light: '/images/blocks/content/content-12.webp',
    dark: '/images/blocks/content/content-12-dark.webp',
  },
  meta: {
    iframeHeight: 1000,
  },
  hasNew: true,
  component: Content12,
}
