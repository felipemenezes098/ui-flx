import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Feature03 } from './feature-03'

export const manifest: BlockManifest = {
  slug: 'feature-03',
  name: 'Feature 03',
  description:
    'A sticky title/description column paired with a scrolling list of features, each with its own title, description, and media.',
  category: 'feature',
  preset: 'vellum',
  image: {
    light: '/images/blocks/feature/feature-03.webp',
    dark: '/images/blocks/feature/feature-03-dark.webp',
  },
  meta: {
    iframeHeight: 1400,
    captureDelay: 1400,
    captureViewportOnly: true,
  },
  component: Feature03,
}
