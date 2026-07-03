import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero06 } from './hero-06'
import { Hero06EditorFields } from './editor/fields'
import { Hero06Example, values } from './hero-06-example'

export const manifest: BlockManifest = {
  slug: 'hero-06',
  name: 'Hero 06',
  description:
    'A split product hero with dual CTA, a compact logo row, and the Spot 01 illustration.',
  category: 'hero',
  image: {
    light: '/images/blocks/hero/hero-06.png',
    dark: '/images/blocks/hero/hero-06-dark.png',
  },
  meta: {
    iframeHeight: 820,
  },
  component: Hero06,
  editorFields: Hero06EditorFields,
  example: Hero06Example,
  defaults: values,
}
