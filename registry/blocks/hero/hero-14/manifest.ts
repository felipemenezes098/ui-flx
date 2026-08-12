import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero14 } from './hero-14'
import { Hero14EditorFields } from './editor/fields'
import { Hero14Example, values } from './hero-14-example'

export const manifest: BlockManifest = {
  slug: 'hero-14',
  name: 'Hero 14',
  description:
    'A centered product hero with dual CTAs, a full-width photo with a floating block-builder demo panel, and a logo strip.',
  category: 'hero',
  preset: 'vellum',
  image: {
    light: '/images/blocks/hero/hero-14.webp',
    dark: '/images/blocks/hero/hero-14-dark.webp',
  },
  meta: {
    iframeHeight: 1200,
  },
  hasNew: true,
  component: Hero14,
  editorFields: Hero14EditorFields,
  example: Hero14Example,
  defaults: values,
}
