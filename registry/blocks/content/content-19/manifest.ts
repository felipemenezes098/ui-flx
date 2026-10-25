import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content19 } from './content-19'

export const manifest: BlockManifest = {
  slug: 'content-19',
  name: 'Content 19',
  description:
    'A journal index with a small label and title, a large photo, three short articles with thumbnails and a tall photo in an offset grid.',
  category: 'content',
  preset: 'vellum',
  image: {
    light: '/images/blocks/content/content-19.webp',
    dark: '/images/blocks/content/content-19-dark.webp',
  },
  meta: {
    iframeHeight: 1300,
  },
  hasNew: true,
  component: Content19,
}
