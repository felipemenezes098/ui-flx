import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content09 } from './content-09'

export const manifest: BlockManifest = {
  slug: 'content-09',
  name: 'Content 09',
  description: 'Two-column icon card grid with a serif section header.',
  category: 'content',
  preset: 'sienna',
  image: {
    light: '/images/blocks/content/content-09.webp',
    dark: '/images/blocks/content/content-09-dark.webp',
  },
  meta: {
    iframeHeight: 700,
  },
  component: Content09,
}
