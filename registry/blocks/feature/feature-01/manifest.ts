import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Feature01 } from './feature-01'
import { Feature01EditorFields } from './editor/fields'
import { Feature01Example, values } from './feature-01-example'

export const manifest: BlockManifest = {
  slug: 'feature-01',
  name: 'Feature 01',
  description: 'List of items: select one to reveal its description and media.',
  category: 'feature',
  preset: 'sienna',
  image: {
    light: '/images/blocks/feature/feature-01.webp',
    dark: '/images/blocks/feature/feature-01-dark.webp',
  },
  component: Feature01,
  editorFields: Feature01EditorFields,
  example: Feature01Example,
  defaults: values,
  meta: {
    iframeHeight: 700,
  },
}
