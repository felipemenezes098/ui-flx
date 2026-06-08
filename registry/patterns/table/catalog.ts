import { TableConcept } from '@/lib/patterns/pattern-concepts'
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const tableCategory: PatternCategory = {
  slug: 'table',
  name: 'Table',
  description: 'Display rows and columns of structured data.',
  preview: TableConcept,
  grid: { columns: 1 },
  items: [
    { slug: 'table-01', name: 'Basic', description: 'Caption, header, and a footer total row.' },
    { slug: 'table-02', name: 'With images', description: 'Avatar thumbnails beside name and email in each row.' },
    { slug: 'table-03', name: 'Without dividers', description: 'Borderless rows for a clean, list-like layout.' },
    { slug: 'table-04', name: 'Striped rows', description: 'Zebra striping tints every other row.' },
    { slug: 'table-05', name: 'With vertical lines', description: 'Column grid lines via per-cell right borders.' },
    { slug: 'table-06', name: 'Dense', description: 'Compact padding and type for high-density data.' },
    { slug: 'table-07', name: 'With checkbox', description: 'Select-all header, per-row checkboxes, and a selection count.' },
    { slug: 'table-08', name: 'Card table', description: 'Table inside a Card with title and status badges.' },
    { slug: 'table-09', name: 'Vertical', description: 'Key-value details with row headers down the left.' },
    { slug: 'table-10', name: 'Sticky header', description: 'Header pinned while the capped body scrolls.' },
    { slug: 'table-11', name: 'Sortable', description: 'TanStack Table, click a column header to sort ascending or descending.' },
    { slug: 'table-12', name: 'With filters', description: 'TanStack Table, global search input plus a status column filter dropdown.' },
    { slug: 'table-13', name: 'Pagination', description: 'TanStack Table, prev / next controls with a rows-per-page select.' },
    { slug: 'table-14', name: 'Numeric pagination', description: 'TanStack Table, numbered page buttons with prev / next arrows.' },
    { slug: 'table-15', name: 'Column visibility', description: 'TanStack Table, toggle individual columns on or off from a dropdown menu.' },
    { slug: 'table-16', name: 'Resizable columns', description: 'TanStack Table, drag the header edge to resize column widths.' },
    { slug: 'table-17', name: 'Pinnable columns', description: 'TanStack Table, a column pinned to the right stays visible while scrolling horizontally.' },
    { slug: 'table-18', name: 'Row selection', description: 'TanStack Table, row checkboxes with a bulk actions toolbar showing count, clear, and delete.' },
    { slug: 'table-19', name: 'Expanding sub-rows', description: 'TanStack Table, expandable parent rows reveal nested child rows for tree-shaped data.' },
    { slug: 'table-20', name: 'Complex data table', description: 'TanStack Table, combines sorting, column filter, pagination, row selection, column visibility toggle, and per-row action menus.' },
  ],
}
