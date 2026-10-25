import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { BentoGrids06 } from './bento-grids-06'

export const manifest: BlockManifest = {
  slug: 'bento-grids-06',
  name: 'Bento grids 06',
  description:
    'A brand mosaic of square tiles around one large central photo, mixing photographs with spaced-out taglines and a small mark.',
  category: 'bento-grids',
  preset: 'vellum',
  image: {
    light: '/images/blocks/bento-grids/bento-grids-06.webp',
    dark: '/images/blocks/bento-grids/bento-grids-06-dark.webp',
  },
  meta: {
    iframeHeight: 1000,
  },
  hasNew: true,
  component: BentoGrids06,
}
