import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content11 } from './content-11'
import { Content11EditorFields } from './editor/fields'
import { Content11Example, values } from './content-11-example'

export const manifest: BlockManifest = {
  slug: 'content-11',
  name: 'Content 11',
  description: 'Media on top with information below.',
  category: 'content',
  image: {
    light: '/images/blocks/content/content-11.png',
    dark: '/images/blocks/content/content-11.png',
  },
  component: Content11,
  editorFields: Content11EditorFields,
  example: Content11Example,
  defaults: values,
}
