import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content07 } from './content-07'
import { Content07EditorFields } from './editor/fields'
import { Content07Example, values } from './content-07-example'

export const manifest: BlockManifest = {
  slug: 'content-07',
  name: 'Content 07',
  description: 'A grid of content columns with a media above the content.',
  category: 'content',
  image: {
    light: '/images/blocks/content/content-07.png',
    dark: '/images/blocks/content/content-07.png',
  },
  component: Content07,
  editorFields: Content07EditorFields,
  example: Content07Example,
  defaults: values,
}
