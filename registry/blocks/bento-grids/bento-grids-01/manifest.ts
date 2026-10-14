import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { BentoGrids01 } from './bento-grids-01'

export const manifest: BlockManifest = {
  slug: 'bento-grids-01',
  name: 'Bento grids 01',
  description:
    'Three-column bento: primary tile (two-thirds) with title, description, CTA and media, plus supporting image cards.',
  category: 'bento-grids',
  preset: 'sienna',
  image: {
    light: '/images/blocks/bento-grids/bento-grids-01.webp',
    dark: '/images/blocks/bento-grids/bento-grids-01-dark.webp',
  },
  meta: {
    iframeHeight: 1000,
  },
  component: BentoGrids01,
}
