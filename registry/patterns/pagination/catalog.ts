import { PaginationConcept } from '@/lib/patterns/pattern-concepts'
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const paginationCategory: PatternCategory = {
  slug: 'pagination',
  name: 'Pagination',
  description: 'Split content across pages and navigate between them.',
  preview: PaginationConcept,
  grid: { columns: 2 },
  items: [
    { slug: 'pagination-01', name: 'Basic', description: 'Numbers with ellipsis, previous, and next links.' },
    { slug: 'pagination-02', name: 'Compact', description: 'Inline numbers from sm up, "Page X of Y" on mobile.' },
    { slug: 'pagination-03', name: 'Interactive window', description: 'Stateful current page with a sliding ellipsis range.' },
    { slug: 'pagination-04', name: 'Rows per page', description: 'Page-size select with first, prev, next, and last.' },
    { slug: 'pagination-05', name: 'Results summary', description: 'Showing 1–10 of 97 alongside the page controls.' },
    { slug: 'pagination-06', name: 'Article prev / next', description: 'Two linked cards with titles for adjacent articles.' },
    { slug: 'pagination-07', name: 'Dots', description: 'Carousel-style dots; the active page expands to a pill.' },
    { slug: 'pagination-08', name: 'Jump to page', description: 'Numeric input to jump directly to any page.' },
  ],
}
