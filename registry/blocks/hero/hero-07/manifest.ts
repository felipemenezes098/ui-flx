import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero07 } from './hero-07'
import { Hero07EditorFields } from './editor/fields'
import { Hero07Example, values } from './hero-07-example'

export const manifest: BlockManifest = {
  slug: 'hero-07',
  name: 'Hero 07',
  description:
    'An editorial hero with a full-width image above, a top-aligned tagline, and right-aligned headline and copy below.',
  category: 'hero',
  image: {
    light: '/images/blocks/hero/hero-07.png',
    dark: '/images/blocks/hero/hero-07-dark.png',
  },
  meta: {
    iframeHeight: 1100,
  },
  component: Hero07,
  editorFields: Hero07EditorFields,
  example: Hero07Example,
  defaults: values,
}
