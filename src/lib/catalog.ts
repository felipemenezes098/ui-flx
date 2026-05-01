import type {
  BlockCategory,
  BlockImage,
  BlockItem,
  BlockManifest,
} from '@/lib/block-manifest-types'

import { manifest as backgroundMediaManifest } from '../../registry/blocks/hero/background-media/manifest'
import { manifest as textBadgesManifest } from '../../registry/blocks/hero/text-badges/manifest'
import { manifest as heroContentMediaManifest } from '../../registry/blocks/hero/hero-content-media/manifest'
import { manifest as heroLogosCarouselManifest } from '../../registry/blocks/hero/hero-logos-carousel/manifest'
import { manifest as heroHeadlinePreviewManifest } from '../../registry/blocks/hero/hero-headline-preview/manifest'
import { manifest as carouselFocusManifest } from '../../registry/blocks/carousel/carousel-focus/manifest'
import { manifest as carouselCardsManifest } from '../../registry/blocks/carousel/carousel-cards/manifest'
import { manifest as carouselMediaManifest } from '../../registry/blocks/carousel/carousel-media/manifest'
import { manifest as centeredTextManifest } from '../../registry/blocks/content/centered-text/manifest'
import { manifest as focusGridManifest } from '../../registry/blocks/content/focus-grid/manifest'
import { manifest as gridCardsManifest } from '../../registry/blocks/content/grid-cards/manifest'
import { manifest as gridContentCardsManifest } from '../../registry/blocks/content/grid-content-cards/manifest'
import { manifest as gridContentColumnsManifest } from '../../registry/blocks/content/grid-content-columns/manifest'
import { manifest as gridMediaCardsManifest } from '../../registry/blocks/content/grid-media-cards/manifest'
import { manifest as gridTwoColumnsManifest } from '../../registry/blocks/content/grid-two-columns/manifest'
import { manifest as gridWithMediaTopManifest } from '../../registry/blocks/content/grid-with-media-top/manifest'
import { manifest as iconListManifest } from '../../registry/blocks/content/icon-list/manifest'
import { manifest as badgeListManifest } from '../../registry/blocks/content/badge-list/manifest'
import { manifest as mediaGridInteractiveManifest } from '../../registry/blocks/content/media-grid-interactive/manifest'
import { manifest as selectRevealMediaManifest } from '../../registry/blocks/content/select-reveal-media/manifest'
import { manifest as tabsMediaManifest } from '../../registry/blocks/content/tabs-media/manifest'
import { manifest as titleWithMediaManifest } from '../../registry/blocks/content/title-with-media/manifest'
import { manifest as showcaseGridMediaCardsManifest } from '../../registry/blocks/showcase/grid-media-cards/manifest'
import { manifest as primaryItemGridManifest } from '../../registry/blocks/bento-grids/primary-item-grid/manifest'
import { manifest as logoMarqueeManifest } from '../../registry/blocks/logos/logo-marquee/manifest'
import { manifest as singleTestimonialManifest } from '../../registry/blocks/testimonials/single-testimonial/manifest'
import { manifest as stickyScrollMediaManifest } from '../../registry/blocks/scroll/sticky-scroll-media/manifest'

interface CategoryRow {
  slug: string
  category: string
  description: string
  type: string
  hasNew?: boolean
  image: BlockImage
  blocks: BlockManifest[]
}

export const categories: CategoryRow[] = [
  {
    slug: 'hero',
    category: 'Hero',
    description: 'Components to display information in a hero section.',
    type: 'hero',
    image: textBadgesManifest.image,
    blocks: [
      backgroundMediaManifest,
      textBadgesManifest,
      heroContentMediaManifest,
      heroHeadlinePreviewManifest,
      heroLogosCarouselManifest,
    ],
  },
  {
    slug: 'content',
    category: 'Content',
    description:
      'Content components to display information in an organized way.',
    type: 'content',
    image: gridTwoColumnsManifest.image,
    blocks: [
      gridTwoColumnsManifest,
      selectRevealMediaManifest,
      centeredTextManifest,
      focusGridManifest,
      gridCardsManifest,
      gridMediaCardsManifest,
      tabsMediaManifest,
      mediaGridInteractiveManifest,
      gridWithMediaTopManifest,
      iconListManifest,
      badgeListManifest,
      gridContentColumnsManifest,
      gridContentCardsManifest,
      titleWithMediaManifest,
    ],
  },
  {
    slug: 'carousel',
    category: 'Carousel',
    description: 'A carousel that pauses on item hover and reveals title.',
    type: 'carousel',
    image: carouselFocusManifest.image,
    blocks: [carouselFocusManifest, carouselMediaManifest, carouselCardsManifest],
  },
  {
    slug: 'showcase',
    category: 'Showcase',
    description: 'Showcase components to display information.',
    type: 'showcase',
    image: showcaseGridMediaCardsManifest.image,
    blocks: [showcaseGridMediaCardsManifest],
  },
  {
    slug: 'bento-grids',
    category: 'Bento grids',
    description:
      'Bento-style grids with a prominent primary tile and supporting cards.',
    type: 'bento-grids',
    image: primaryItemGridManifest.image,
    blocks: [primaryItemGridManifest],
  },
  {
    slug: 'logos',
    category: 'Logos',
    description: 'Minimalist logo carousels with auto-scroll and edge fade.',
    type: 'logos',
    image: logoMarqueeManifest.image,
    blocks: [logoMarqueeManifest],
  },
  {
    slug: 'testimonials',
    category: 'Testimonials',
    description: 'Minimal testimonial blocks for concise social proof.',
    type: 'testimonials',
    image: singleTestimonialManifest.image,
    blocks: [singleTestimonialManifest],
  },
  {
    slug: 'scroll',
    category: 'Scroll',
    description: 'Scroll-based interactive blocks with animations.',
    type: 'scroll',
    hasNew: true,
    image: stickyScrollMediaManifest.image,
    blocks: [stickyScrollMediaManifest],
  },
]

export const allManifests: BlockManifest[] = categories.flatMap((c) => c.blocks)

function manifestToBlockItem(m: BlockManifest): BlockItem {
  return {
    name: m.name,
    description: m.description,
    image: m.image,
    slug: m.slug,
    hasNew: m.hasNew,
    meta: m.meta,
  }
}

export const blocks: BlockCategory[] = categories.map((cat) => ({
  slug: cat.slug,
  category: cat.category,
  description: cat.description,
  type: cat.type,
  hasNew: cat.hasNew,
  image: cat.image,
  blocks: cat.blocks.map(manifestToBlockItem),
}))

export function getBlockBySlug(slug: string): BlockManifest | undefined {
  return allManifests.find((m) => m.slug === slug)
}

export type { BlockCategory, BlockItem, BlockImage, BlockManifest }
