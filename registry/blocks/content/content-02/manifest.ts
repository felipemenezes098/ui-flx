import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content02 } from './content-02'

export const manifest: BlockManifest = {
  slug: 'content-02',
  name: 'Content 02',
  description:
    'A grid of media cards with a section header and item details below each image.',
  category: 'content',
  preset: 'sienna',
  image: {
    light: '/images/blocks/content/content-02.webp',
    dark: '/images/blocks/content/content-02-dark.webp',
  },
  component: Content02,
  meta: {
    iframeHeight: 900,
  },
}
