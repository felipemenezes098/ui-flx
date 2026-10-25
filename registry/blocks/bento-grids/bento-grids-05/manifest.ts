import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { BentoGrids05 } from './bento-grids-05'

export const manifest: BlockManifest = {
  slug: 'bento-grids-05',
  name: 'Bento grids 05',
  description:
    'A mosaic of rounded tiles that mixes photos with two short text tiles, one with a detail photo at its base and one wide photo as the closing tile.',
  category: 'bento-grids',
  preset: 'vellum',
  image: {
    light: '/images/blocks/bento-grids/bento-grids-05.webp',
    dark: '/images/blocks/bento-grids/bento-grids-05-dark.webp',
  },
  meta: {
    iframeHeight: 1100,
  },
  hasNew: true,
  component: BentoGrids05,
}
