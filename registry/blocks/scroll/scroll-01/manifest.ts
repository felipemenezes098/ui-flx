import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Scroll01 } from './scroll-01'
import { Scroll01EditorFields } from './editor/fields'
import { Scroll01Example, values } from './scroll-01-example'

export const manifest: BlockManifest = {
  slug: 'scroll-01',
  name: 'Scroll 01',
  description: 'Sticky media that changes as you scroll through text content.',
  category: 'scroll',
  image: {
    light: '/images/blocks/scroll/scroll-01.png',
    dark: '/images/blocks/scroll/scroll-01-dark.png',
  },
  meta: {
    iframeHeight: 600,
    captureViewportOnly: true,
  },
  hasNew: true,
  component: Scroll01,
  editorFields: Scroll01EditorFields,
  example: Scroll01Example,
  defaults: values,
}
