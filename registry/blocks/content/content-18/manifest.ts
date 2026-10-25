import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content18 } from './content-18'

export const manifest: BlockManifest = {
  slug: 'content-18',
  name: 'Content 18',
  description:
    'A centered headline over a wide photo with a text and link card in its corner, beside a short paragraph and a tall photo.',
  category: 'content',
  preset: 'vellum',
  image: {
    light: '/images/blocks/content/content-18.webp',
    dark: '/images/blocks/content/content-18-dark.webp',
  },
  meta: {
    iframeHeight: 1000,
  },
  hasNew: true,
  component: Content18,
}
