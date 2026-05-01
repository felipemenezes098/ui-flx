import type { BlockManifest } from '@/lib/block-manifest-types'
import { HeroContentMedia } from './hero-content-media'
import { HeroContentMediaEditorFields } from './editor/fields'
import { HeroContentMediaExample, values } from './hero-content-media-example'

export const manifest: BlockManifest = {
  slug: 'hero-content-media',
  name: 'Hero Content Media',
  description:
    'Hero with content on the left (title, description, two CTAs) and media on the right, bottom-aligned.',
  category: 'hero',
  image: {
    light: '/images/blocks/hero/heroContentMedia.png',
    dark: '/images/blocks/hero/heroContentMedia.png',
  },
  meta: {
    iframeHeight: 600,
  },
  component: HeroContentMedia,
  editorFields: HeroContentMediaEditorFields,
  example: HeroContentMediaExample,
  defaults: values,
}
