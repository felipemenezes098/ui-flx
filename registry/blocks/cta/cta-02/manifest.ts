import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Cta02 } from './cta-02'

export const manifest: BlockManifest = {
  slug: 'cta-02',
  name: 'Call to Action 02',
  description:
    'An oversized two-word headline split around a full-bleed photo, with a bracketed call to action at its center.',
  category: 'cta',
  preset: 'vellum',
  image: {
    light: '/images/blocks/cta/cta-02.webp',
    dark: '/images/blocks/cta/cta-02-dark.webp',
  },
  meta: {
    iframeHeight: 900,
  },
  hasNew: true,
  component: Cta02,
}
