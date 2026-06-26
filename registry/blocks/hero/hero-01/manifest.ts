import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero01 } from './hero-01'
import { Hero01EditorFields } from './editor/fields'
import { Hero01Example, values } from './hero-01-example'

export const manifest: BlockManifest = {
  slug: 'hero-01',
  name: 'Hero 01',
  description: 'A background media with a title, description and CTA.',
  category: 'hero',
  image: {
    light: '/images/blocks/hero/hero-01.png',
    dark: '/images/blocks/hero/hero-01-dark.png',
  },
  meta: {
    iframeHeight: 600,
  },
  component: Hero01,
  editorFields: Hero01EditorFields,
  example: Hero01Example,
  defaults: values,
}
