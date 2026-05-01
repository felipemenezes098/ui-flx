import type { BlockManifest } from '@/lib/block-manifest-types'
import { CarouselCards } from './carousel-cards'
import { CarouselCardsEditorFields } from './editor/fields'
import { CarouselCardsExample, values } from './carousel-cards-example'

export const manifest: BlockManifest = {
  slug: 'carousel-cards',
  name: 'Carousel Cards',
  description: 'A carousel of cards with a title and description.',
  category: 'carousel',
  image: {
    light: '/images/blocks/carousel/carouselCards.png',
    dark: '/images/blocks/carousel/carouselCards.png',
  },
  meta: {
    iframeHeight: 700,
    containerClassName: 'max-w-full overflow-hidden px-0',
    componentClassName:
      '2xl:max-w-6xl xl:max-w-6xl lg:max-w-5xl md:max-w-4xl max-w-4xl mx-auto px-10',
  },
  component: CarouselCards,
  editorFields: CarouselCardsEditorFields,
  example: CarouselCardsExample,
  defaults: values,
}
