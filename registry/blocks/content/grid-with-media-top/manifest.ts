import type { BlockManifest } from '@/lib/block-manifest-types'
import { GridWithMediaTop } from './grid-with-media-top'
import { GridWithMediaTopEditorFields } from './editor/fields'
import { GridWithMediaTopExample, values } from './grid-with-media-top-example'

export const manifest: BlockManifest = {
  slug: 'grid-with-media-top',
  name: 'Grid With Media Top',
  description: 'Media on top with information below.',
  category: 'content',
  image: {
    light: '/images/blocks/content/contentGridWithMediaTop.png',
    dark: '/images/blocks/content/contentGridWithMediaTop.png',
  },
  component: GridWithMediaTop,
  editorFields: GridWithMediaTopEditorFields,
  example: GridWithMediaTopExample,
  defaults: values,
}
