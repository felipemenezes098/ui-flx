import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero10 } from './hero-10'
import { Hero10EditorFields } from './editor/fields'
import { Hero10Example, values } from './hero-10-example'

export const manifest: BlockManifest = {
  slug: 'hero-10',
  name: 'Hero 10',
  description:
    'A centered hero with a highlighted headline, dual CTAs, social proof, and a fanned collage of three overlapping images.',
  category: 'hero',
  image: {
    light: '/images/blocks/hero/hero-10.png',
    dark: '/images/blocks/hero/hero-10-dark.png',
  },
  meta: {
    iframeHeight: 1100,
  },
  component: Hero10,
  editorFields: Hero10EditorFields,
  example: Hero10Example,
  defaults: values,
}
