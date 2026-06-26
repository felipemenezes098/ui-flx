import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content03 } from './content-03'
import { Content03EditorFields } from './editor/fields'
import { Content03Example, values } from './content-03-example'

export const manifest: BlockManifest = {
  slug: 'content-03',
  name: 'Content 03',
  description: 'Tabbed navigation that reveals a media for each tab.',
  category: 'content',
  image: {
    light: '/images/blocks/content/content-03.png',
    dark: '/images/blocks/content/content-03-dark.png',
  },
  meta: {
    iframeHeight: 800,
  },
  component: Content03,
  editorFields: Content03EditorFields,
  example: Content03Example,
  defaults: values,
}
