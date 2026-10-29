import type { BlockCategory } from '@/lib/blocks/block-manifest-types'

const sectionNames: Record<string, string> = {
  hero: 'Hero Sections',
  content: 'Content Sections',
  feature: 'Feature Sections',
  cta: 'Call to Action Sections',
  'bento-grids': 'Bento Grids',
  lists: 'List Sections',
  testimonials: 'Testimonial Sections',
}

export function getBlockCategoryTitle(category: BlockCategory) {
  const name = sectionNames[category.slug] ?? category.category
  return `shadcn/ui ${name}`
}

export function getBlockCategoryDescription(category: BlockCategory) {
  const name = sectionNames[category.slug] ?? category.category
  const sentenceName = name.charAt(0) + name.slice(1).toLowerCase()
  return `${sentenceName} for landing pages, built with shadcn/ui and Tailwind CSS. Copy the prompt or add them with the shadcn CLI.`
}
