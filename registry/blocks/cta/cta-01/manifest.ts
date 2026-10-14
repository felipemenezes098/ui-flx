import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Cta01 } from './cta-01'

export const manifest: BlockManifest = {
  slug: 'cta-01',
  name: 'Call to Action 01',
  description: 'A centered text block with a title, description, and CTA.',
  category: 'cta',
  preset: 'vellum',
  image: {
    light: '/images/blocks/cta/cta-01.webp',
    dark: '/images/blocks/cta/cta-01-dark.webp',
  },
  component: Cta01,
  meta: {
    iframeHeight: 600,
  },
}
