import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Showcase01 } from './showcase-01'
import { Showcase01EditorFields } from './editor/fields'
import { Showcase01Example, values } from './showcase-01-example'

export const manifest: BlockManifest = {
  slug: 'showcase-01',
  name: 'Showcase 01',
  description: 'Grid with media cards to display information.',
  category: 'showcase',
  image: {
    light: '/images/blocks/showcase/showcase-01.png',
    dark: '/images/blocks/showcase/showcase-01-dark.png',
  },
  component: Showcase01,
  editorFields: Showcase01EditorFields,
  example: Showcase01Example,
  defaults: values,
}
