import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero02 } from './hero-02'

export const manifest: BlockManifest = {
  slug: 'hero-02',
  name: 'Hero 02',
  description:
    'A left-aligned serif hero with a media panel: an image backdrop with a floating dashboard mockup on top.',
  category: 'hero',
  preset: 'sienna',
  image: {
    light: '/images/blocks/hero/hero-02.webp',
    dark: '/images/blocks/hero/hero-02-dark.webp',
  },
  meta: {
    iframeHeight: 1300,
  },
  component: Hero02,
}
