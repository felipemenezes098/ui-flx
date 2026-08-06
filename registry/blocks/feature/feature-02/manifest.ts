import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Feature02 } from './feature-02'
import { Feature02EditorFields } from './editor/fields'
import { Feature02Example, values } from './feature-02-example'

export const manifest: BlockManifest = {
  slug: 'feature-02',
  name: 'Feature 02',
  description:
    'A process section with a split title/description header and a portrait image flanked by two columns of numbered step cards.',
  category: 'feature',
  preset: 'vellum',
  image: {
    light: '/images/blocks/feature/feature-02.webp',
    dark: '/images/blocks/feature/feature-02-dark.webp',
  },
  meta: {
    iframeHeight: 1000,
    captureDelay: 1200,
  },
  component: Feature02,
  editorFields: Feature02EditorFields,
  example: Feature02Example,
  defaults: values,
}
