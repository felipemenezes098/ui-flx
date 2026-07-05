import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero04 } from './hero-04'
import { Hero04EditorFields } from './editor/fields'
import { Hero04Example, values } from './hero-04-example'

export const manifest: BlockManifest = {
  slug: 'hero-04',
  name: 'Hero 04',
  description:
    'A two-column editorial hero with a soft background wash and a layered collage of two overlapping art images.',
  category: 'hero',
  image: {
    light: '/images/blocks/hero/hero-04.png',
    dark: '/images/blocks/hero/hero-04-dark.png',
  },
  meta: {
    iframeHeight: 820,
  },
  component: Hero04,
  editorFields: Hero04EditorFields,
  example: Hero04Example,
  defaults: values,
}
