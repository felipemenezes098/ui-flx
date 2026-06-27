import type { ConceptCategory } from '@/lib/concepts/concept-types'

export const chatCategory: ConceptCategory = {
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
