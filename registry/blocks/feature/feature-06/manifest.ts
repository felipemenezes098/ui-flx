import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Feature06 } from './feature-06'

export const manifest: BlockManifest = {
  slug: 'feature-06',
  name: 'Feature 06',
  description:
    'A short title and a numbered list of four features beside a large photo overlapped by a smaller one.',
  category: 'feature',
  preset: 'vellum',
  image: {
    light: '/images/blocks/feature/feature-06.webp',
    dark: '/images/blocks/feature/feature-06-dark.webp',
  },
  meta: {
    iframeHeight: 900,
  },
  hasNew: true,
  component: Feature06,
}
