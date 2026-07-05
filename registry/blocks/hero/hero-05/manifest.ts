import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero05 } from './hero-05'
import { Hero05EditorFields } from './editor/fields'
import { Hero05Example, values } from './hero-05-example'

export const manifest: BlockManifest = {
  slug: 'hero-05',
  name: 'Hero 05',
  description:
    'An editorial hero with a left tagline, right-aligned headline and copy, and a full-width image below.',
  category: 'hero',
  image: {
    light: '/images/blocks/hero/hero-05.png',
    dark: '/images/blocks/hero/hero-05-dark.png',
  },
  meta: {
    iframeHeight: 1100,
  },
  component: Hero05,
  editorFields: Hero05EditorFields,
  example: Hero05Example,
  defaults: values,
}
