import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Scroll01 } from './scroll-01'

export const manifest: BlockManifest = {
  slug: 'scroll-01',
  name: 'Scroll 01',
  description: 'Sticky media that changes as you scroll through text content.',
  category: 'scroll',
  preset: 'vellum',
  image: {
    light: '/images/blocks/scroll/scroll-01.webp',
    dark: '/images/blocks/scroll/scroll-01-dark.webp',
  },
  meta: {
    iframeHeight: 600,
    captureViewportOnly: true,
  },
  component: Scroll01,
}
