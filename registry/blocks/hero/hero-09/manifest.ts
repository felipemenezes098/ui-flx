import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero09 } from './hero-09'
import { Hero09EditorFields } from './editor/fields'
import { Hero09Example, values } from './hero-09-example'

export const manifest: BlockManifest = {
  slug: 'hero-09',
  name: 'Hero 09',
  description:
    'A centered real-estate hero with a search bar, a masked architecture image that fades into the page, and a split closing statement.',
  category: 'hero',
  image: {
    light: '/images/blocks/hero/hero-09.png',
    dark: '/images/blocks/hero/hero-09-dark.png',
  },
  meta: {
    iframeHeight: 1300,
  },
  component: Hero09,
  editorFields: Hero09EditorFields,
  example: Hero09Example,
  defaults: values,
}
