import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content14 } from './content-14'

export const manifest: BlockManifest = {
  slug: 'content-14',
  name: 'Content 14',
  description:
    'A two-weight studio title with a short intro and link beside a square photo, followed by a bordered row of client marks.',
  category: 'content',
  preset: 'vellum',
  image: {
    light: '/images/blocks/content/content-14.webp',
    dark: '/images/blocks/content/content-14-dark.webp',
  },
  meta: {
    iframeHeight: 1000,
  },
  hasNew: true,
  component: Content14,
}
