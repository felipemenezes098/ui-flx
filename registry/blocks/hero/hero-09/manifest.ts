import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero09 } from './hero-09'

export const manifest: BlockManifest = {
  slug: 'hero-09',
  name: 'Hero 09',
  description:
    'A centered real-estate hero with a search bar, a masked architecture image that fades into the page, and a split closing statement.',
  category: 'hero',
  preset: 'sienna',
  image: {
    light: '/images/blocks/hero/hero-09.webp',
    dark: '/images/blocks/hero/hero-09-dark.webp',
  },
  meta: {
    iframeHeight: 1300,
  },
  component: Hero09,
}
