import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Carousel03 } from './carousel-03'

export const manifest: BlockManifest = {
  slug: 'carousel-03',
  name: 'Carousel 03',
  description: 'A carousel of cards with a title and description.',
  category: 'carousel',
  preset: 'vellum',
  image: {
    light: '/images/blocks/carousel/carousel-03.webp',
    dark: '/images/blocks/carousel/carousel-03-dark.webp',
  },
  meta: {
    iframeHeight: 700,
    containerClassName: 'max-w-full overflow-hidden px-0',
  },
  component: Carousel03,
}
