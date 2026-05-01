import type { BlockManifest } from '@/lib/block-manifest-types'
import { CarouselFocus } from './carousel-focus'
import { CarouselFocusEditorFields } from './editor/fields'
import { CarouselFocusExample, values } from './carousel-focus-example'
import { CarouselFocusTitleInside } from './examples/carousel-focus-title-inside'

export const manifest: BlockManifest = {
  slug: 'carousel-focus',
  name: 'Carousel Focus',
  description:
    'Auto-scroll carousel that pauses on item hover and reveals title.',
  category: 'carousel',
  image: {
    light: '/images/blocks/carousel/carouselFocus.png',
    dark: '/images/blocks/carousel/carouselFocus.png',
  },
  meta: {
    iframeHeight: 500,
    containerClassName: 'max-w-full overflow-hidden px-0',
  },
  component: CarouselFocus,
  editorFields: CarouselFocusEditorFields,
  example: CarouselFocusExample,
  defaults: values,
  variations: {
    'title-inside': CarouselFocusTitleInside,
  },
}
