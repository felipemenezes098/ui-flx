import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Lists01 } from './lists-01'

export const manifest: BlockManifest = {
  slug: 'lists-01',
  name: 'Lists 01',
  description:
    'A filterable list of projects with a row of line tabs, then ruled rows pairing a title and meta, a short description with a pill button, and a wide photo.',
  category: 'lists',
  preset: 'vellum',
  image: {
    light: '/images/blocks/lists/lists-01.webp',
    dark: '/images/blocks/lists/lists-01-dark.webp',
  },
  meta: {
    iframeHeight: 1300,
  },
  hasNew: true,
  component: Lists01,
}
