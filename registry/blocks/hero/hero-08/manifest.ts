import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero08 } from './hero-08'
import { Hero08EditorFields } from './editor/fields'
import { Hero08Example, values } from './hero-08-example'

export const manifest: BlockManifest = {
  slug: 'hero-08',
  name: 'Hero 08',
  description:
    'A split hero with a bold headline, avatar social proof, and two image cards with invertible overlay text and CTAs.',
  category: 'hero',
  image: {
    light: '/images/blocks/hero/hero-08.png',
    dark: '/images/blocks/hero/hero-08-dark.png',
  },
  meta: {
    iframeHeight: 820,
  },
  component: Hero08,
  editorFields: Hero08EditorFields,
  example: Hero08Example,
  defaults: values,
}
