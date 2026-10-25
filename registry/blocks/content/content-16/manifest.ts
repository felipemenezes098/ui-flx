import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content16 } from './content-16'

export const manifest: BlockManifest = {
  slug: 'content-16',
  name: 'Content 16',
  description:
    'A large square photo with a thin circular guide and crosshair, a smaller photo beside it and a short title with a paragraph on the side.',
  category: 'content',
  preset: 'vellum',
  image: {
    light: '/images/blocks/content/content-16.webp',
    dark: '/images/blocks/content/content-16-dark.webp',
  },
  meta: {
    iframeHeight: 800,
  },
  hasNew: true,
  component: Content16,
}
