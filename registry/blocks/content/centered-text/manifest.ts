import type { BlockManifest } from '@/lib/block-manifest-types'
import { CenteredText } from './centered-text'
import { CenteredTextEditorFields } from './editor/fields'
import { CenteredTextExample, values } from './centered-text-example'

export const manifest: BlockManifest = {
  slug: 'centered-text',
  name: 'Centered Text',
  description: 'A centered text block with a title, description, and CTA.',
  category: 'content',
  image: {
    light: '/images/blocks/content/contentCenteredText.png',
    dark: '/images/blocks/content/contentCenteredText.png',
  },
  component: CenteredText,
  editorFields: CenteredTextEditorFields,
  example: CenteredTextExample,
  defaults: values,
}
