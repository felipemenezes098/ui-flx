import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Hero12 } from './hero-12'
import { Hero12EditorFields } from './editor/fields'
import { Hero12Example, values } from './hero-12-example'

export const manifest: BlockManifest = {
  slug: 'hero-12',
  name: 'Hero 12',
  description:
    'A full-bleed image hero with an oversized name, an established label, and a floating pill CTA anchored to the corner.',
  category: 'hero',
  image: {
    light: '/images/blocks/hero/hero-12.png',
    dark: '/images/blocks/hero/hero-12-dark.png',
  },
  meta: {
    iframeHeight: 720,
    containerClassName: 'flex min-h-screen max-w-full overflow-hidden p-0',
  },
  hasNew: true,
  component: Hero12,
  editorFields: Hero12EditorFields,
  example: Hero12Example,
  defaults: values,
}
