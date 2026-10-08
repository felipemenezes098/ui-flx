import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content06 } from './content-06'

export const manifest: BlockManifest = {
  slug: 'content-06',
  name: 'Content 06',
  description:
    'Two-column split with serif headline, supporting copy, optional CTA, and a media panel.',
  category: 'content',
  preset: 'sienna',
  image: {
    light: '/images/blocks/content/content-06.webp',
    dark: '/images/blocks/content/content-06-dark.webp',
  },
  meta: {
    iframeHeight: 700,
  },
  component: Content06,
}
