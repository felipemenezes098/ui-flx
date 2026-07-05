import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Carousel01 } from './carousel-01'
import { Carousel01EditorFields } from './editor/fields'
import { Carousel01Example, values } from './carousel-01-example'
import {
  Carousel01TitleInside,
  values as titleInsideValues,
} from './examples/carousel-01-title-inside'

export const manifest: BlockManifest = {
  slug: 'carousel-01',
  name: 'Carousel 01',
  description:
    'Auto-scroll carousel that pauses on item hover and reveals title.',
  category: 'carousel',
  image: {
    light: '/images/blocks/carousel/carousel-01.png',
    dark: '/images/blocks/carousel/carousel-01-dark.png',
  },
  meta: {
    iframeHeight: 500,
    containerClassName: 'max-w-full overflow-hidden px-0',
  },
  component: Carousel01,
  editorFields: Carousel01EditorFields,
  example: Carousel01Example,
  defaults: values,
  variations: {
    'title-inside': Carousel01TitleInside,
  },
  variationDefaults: {
    'title-inside': titleInsideValues,
  },
}
