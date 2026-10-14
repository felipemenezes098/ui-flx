import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero07 } from './hero-07'

export const manifest: BlockManifest = {
  slug: 'hero-07',
  name: 'Hero 07',
  description:
    'An editorial hero with a full-width image above, a top-aligned tagline, and right-aligned headline and copy below.',
  category: 'hero',
  preset: 'sienna',
  image: {
    light: '/images/blocks/hero/hero-07.webp',
    dark: '/images/blocks/hero/hero-07-dark.webp',
  },
  meta: {
    iframeHeight: 1100,
  },
  component: Hero07,
}
