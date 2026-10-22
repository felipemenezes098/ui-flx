import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { BentoGrids03 } from './bento-grids-03'

export const manifest: BlockManifest = {
  slug: 'bento-grids-03',
  name: 'Bento grids 03',
  description:
    'A product grid with a tall featured item in the center, four smaller items around it, category badges, prices and names.',
  category: 'bento-grids',
  preset: 'vellum',
  image: {
    light: '/images/blocks/bento-grids/bento-grids-03.webp',
    dark: '/images/blocks/bento-grids/bento-grids-03-dark.webp',
  },
  meta: {
    iframeHeight: 1200,
  },
  hasNew: true,
  component: BentoGrids03,
}
