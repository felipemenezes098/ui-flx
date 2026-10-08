import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Carousel01 } from './carousel-01'

export const manifest: BlockManifest = {
  slug: 'carousel-01',
  name: 'Carousel 01',
  description:
    'Auto-scroll carousel that pauses on item hover and reveals title.',
  category: 'carousel',
  preset: 'vellum',
  image: {
    light: '/images/blocks/carousel/carousel-01.webp',
    dark: '/images/blocks/carousel/carousel-01-dark.webp',
  },
  meta: {
    iframeHeight: 500,
    containerClassName: 'max-w-full overflow-hidden px-0',
  },
  component: Carousel01,
}
