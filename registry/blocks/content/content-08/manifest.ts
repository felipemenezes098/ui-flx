import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content08 } from './content-08'
import { Content08EditorFields } from './editor/fields'
import { Content08Example, values } from './content-08-example'

export const manifest: BlockManifest = {
  slug: 'content-08',
  name: 'Content 08',
  description: 'A centered text block with a title, description, and CTA.',
  category: 'content',
  image: {
    light: '/images/blocks/content/content-08.png',
    dark: '/images/blocks/content/content-08.png',
  },
  component: Content08,
  editorFields: Content08EditorFields,
  example: Content08Example,
  defaults: values,
}
