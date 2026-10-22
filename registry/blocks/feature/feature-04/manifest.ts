import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Feature04 } from './feature-04'

export const manifest: BlockManifest = {
  slug: 'feature-04',
  name: 'Feature 04',
  description:
    'A title with a two-column list of ruled milestones below it, beside a tall photo.',
  category: 'feature',
  preset: 'vellum',
  image: {
    light: '/images/blocks/feature/feature-04.webp',
    dark: '/images/blocks/feature/feature-04-dark.webp',
  },
  meta: {
    iframeHeight: 1000,
  },
  hasNew: true,
  component: Feature04,
}
