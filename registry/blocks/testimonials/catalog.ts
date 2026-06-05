import { TestimonialsConcept } from '@/lib/blocks/block-concepts'
import type { BlockCategoryRow } from '@/lib/blocks/block-manifest-types'

import { manifest as singleTestimonialManifest } from './single-testimonial/manifest'

export const testimonialsCategory: BlockCategoryRow = {
  slug: 'testimonials',
  category: 'Testimonials',
  description: 'Minimal testimonial blocks for concise social proof.',
  type: 'testimonials',
  image: singleTestimonialManifest.image,
  concept: TestimonialsConcept,
  blocks: [singleTestimonialManifest],
}
