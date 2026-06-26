import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero03 } from './hero-03'
import { Hero03EditorFields } from './editor/fields'
import { Hero03Example, values } from './hero-03-example'

export const manifest: BlockManifest = {
  slug: 'hero-03',
  name: 'Hero 03',
  description:
    'Hero with content on the left (title, description, two CTAs) and media on the right, bottom-aligned.',
  category: 'hero',
  image: {
    light: '/images/blocks/hero/hero-03.png',
    dark: '/images/blocks/hero/hero-03-dark.png',
  },
  meta: {
    iframeHeight: 600,
  },
  component: Hero03,
  editorFields: Hero03EditorFields,
  example: Hero03Example,
  defaults: values,
}
