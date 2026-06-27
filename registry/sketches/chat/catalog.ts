import type { SketchCategory } from '@/lib/sketches/sketch-types'

export const chatCategory: SketchCategory = {
  slug: 'chat',
  name: 'Chat',
  description: 'Low-fidelity wireframes of messaging layouts.',
  grid: { columns: 1 },
  items: [
    {
      slug: 'sketch-chat-01',
      name: 'Conversation',
      description: 'Wireframe: conversation list, thread, and composer.',
      span: 'full',
    },
  ],
}
