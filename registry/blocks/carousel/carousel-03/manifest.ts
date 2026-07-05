import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Carousel03 } from './carousel-03'
import { Carousel03EditorFields } from './editor/fields'
import { Carousel03Example, values } from './carousel-03-example'

export const manifest: BlockManifest = {
  slug: 'carousel-03',
  name: 'Carousel 03',
  description: 'A carousel of cards with a title and description.',
  category: 'carousel',
  image: {
    light: '/images/blocks/carousel/carousel-03.png',
    dark: '/images/blocks/carousel/carousel-03-dark.png',
  },
  meta: {
    iframeHeight: 700,
    containerClassName: 'max-w-full overflow-hidden px-0',
    componentClassName:
      '2xl:max-w-6xl xl:max-w-6xl lg:max-w-5xl md:max-w-4xl max-w-4xl mx-auto px-10',
  },
  component: Carousel03,
  editorFields: Carousel03EditorFields,
  example: Carousel03Example,
  defaults: values,
}
