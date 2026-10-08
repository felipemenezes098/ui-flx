import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero03 } from './hero-03'

export const manifest: BlockManifest = {
  slug: 'hero-03',
  name: 'Hero 03',
  description:
    'A centered hero with dual CTAs and an image that fades into the page below the copy.',
  category: 'hero',
  preset: 'sienna',
  image: {
    light: '/images/blocks/hero/hero-03.webp',
    dark: '/images/blocks/hero/hero-03-dark.webp',
  },
  meta: {
    iframeHeight: 1200,
  },
  component: Hero03,
}
