import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content10 } from './content-10'
import { Content10EditorFields } from './editor/fields'
import { Content10Example, values } from './content-10-example'

export const manifest: BlockManifest = {
  slug: 'content-10',
  name: 'Content 10',
  description:
    'A process section with a split title/description header and a portrait image flanked by two columns of numbered step cards.',
  category: 'content',
  preset: 'vellum',
  image: {
    light: '/images/blocks/content/content-10.webp',
    dark: '/images/blocks/content/content-10-dark.webp',
  },
  meta: {
    iframeHeight: 1000,
    captureDelay: 1200,
  },
  component: Content10,
  editorFields: Content10EditorFields,
  example: Content10Example,
  defaults: values,
}
