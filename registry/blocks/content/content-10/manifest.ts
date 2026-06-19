import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content10 } from './content-10'
import { Content10EditorFields } from './editor/fields'
import { Content10Example, values } from './content-10-example'

export const manifest: BlockManifest = {
  slug: 'content-10',
  name: 'Content 10',
  description:
    'A grid of items with a title and description, clickable to view details.',
  category: 'content',
  image: {
    light: '/images/blocks/content/content-10.png',
    dark: '/images/blocks/content/content-10.png',
  },
  component: Content10,
  editorFields: Content10EditorFields,
  example: Content10Example,
  defaults: values,
}
