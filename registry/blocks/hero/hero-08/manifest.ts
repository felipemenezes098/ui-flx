import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero08 } from './hero-08'

export const manifest: BlockManifest = {
  slug: 'hero-08',
  name: 'Hero 08',
  description:
    'A split hero with a bold headline, avatar social proof, and two image cards with invertible overlay text and CTAs.',
  category: 'hero',
  preset: 'sienna',
  image: {
    light: '/images/blocks/hero/hero-08.webp',
    dark: '/images/blocks/hero/hero-08-dark.webp',
  },
  meta: {
    iframeHeight: 820,
  },
  component: Hero08,
}
