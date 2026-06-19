import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content06 } from './content-06'
import { Content06EditorFields } from './editor/fields'
import { Content06Example, values } from './content-06-example'

export const manifest: BlockManifest = {
  slug: 'content-06',
  name: 'Content 06',
  description: 'It shows two columns of information.',
  category: 'content',
  image: {
    light: '/images/blocks/content/content-06.png',
    dark: '/images/blocks/content/content-06.png',
  },
  component: Content06,
  editorFields: Content06EditorFields,
  example: Content06Example,
  defaults: values,
}
