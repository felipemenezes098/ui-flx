import type { SketchCategory } from '@/lib/sketches/sketch-types'

export const dashboardCategory: SketchCategory = {
  slug: 'dashboard',
  name: 'Dashboard',
  description: 'Low-fidelity wireframes of dashboard layouts.',
  grid: { columns: 1 },
  items: [
    {
      slug: 'sketch-dashboard-01',
      name: 'Analytics overview',
      description: 'Wireframe: sidebar, stat cards, chart, and a list.',
      span: 'full',
    },
    {
      slug: 'sketch-dashboard-02',
      name: 'Project workspace',
      description:
        'Wireframe: sidebar, stat cards, task list with progress, and a team panel.',
      span: 'full',
    },
  ],
}
