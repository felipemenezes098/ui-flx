import type { BlockCategory, BlockImage, BlockItem, BlockManifest } from './block-manifest-types'

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

export const allManifests: BlockManifest[] = [
  backgroundMediaManifest,
  textBadgesManifest,
  heroContentMediaManifest,
  heroLogosCarouselManifest,
  heroHeadlinePreviewManifest,
  carouselFocusManifest,
  carouselCardsManifest,
  carouselMediaManifest,
  centeredTextManifest,
  focusGridManifest,
  gridCardsManifest,
  gridContentCardsManifest,
  gridContentColumnsManifest,
  gridMediaCardsManifest,
  gridTwoColumnsManifest,
  gridWithMediaTopManifest,
  iconListManifest,
  badgeListManifest,
  mediaGridInteractiveManifest,
  selectRevealMediaManifest,
  tabsMediaManifest,
  titleWithMediaManifest,
  showcaseGridMediaCardsManifest,
  primaryItemGridManifest,
  logoMarqueeManifest,
  singleTestimonialManifest,
  stickyScrollMediaManifest,
]

interface CategoryMeta {
  slug: string
  category: string
  description: string
  type: string
  hasNew?: boolean
}

const categoryMeta: CategoryMeta[] = [
  {
    slug: 'hero',
    category: 'Hero',
    description: 'Components to display information in a hero section.',
    type: 'hero',
  },
  {
    slug: 'content',
    category: 'Content',
    description:
      'Content components to display information in an organized way.',
    type: 'content',
  },
  {
    slug: 'carousel',
    category: 'Carousel',
    description: 'A carousel that pauses on item hover and reveals title.',
    type: 'carousel',
  },
  {
    slug: 'showcase',
    category: 'Showcase',
    description: 'Showcase components to display information.',
    type: 'showcase',
  },
  {
    slug: 'bento-grids',
    category: 'Bento grids',
    description:
      'Bento-style grids with a prominent primary tile and supporting cards.',
    type: 'bento-grids',
  },
  {
    slug: 'logos',
    category: 'Logos',
    description: 'Minimalist logo carousels with auto-scroll and edge fade.',
    type: 'logos',
  },
  {
    slug: 'testimonials',
    category: 'Testimonials',
    description: 'Minimal testimonial blocks for concise social proof.',
    type: 'testimonials',
  },
  {
    slug: 'scroll',
    category: 'Scroll',
    description: 'Scroll-based interactive blocks with animations.',
    type: 'scroll',
    hasNew: true,
  },
]

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

export const blocks: BlockCategory[] = categoryMeta.map((cat) => {
  const categoryBlocks = allManifests.filter((m) => m.category === cat.slug)
  const firstImage: BlockImage = categoryBlocks[0]?.image ?? {
    light: '',
    dark: '',
  }
  return {
    ...cat,
    image: firstImage,
    blocks: categoryBlocks.map(manifestToBlockItem),
  }
})

export function getBlockBySlug(slug: string): BlockManifest | undefined {
  return allManifests.find((m) => m.slug === slug)
}

export function getBlockComponent(
  slug: string,
): React.ComponentType<any> | undefined {
  return getBlockBySlug(slug)?.component
}

export function getBlockEditorFields(
  slug: string,
): React.ComponentType<any> | undefined {
  return getBlockBySlug(slug)?.editorFields
}

export function getBlockExample(
  slug: string,
): React.ComponentType<any> | undefined {
  return getBlockBySlug(slug)?.example
}

export function getBlockVariationExample(
  slug: string,
  variation: string,
): React.ComponentType<any> | undefined {
  return getBlockBySlug(slug)?.variations?.[variation]
}

export function getBlockVariationNames(slug: string): string[] {
  return Object.keys(getBlockBySlug(slug)?.variations ?? {})
}

export function getBlockDefaults(
  slug: string,
  variation?: string,
): Record<string, unknown> {
  const manifest = getBlockBySlug(slug)
  if (!manifest) return {}
  return manifest.defaults as Record<string, unknown>
}

export function getBlockDefaultsFromRegistry(
  slug: string,
  variation?: string,
): Record<string, unknown> {
  return getBlockDefaults(slug, variation)
}

export function getBlockConfig(
  categorySlug: string,
  blockSlug: string,
): BlockItem | null {
  const category = blocks.find((c) => c.slug === categorySlug)
  if (!category) return null
  return category.blocks.find((b) => b.slug === blockSlug) ?? null
}

export type { BlockItem, BlockCategory, BlockImage, BlockManifest }
