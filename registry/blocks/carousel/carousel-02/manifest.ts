import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Carousel02 } from './carousel-02'
import { Carousel02EditorFields } from './editor/fields'
import { Carousel02Example, values } from './carousel-02-example'

export const manifest: BlockManifest = {
  slug: 'carousel-02',
  name: 'Carousel 02',
  description: 'A carousel of media with a title and description.',
  category: 'carousel',
  image: {
    light: '/images/blocks/carousel/carousel-02.png',
    dark: '/images/blocks/carousel/carousel-02.png',
  },
  meta: {
    iframeHeight: 700,
    containerClassName: 'max-w-full overflow-hidden px-0',
    componentClassName:
      '2xl:max-w-6xl xl:max-w-6xl lg:max-w-5xl md:max-w-4xl max-w-4xl mx-auto px-5',
  },
  component: Carousel02,
  editorFields: Carousel02EditorFields,
  example: Carousel02Example,
  defaults: values,
}
