import type { ConceptCategory } from '@/lib/concepts/concept-types'

export const dashboardCategory: ConceptCategory = {
  slug: 'dashboard',
  name: 'Dashboard',
  description: 'Full analytics and admin dashboard layouts.',
  grid: { columns: 1 },
  items: [
    {
      slug: 'dashboard-01',
      name: 'Analytics overview',
      description:
        'Sidebar, KPI cards, a bar chart, and a recent activity list.',
      span: 'full',
    },
    {
      slug: 'dashboard-02',
      name: 'Project workspace',
      description:
        'Sidebar, task stats, an active-tasks list with progress, and a team panel.',
      span: 'full',
    },
  ],
}
