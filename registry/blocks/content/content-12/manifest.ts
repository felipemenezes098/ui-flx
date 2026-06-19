import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content12 } from './content-12'
import { Content12EditorFields } from './editor/fields'
import { Content12Example, values } from './content-12-example'

export const manifest: BlockManifest = {
  slug: 'content-12',
  name: 'Content 12',
  description: 'List of icons with a title and items.',
  category: 'content',
  image: {
    light: '/images/blocks/content/content-12.png',
    dark: '/images/blocks/content/content-12.png',
  },
  component: Content12,
  editorFields: Content12EditorFields,
  example: Content12Example,
  defaults: values,
}
