import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Feature05 } from './feature-05'

export const manifest: BlockManifest = {
  slug: 'feature-05',
  name: 'Feature 05',
  description:
    'A centered product title over three icon features, a large product photo and a product card with finish swatches and a CTA.',
  category: 'feature',
  preset: 'vellum',
  image: {
    light: '/images/blocks/feature/feature-05.webp',
    dark: '/images/blocks/feature/feature-05-dark.webp',
  },
  meta: {
    iframeHeight: 1100,
  },
  hasNew: true,
  component: Feature05,
}
