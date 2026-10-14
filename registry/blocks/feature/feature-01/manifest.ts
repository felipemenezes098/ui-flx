import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Feature01 } from './feature-01'

export const manifest: BlockManifest = {
  slug: 'feature-01',
  name: 'Feature 01',
  description: 'List of items: select one to reveal its description and media.',
  category: 'feature',
  preset: 'sienna',
  image: {
    light: '/images/blocks/feature/feature-01.webp',
    dark: '/images/blocks/feature/feature-01-dark.webp',
  },
  component: Feature01,
  meta: {
    iframeHeight: 700,
  },
}
