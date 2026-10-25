import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Lists02 } from './lists-02'

export const manifest: BlockManifest = {
  slug: 'lists-02',
  name: 'Lists 02',
  description:
    'A centered title with a year, a column of boxed tags beside a large paragraph, and a ruled description list of labelled details.',
  category: 'lists',
  preset: 'vellum',
  image: {
    light: '/images/blocks/lists/lists-02.webp',
    dark: '/images/blocks/lists/lists-02-dark.webp',
  },
  meta: {
    iframeHeight: 800,
  },
  hasNew: true,
  component: Lists02,
}
