import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content04 } from './content-04'
import { Content04EditorFields } from './editor/fields'
import { Content04Example, values } from './content-04-example'

export const manifest: BlockManifest = {
  slug: 'content-04',
  name: 'Content 04',
  description:
    'Two-column grid of cards: title, description, and image at the bottom.',
  category: 'content',
  image: {
    light: '/images/blocks/content/content-04.png',
    dark: '/images/blocks/content/content-04-dark.png',
  },
  component: Content04,
  editorFields: Content04EditorFields,
  example: Content04Example,
  defaults: values,
}
