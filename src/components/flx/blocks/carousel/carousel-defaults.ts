import { CarouselFocusTitleInside } from './carousel-focus/examples/carousel-focus-title-inside'
import { values as carouselCardsValues } from './carousel-cards/carousel-cards-example'
import { values as carouselFocusValues } from './carousel-focus/carousel-focus-example'
import { values as carouselMediaValues } from './carousel-media/carousel-media-example'

export const carouselDefaults = {
  'carousel-cards': {
    default: carouselCardsValues,
  },
  'carousel-focus': {
    default: carouselFocusValues,
    'title-inside': CarouselFocusTitleInside,
  },
  'carousel-media': { default: carouselMediaValues },
} as const
