import type { BlockManifest } from '@/lib/block-manifest-types'
import { HeroLogosCarousel } from './hero-logos-carousel'
import { HeroLogosCarouselEditorFields } from './editor/fields'
import { HeroLogosCarouselExample, values } from './hero-logos-carousel-example'

export const manifest: BlockManifest = {
  slug: 'hero-logos-carousel',
  name: 'Hero Logos Carousel',
  description:
    'Hero with title, description, two CTAs, logo marquee, and image carousel below.',
  category: 'hero',
  image: {
    light: '/images/blocks/hero/heroLogosCarousel.png',
    dark: '/images/blocks/hero/heroLogosCarousel.png',
  },
  meta: {
    iframeHeight: 800,
  },
  component: HeroLogosCarousel,
  editorFields: HeroLogosCarouselEditorFields,
  example: HeroLogosCarouselExample,
  defaults: values,
}
