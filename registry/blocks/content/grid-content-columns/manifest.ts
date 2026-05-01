import type { BlockManifest } from '@/lib/block-manifest-types'
import { GridContentColumns } from './grid-content-columns'
import { GridContentColumnsEditorFields } from './editor/fields'
import { GridContentColumnsExample, values } from './grid-content-columns-example'

export const manifest: BlockManifest = {
  slug: 'grid-content-columns',
  name: 'Grid Content Columns',
  description: 'A grid of content columns with a media above the content.',
  category: 'content',
  image: {
    light: '/images/blocks/content/contentGridContentColumns.png',
    dark: '/images/blocks/content/contentGridContentColumns.png',
  },
  component: GridContentColumns,
  editorFields: GridContentColumnsEditorFields,
  example: GridContentColumnsExample,
  defaults: values,
}
