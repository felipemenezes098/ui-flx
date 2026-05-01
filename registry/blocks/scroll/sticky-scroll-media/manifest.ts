import type { BlockManifest } from '@/lib/block-manifest-types'
import { StickyScrollMedia } from './sticky-scroll-media'
import { StickyScrollMediaEditorFields } from './editor/fields'
import { StickyScrollMediaExample, values } from './sticky-scroll-media-example'

export const manifest: BlockManifest = {
  slug: 'sticky-scroll-media',
  name: 'Sticky Scroll Media',
  description: 'Sticky media that changes as you scroll through text content.',
  category: 'scroll',
  image: {
    light: '/images/blocks/scroll/stickyScrollMedia.png',
    dark: '/images/blocks/scroll/stickyScrollMedia.png',
  },
  meta: {
    iframeHeight: 600,
  },
  hasNew: true,
  component: StickyScrollMedia,
  editorFields: StickyScrollMediaEditorFields,
  example: StickyScrollMediaExample,
  defaults: values,
}
