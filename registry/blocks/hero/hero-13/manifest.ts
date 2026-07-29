import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero13 } from './hero-13'
import { Hero13EditorFields } from './editor/fields'
import { Hero13Example, values } from './hero-13-example'

export const manifest: BlockManifest = {
  slug: 'hero-13',
  name: 'Hero 13',
  description:
    'Asymmetric editorial hero with serif brand title, supporting copy, and two overlapping media frames.',
  category: 'hero',
  preset: 'sienna',
  image: {
    light: '/images/blocks/hero/hero-13.webp?v=2',
    dark: '/images/blocks/hero/hero-13-dark.webp?v=2',
  },
  meta: {
    iframeHeight: 1100,
    captureDelay: 3000,
  },
  component: Hero13,
  editorFields: Hero13EditorFields,
  example: Hero13Example,
  defaults: values,
}
