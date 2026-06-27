import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero06 } from './hero-06'
import { Hero06EditorFields } from './editor/fields'
import { Hero06Example, values } from './hero-06-example'

export const manifest: BlockManifest = {
  slug: 'hero-06',
  name: 'Hero 06',
  description:
    'A large, minimal product hero with dual CTA, highlight row, framed image preview, and a logo strip.',
  category: 'hero',
  image: {
    light: '/images/blocks/hero/hero-06.png',
    dark: '/images/blocks/hero/hero-06-dark.png',
  },
  meta: {
    iframeHeight: 820,
  },
  hasNew: true,
  component: Hero06,
  editorFields: Hero06EditorFields,
  example: Hero06Example,
  defaults: values,
}
