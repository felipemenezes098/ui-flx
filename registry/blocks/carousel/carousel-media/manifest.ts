import type { BlockManifest } from '@/lib/block-manifest-types'
import { CarouselMedia } from './carousel-media'
import { CarouselMediaEditorFields } from './editor/fields'
import { CarouselMediaExample, values } from './carousel-media-example'

export const manifest: BlockManifest = {
  slug: 'carousel-media',
  name: 'Carousel Media',
  description: 'A carousel of media with a title and description.',
  category: 'carousel',
  image: {
    light: '/images/blocks/carousel/carouselMedia.png',
    dark: '/images/blocks/carousel/carouselMedia.png',
  },
  meta: {
    iframeHeight: 700,
    containerClassName: 'max-w-full overflow-hidden px-0',
    componentClassName:
      '2xl:max-w-6xl xl:max-w-6xl lg:max-w-5xl md:max-w-4xl max-w-4xl mx-auto px-5',
  },
  component: CarouselMedia,
  editorFields: CarouselMediaEditorFields,
  example: CarouselMediaExample,
  defaults: values,
}
