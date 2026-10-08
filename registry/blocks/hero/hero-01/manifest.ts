import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero01 } from './hero-01'

export const manifest: BlockManifest = {
  slug: 'hero-01',
  name: 'Hero 01',
  description:
    'A centered serif hero with a soft gradient wash, pill CTA, and a floating integration cloud.',
  category: 'hero',
  preset: 'sienna',
  image: {
    light: '/images/blocks/hero/hero-01.webp',
    dark: '/images/blocks/hero/hero-01-dark.webp',
  },
  meta: {
    iframeHeight: 720,
  },
  component: Hero01,
}
