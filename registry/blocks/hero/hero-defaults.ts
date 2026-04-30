import { values as backgroundMediaValues } from './background-media/background-media-example'
import { values as heroContentMediaValues } from './hero-content-media/hero-content-media-example'
import { values as heroHeadlinePreviewValues } from './hero-headline-preview/hero-headline-preview-example'
import { values as heroLogosCarouselValues } from './hero-logos-carousel/hero-logos-carousel-example'
import { values as textBadgesValues } from './text-badges/text-badges-example'

export const heroDefaults = {
  'background-media': { default: backgroundMediaValues },
  'hero-content-media': { default: heroContentMediaValues },
  'hero-logos-carousel': { default: heroLogosCarouselValues },
  'hero-headline-preview': { default: heroHeadlinePreviewValues },
  'text-badges': { default: textBadgesValues },
} as const
