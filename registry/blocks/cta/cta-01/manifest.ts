import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Cta01 } from './cta-01'
import { Cta01EditorFields } from './editor/fields'
import { Cta01Example, values } from './cta-01-example'

export const manifest: BlockManifest = {
  slug: 'cta-01',
  name: 'Call to Action 01',
  description: 'A centered text block with a title, description, and CTA.',
  category: 'cta',
  image: {
    light: '/images/blocks/cta/cta-01.png',
    dark: '/images/blocks/cta/cta-01-dark.png',
  },
  component: Cta01,
  editorFields: Cta01EditorFields,
  example: Cta01Example,
  defaults: values,
}
