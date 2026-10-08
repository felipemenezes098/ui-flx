import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Testimonials01 } from './testimonials-01'

export const manifest: BlockManifest = {
  slug: 'testimonials-01',
  name: 'Testimonials 01',
  description: 'A single testimonial with quote, avatar, author name and role.',
  category: 'testimonials',
  preset: 'vellum',
  image: {
    light: '/images/blocks/testimonials/testimonials-01.webp',
    dark: '/images/blocks/testimonials/testimonials-01-dark.webp',
  },
  meta: {
    iframeHeight: 800,
  },
  component: Testimonials01,
}
