import { carouselFocusDefaultProps } from './carousel-focus/defaults'
import { CarouselFocusTitleInside } from './carousel-focus/examples/carousel-focus-title-inside'
import { carouselMediaDefaultProps } from './carousel-media/defaults'

export const carouselDefaults = {
  'carousel-focus': {
    default: carouselFocusDefaultProps,
    'title-inside': CarouselFocusTitleInside,
  },
  'carousel-media': { default: carouselMediaDefaultProps },
} as const
