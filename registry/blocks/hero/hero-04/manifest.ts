import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero04 } from './hero-04'

export const manifest: BlockManifest = {
  slug: 'hero-04',
  name: 'Hero 04',
  description:
    'A two-column editorial hero with a soft background wash and a layered collage of two overlapping images.',
  category: 'hero',
  preset: 'sienna',
  image: {
    light: '/images/blocks/hero/hero-04.webp',
    dark: '/images/blocks/hero/hero-04-dark.webp',
  },
  meta: {
    iframeHeight: 820,
  },
  component: Hero04,
}
