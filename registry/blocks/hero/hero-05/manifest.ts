import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero05 } from './hero-05'
import { Hero05EditorFields } from './editor/fields'
import { Hero05Example, values } from './hero-05-example'

export const manifest: BlockManifest = {
  slug: 'hero-05',
  name: 'Hero 05',
  description: 'A text badges with a title, CTA and badges.',
  category: 'hero',
  image: {
    light: '/images/blocks/hero/hero-05.png',
    dark: '/images/blocks/hero/hero-05-dark.png',
  },
  component: Hero05,
  editorFields: Hero05EditorFields,
  example: Hero05Example,
  defaults: values,
}
