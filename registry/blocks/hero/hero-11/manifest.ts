import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero11 } from './hero-11'
import { Hero11EditorFields } from './editor/fields'
import { Hero11Example, values } from './hero-11-example'

export const manifest: BlockManifest = {
  slug: 'hero-11',
  name: 'Hero 11',
  description:
    'A split-copy hero with a light product studio mock — issue feed, properties, and a floating agent panel that fades into the page.',
  category: 'hero',
  image: {
    light: '/images/blocks/hero/hero-11.png',
    dark: '/images/blocks/hero/hero-11-dark.png',
  },
  meta: {
    iframeHeight: 1100,
    captureDelay: 3000,
  },
  component: Hero11,
  editorFields: Hero11EditorFields,
  example: Hero11Example,
  defaults: values,
}
