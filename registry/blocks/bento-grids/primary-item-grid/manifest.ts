import type { BlockManifest } from '@/lib/block-manifest-types'
import { PrimaryItemGrid } from './primary-item-grid'
import { PrimaryItemGridEditorFields } from './editor/fields'
import { PrimaryItemGridExample, values } from './primary-item-grid-example'

export const manifest: BlockManifest = {
  slug: 'primary-item-grid',
  name: 'Primary Item Grid',
  description:
    'Three-column bento: primary tile (two-thirds) with title, description, CTA and media, plus supporting image cards.',
  category: 'bento-grids',
  image: {
    light: '/images/blocks/bento-grids/primaryItemGrid.png',
    dark: '/images/blocks/bento-grids/primaryItemGrid.png',
  },
  meta: {
    iframeHeight: 850,
  },
  component: PrimaryItemGrid,
  editorFields: PrimaryItemGridEditorFields,
  example: PrimaryItemGridExample,
  defaults: values,
}
