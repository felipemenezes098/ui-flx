import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Carousel02 } from './carousel-02'

export const manifest: BlockManifest = {
  slug: 'carousel-02',
  name: 'Carousel 02',
  description: 'A carousel of media with a title and description.',
  category: 'carousel',
  preset: 'vellum',
  image: {
    light: '/images/blocks/carousel/carousel-02.webp',
    dark: '/images/blocks/carousel/carousel-02-dark.webp',
  },
  meta: {
    iframeHeight: 700,
    containerClassName: 'max-w-full overflow-hidden px-0',
  },
  component: Carousel02,
}
