import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content13 } from './content-13'

export const manifest: BlockManifest = {
  slug: 'content-13',
  name: 'Content 13',
  description:
    'An editorial layout with a large photo, a short title and paragraph beside it, and two smaller photos offset below.',
  category: 'content',
  preset: 'vellum',
  image: {
    light: '/images/blocks/content/content-13.webp',
    dark: '/images/blocks/content/content-13-dark.webp',
  },
  meta: {
    iframeHeight: 1200,
  },
  hasNew: true,
  component: Content13,
}
