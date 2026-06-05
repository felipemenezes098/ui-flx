import { SkeletonConcept } from '@/lib/patterns/pattern-concepts'
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const skeletonCategory: PatternCategory = {
  slug: 'skeleton',
  name: 'Skeleton',
  description: 'Placeholder shapes that mimic content while it loads.',
  preview: SkeletonConcept,
  items: [
    { slug: 'skeleton-01', name: 'Basic', description: 'A stack of placeholder lines for a text block.' },
    { slug: 'skeleton-02', name: 'Avatar with text', description: 'A circle beside two lines, mimicking a loading user row.' },
    { slug: 'skeleton-03', name: 'Card', description: 'Media banner above a title, body lines, and a footer.' },
    { slug: 'skeleton-04', name: 'Paragraph', description: 'A heading followed by full-width body lines.' },
    { slug: 'skeleton-05', name: 'List', description: 'Repeated rows, each with a circular avatar and two text lines.' },
    { slug: 'skeleton-06', name: 'Table', description: 'A header row above several placeholder data rows.' },
    { slug: 'skeleton-07', name: 'Form', description: 'Labelled fields above a submit button placeholder.' },
    { slug: 'skeleton-08', name: 'Select', description: 'A field label above a trigger with a chevron block.' },
    { slug: 'skeleton-10', name: 'Stat cards', description: 'A grid of KPI cards with label, value, and trend lines.' },
    { slug: 'skeleton-12', name: 'Chat thread', description: 'Alternating inbound and outbound message bubbles.' },
    { slug: 'skeleton-13', name: 'Gallery grid', description: 'A grid of square image tiles for a loading gallery.' },
    { slug: 'skeleton-14', name: 'Article', description: 'A hero image, title, byline, and stacked body lines.' },
    { slug: 'skeleton-15', name: 'Pricing card', description: 'A plan name, price, feature rows, and a CTA button.' },
    { slug: 'skeleton-16', name: 'Sidebar nav', description: 'A logo header above a list of icon-and-label nav rows, with a user profile row at the bottom.' },
  ],
}
