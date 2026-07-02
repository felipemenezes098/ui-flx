import type { CompositionCategory } from '@/lib/compositions/composition-types'

export const dashboardCategory: CompositionCategory = {
  slug: 'dashboard',
  name: 'Dashboard',
  description: 'Full analytics and admin dashboard layouts.',
  items: [
    {
      slug: 'dashboard-01',
      name: 'Analytics overview',
      description:
        'Sidebar, KPI cards, a bar chart, and a recent activity list.',
      meta: { iframeHeight: 800 },
    },
  ],
}
