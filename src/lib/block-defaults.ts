import { bentoGridsDefaults } from '../components/flx/blocks/bento-grids/bento-grids-defaults'
import { carouselDefaults } from '../components/flx/blocks/carousel/carousel-defaults'
import { contentDefaults } from '../components/flx/blocks/content/content-defaults'
import { heroDefaults } from '../components/flx/blocks/hero/hero-defaults'
import { logosDefaults } from '../components/flx/blocks/logos/logos-defaults'
import { showcaseDefaults } from '../components/flx/blocks/showcase/showcase-defaults'

export const blockDefaults = {
  ...heroDefaults,
  ...contentDefaults,
  ...carouselDefaults,
  ...showcaseDefaults,
  ...logosDefaults,
  ...bentoGridsDefaults,
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
