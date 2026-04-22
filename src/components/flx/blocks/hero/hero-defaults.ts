import { backgroundMediaDefaultProps } from './background-media/defaults'
import { heroContentMediaDefaultProps } from './hero-content-media/defaults'
import { heroLogosCarouselDefaultProps } from './hero-logos-carousel/defaults'
import { heroHeadlinePreviewDefaultProps } from './hero-headline-preview/defaults'
import { textBadgesDefaultProps } from './text-badges/defaults'

export const heroDefaults = {
  'background-media': { default: backgroundMediaDefaultProps },
  'hero-content-media': { default: heroContentMediaDefaultProps },
  'hero-logos-carousel': { default: heroLogosCarouselDefaultProps },
  'hero-headline-preview': { default: heroHeadlinePreviewDefaultProps },
  'text-badges': { default: textBadgesDefaultProps },
} as const
