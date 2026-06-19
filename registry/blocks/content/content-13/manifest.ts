import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content13 } from './content-13'
import { Content13EditorFields } from './editor/fields'
import { Content13Example, values } from './content-13-example'

export const manifest: BlockManifest = {
  slug: 'content-13',
  name: 'Content 13',
  description: 'List of badges with a title and items.',
  category: 'content',
  image: {
    light: '/images/blocks/content/content-13.png',
    dark: '/images/blocks/content/content-13.png',
  },
  component: Content13,
  editorFields: Content13EditorFields,
  example: Content13Example,
  defaults: values,
}
