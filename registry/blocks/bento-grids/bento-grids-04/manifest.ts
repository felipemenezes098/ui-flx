import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { BentoGrids04 } from './bento-grids-04'

export const manifest: BlockManifest = {
  slug: 'bento-grids-04',
  name: 'Bento grids 04',
  description:
    'Two stacked cards with a two-tone title, a paragraph and a pill button beside a product photo surrounded by short feature callouts on a faint grid.',
  category: 'bento-grids',
  preset: 'vellum',
  image: {
    light: '/images/blocks/bento-grids/bento-grids-04.webp',
    dark: '/images/blocks/bento-grids/bento-grids-04-dark.webp',
  },
  meta: {
    iframeHeight: 900,
  },
  hasNew: true,
  component: BentoGrids04,
}
