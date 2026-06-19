import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content14 } from './content-14'
import { Content14EditorFields } from './editor/fields'
import { Content14Example, values } from './content-14-example'

export const manifest: BlockManifest = {
  slug: 'content-14',
  name: 'Content 14',
  description: 'A title with a media above the title.',
  category: 'content',
  image: {
    light: '/images/blocks/content/content-14.png',
    dark: '/images/blocks/content/content-14.png',
  },
  component: Content14,
  editorFields: Content14EditorFields,
  example: Content14Example,
  defaults: values,
}
