import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content17 } from './content-17'

export const manifest: BlockManifest = {
  slug: 'content-17',
  name: 'Content 17',
  description:
    'A short headline above two photos staggered on a diagonal, one landscape on the left and one portrait lower on the right.',
  category: 'content',
  preset: 'vellum',
  image: {
    light: '/images/blocks/content/content-17.webp',
    dark: '/images/blocks/content/content-17-dark.webp',
  },
  meta: {
    iframeHeight: 900,
  },
  hasNew: true,
  component: Content17,
}
