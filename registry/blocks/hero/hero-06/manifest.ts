import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero06 } from './hero-06'

export const manifest: BlockManifest = {
  slug: 'hero-06',
  name: 'Hero 06',
  description:
    'A split product hero with dual CTA, a compact logo row, and the Spot 01 illustration.',
  category: 'hero',
  preset: 'sienna',
  image: {
    light: '/images/blocks/hero/hero-06.webp',
    dark: '/images/blocks/hero/hero-06-dark.webp',
  },
  meta: {
    iframeHeight: 820,
  },
  component: Hero06,
}
