import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Testimonials01 } from './testimonials-01'
import { Testimonials01EditorFields } from './editor/fields'
import { Testimonials01Example, values } from './testimonials-01-example'

export const manifest: BlockManifest = {
  slug: 'testimonials-01',
  name: 'Testimonials 01',
  description: 'A single testimonial with quote, avatar, author name and role.',
  category: 'testimonials',
  image: {
    light: '/images/blocks/testimonials/testimonials-01.png',
    dark: '/images/blocks/testimonials/testimonials-01-dark.png',
  },
  component: Testimonials01,
  editorFields: Testimonials01EditorFields,
  example: Testimonials01Example,
  defaults: values,
}
