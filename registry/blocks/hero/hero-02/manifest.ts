import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero02 } from './hero-02'
import { Hero02EditorFields } from './editor/fields'
import { Hero02Example, values } from './hero-02-example'

export const manifest: BlockManifest = {
  slug: 'hero-02',
  name: 'Hero 02',
  description:
    'Hero with title, description, two CTAs, logo marquee, and image carousel below.',
  category: 'hero',
  image: {
    light: '/images/blocks/hero/hero-02.png',
    dark: '/images/blocks/hero/hero-02.png',
  },
  meta: {
    iframeHeight: 800,
    containerClassName: 'max-w-full overflow-hidden px-0',
  },
  component: Hero02,
  editorFields: Hero02EditorFields,
  example: Hero02Example,
  defaults: values,
}
