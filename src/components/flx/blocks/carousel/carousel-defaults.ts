import { carouselFocusDefaultProps } from './carousel-focus/defaults'
import { carouselFocusTitleInsideProps } from './carousel-focus/examples/title-inside/defaults'
import { carouselMediaDefaultProps } from './carousel-media/defaults'

export const carouselDefaults = {
  'carousel-focus': {
    default: carouselFocusDefaultProps,
    'title-inside': carouselFocusTitleInsideProps,
  },
  'carousel-media': { default: carouselMediaDefaultProps },
} as const
