import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content01 } from './content-01'
import { Content01EditorFields } from './editor/fields'
import { Content01Example, values } from './content-01-example'

export const manifest: BlockManifest = {
  slug: 'content-01',
  name: 'Content 01',
  description: 'List of items: select one to reveal its description and media.',
  category: 'content',
  image: {
    light: '/images/blocks/content/content-01.png',
    dark: '/images/blocks/content/content-01.png',
  },
  component: Content01,
  editorFields: Content01EditorFields,
  example: Content01Example,
  defaults: values,
}
