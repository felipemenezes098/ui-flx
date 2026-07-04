import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero02 } from './hero-02'
import { Hero02EditorFields } from './editor/fields'
import { Hero02Example, values } from './hero-02-example'

export const manifest: BlockManifest = {
  slug: 'hero-02',
  name: 'Hero 02',
  description:
    'A left-aligned serif hero with a media panel: a photo backdrop with an elaborate dashboard mockup floating on top.',
  category: 'hero',
  image: {
    light: '/images/blocks/hero/hero-02.png',
    dark: '/images/blocks/hero/hero-02-dark.png',
  },
  meta: {
    iframeHeight: 1300,
  },
  component: Hero02,
  editorFields: Hero02EditorFields,
  example: Hero02Example,
  defaults: values,
}
