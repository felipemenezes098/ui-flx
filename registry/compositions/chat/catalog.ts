import type { CompositionCategory } from '@/lib/compositions/composition-types'

export const chatCategory: CompositionCategory = {
  slug: 'chat',
  name: 'Chat',
  description: 'Messaging and conversation interfaces.',
  grid: { columns: 1 },
  items: [
    {
      slug: 'chat-01',
      name: 'Conversation',
      description: 'Conversation list, message thread, and a message composer.',
      span: 'full',
    },
  ],
}
