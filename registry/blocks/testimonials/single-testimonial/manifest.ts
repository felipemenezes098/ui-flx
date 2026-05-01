import type { BlockManifest } from '@/lib/block-manifest-types'
import { SingleTestimonial } from './single-testimonial'
import { SingleTestimonialEditorFields } from './editor/fields'
import { SingleTestimonialExample, values } from './single-testimonial-example'

export const manifest: BlockManifest = {
  slug: 'single-testimonial',
  name: 'Single Testimonial',
  description: 'A single testimonial with quote, avatar, author name and role.',
  category: 'testimonials',
  image: {
    light: '/images/blocks/testimonials/singleTestimonial.png',
    dark: '/images/blocks/testimonials/singleTestimonial.png',
  },
  component: SingleTestimonial,
  editorFields: SingleTestimonialEditorFields,
  example: SingleTestimonialExample,
  defaults: values,
}
