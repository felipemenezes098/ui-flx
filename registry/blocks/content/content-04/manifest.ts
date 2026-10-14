import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content04 } from './content-04'

export const manifest: BlockManifest = {
  slug: 'content-04',
  name: 'Content 04',
  description:
    'Two-column card grid with a serif section header and copy above each image.',
  category: 'content',
  preset: 'sienna',
  image: {
    light: '/images/blocks/content/content-04.webp',
    dark: '/images/blocks/content/content-04-dark.webp',
  },
  meta: {
    iframeHeight: 900,
  },
  component: Content04,
}
