import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content02 } from './content-02'
import { Content02EditorFields } from './editor/fields'
import { Content02Example, values } from './content-02-example'

export const manifest: BlockManifest = {
  slug: 'content-02',
  name: 'Content 02',
  description:
    'A grid of media cards with a section header and item details below each image.',
  category: 'content',
  image: {
    light: '/images/blocks/content/content-02.png',
    dark: '/images/blocks/content/content-02-dark.png',
  },
  component: Content02,
  editorFields: Content02EditorFields,
  example: Content02Example,
  defaults: values,
  meta: {
    iframeHeight: 900,
  },
}
