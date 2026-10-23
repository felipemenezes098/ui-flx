import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content15 } from './content-15'

export const manifest: BlockManifest = {
  slug: 'content-15',
  name: 'Content 15',
  description:
    'A labeled collection intro with a short headline, a row of three product photos with names, and a CTA, framed by thin rules.',
  category: 'content',
  preset: 'vellum',
  image: {
    light: '/images/blocks/content/content-15.webp',
    dark: '/images/blocks/content/content-15-dark.webp',
  },
  meta: {
    iframeHeight: 900,
  },
  hasNew: true,
  component: Content15,
}
