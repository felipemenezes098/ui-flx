import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero15 } from './hero-15'

export const manifest: BlockManifest = {
  slug: 'hero-15',
  name: 'Hero 15',
  description:
    'A directory-style hero with an oversized title, split intro with dual CTAs, and a row of wordmark cards with minimal imagery.',
  category: 'hero',
  preset: 'vellum',
  image: {
    light: '/images/blocks/hero/hero-15.webp',
    dark: '/images/blocks/hero/hero-15-dark.webp',
  },
  meta: {
    iframeHeight: 1100,
  },
  hasNew: true,
  component: Hero15,
}
