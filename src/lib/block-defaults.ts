import { testimonialsDefaults } from '../../registry/blocks/testimonials/testimonials-defaults'
import { bentoGridsDefaults } from '../../registry/blocks/bento-grids/bento-grids-defaults'
import { carouselDefaults } from '../../registry/blocks/carousel/carousel-defaults'
import { contentDefaults } from '../../registry/blocks/content/content-defaults'
import { heroDefaults } from '../../registry/blocks/hero/hero-defaults'
import { logosDefaults } from '../../registry/blocks/logos/logos-defaults'
import { showcaseDefaults } from '../../registry/blocks/showcase/showcase-defaults'
import { scrollDefaults } from '../../registry/blocks/scroll/scroll-defaults'

export const blockDefaults = {
  ...heroDefaults,
  ...contentDefaults,
  ...carouselDefaults,
  ...showcaseDefaults,
  ...logosDefaults,
  ...bentoGridsDefaults,
  ...testimonialsDefaults,
  ...scrollDefaults,
} as const

type BlockSlug = keyof typeof blockDefaults

export function getBlockDefaults(
  blockSlug: string,
  variation?: string,
): Record<string, unknown> {
  const entry = blockDefaults[blockSlug as BlockSlug] as
    | { default: Record<string, unknown>; [k: string]: Record<string, unknown> }
    | undefined
  if (!entry || !('default' in entry)) return {}
  if (variation && variation in entry) return entry[variation] ?? entry.default
  return entry.default
}

export function getBlockVariationNames(slug: string): string[] {
  const entry = blockDefaults[slug as BlockSlug] as
    | { default: Record<string, unknown>; [k: string]: unknown }
    | undefined
  if (!entry || typeof entry !== 'object' || !('default' in entry)) return []
  return Object.keys(entry).filter((k) => k !== 'default')
}
