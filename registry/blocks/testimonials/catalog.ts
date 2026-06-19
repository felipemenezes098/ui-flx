import { TestimonialsConcept } from '@/lib/blocks/block-concepts'
import type { BlockCategoryRow } from '@/lib/blocks/block-manifest-types'

import { manifest as testimonials01Manifest } from './testimonials-01/manifest'

export const testimonialsCategory: BlockCategoryRow = {
  slug: 'testimonials',
  category: 'Testimonials',
  description: 'Minimal testimonial blocks for concise social proof.',
  type: 'testimonials',
  image: testimonials01Manifest.image,
  concept: TestimonialsConcept,
  blocks: [testimonials01Manifest],
}
