import type { BlockManifest } from '@/lib/block-manifest-types'
import { MediaGridInteractive } from './media-grid-interactive'
import { MediaGridInteractiveEditorFields } from './editor/fields'
import { MediaGridInteractiveExample, values } from './media-grid-interactive-example'

export const manifest: BlockManifest = {
  slug: 'media-grid-interactive',
  name: 'Media Grid Interactive',
  description:
    'A grid of items with a title and description, clickable to view details.',
  category: 'content',
  image: {
    light: '/images/blocks/content/contentMediaGridInteractive.png',
    dark: '/images/blocks/content/contentMediaGridInteractive.png',
  },
  component: MediaGridInteractive,
  editorFields: MediaGridInteractiveEditorFields,
  example: MediaGridInteractiveExample,
  defaults: values,
}
