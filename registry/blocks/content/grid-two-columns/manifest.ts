import type { BlockManifest } from '@/lib/block-manifest-types'
import { GridTwoColumns } from './grid-two-columns'
import { GridTwoColumnsEditorFields } from './editor/fields'
import { GridTwoColumnsExample, values } from './grid-two-columns-example'

export const manifest: BlockManifest = {
  slug: 'grid-two-columns',
  name: 'Grid Two Columns',
  description: 'It shows two columns of information.',
  category: 'content',
  image: {
    light: '/images/blocks/content/contentGridTwoColumns.png',
    dark: '/images/blocks/content/contentGridTwoColumns.png',
  },
  component: GridTwoColumns,
  editorFields: GridTwoColumnsEditorFields,
  example: GridTwoColumnsExample,
  defaults: values,
}
