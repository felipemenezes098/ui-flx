import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero04 } from './hero-04'
import { Hero04EditorFields } from './editor/fields'
import { Hero04Example, values } from './hero-04-example'

export const manifest: BlockManifest = {
  slug: 'hero-04',
  name: 'Hero 04',
  description:
    'Centered headline, one primary CTA, and full-width preview media with a soft bottom fade.',
  category: 'hero',
  image: {
    light: '/images/blocks/hero/hero-04.png',
    dark: '/images/blocks/hero/hero-04-dark.png',
  },
  meta: {
    iframeHeight: 860,
  },
  component: Hero04,
  editorFields: Hero04EditorFields,
  example: Hero04Example,
  defaults: values,
}
