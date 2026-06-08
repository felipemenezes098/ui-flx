import { BreadcrumbConcept } from '@/lib/patterns/pattern-concepts'
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const breadcrumbCategory: PatternCategory = {
  slug: 'breadcrumb',
  name: 'Breadcrumb',
  description: 'Show the path to the current page.',
  preview: BreadcrumbConcept,
  grid: { columns: 2 },
  items: [
    { slug: 'breadcrumb-01', name: 'Basic', description: 'Links with a current page and chevron separators.' },
    { slug: 'breadcrumb-02', name: 'With icons', description: 'Each crumb prefixed with a small icon, such as a house, folder, or file.' },
    { slug: 'breadcrumb-03', name: 'Custom separator', description: 'Swap the chevron for a slash via separator children.' },
    { slug: 'breadcrumb-04', name: 'Dot separator', description: 'Lighter middle dot divider between crumbs.' },
    { slug: 'breadcrumb-05', name: 'With ellipsis', description: 'Middle levels replaced by a static ellipsis icon, showing only the first and last crumbs.' },
    { slug: 'breadcrumb-06', name: 'With dropdown', description: 'Ghost icon Button opens a menu of the hidden levels.' },
    { slug: 'breadcrumb-07', name: 'Responsive collapse', description: 'Dropdown on small screens, full inline path from sm up.' },
    { slug: 'breadcrumb-08', name: 'As link', description: 'Breadcrumb links that open in a new tab, with an external-link icon on the outbound crumb.' },
    { slug: 'breadcrumb-09', name: 'Dropdown at end', description: 'Last crumb is a Button switcher for sibling pages.' },
  ],
}
