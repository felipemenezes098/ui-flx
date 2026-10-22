import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { BentoGrids02 } from './bento-grids-02'

export const manifest: BlockManifest = {
  slug: 'bento-grids-02',
  name: 'Bento grids 02',
  description:
    'A row of collection cards, one twice as wide, each with a product photo bleeding off the top, a title, a short description and a link.',
  category: 'bento-grids',
  preset: 'vellum',
  image: {
    light: '/images/blocks/bento-grids/bento-grids-02.webp',
    dark: '/images/blocks/bento-grids/bento-grids-02-dark.webp',
  },
  meta: {
    iframeHeight: 800,
  },
  hasNew: true,
  component: BentoGrids02,
}
