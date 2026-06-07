import type { IntentManifest } from '@/lib/intents/intent-manifest-types'

import { CommentThread3 } from './comment-thread-3'
import { CommentThreadConcept } from './concept'
import { CommentThread1 } from './comment-thread-1'
import { CommentThread2 } from './comment-thread-2'

export const manifest: IntentManifest = {
  slug: 'comment-thread',
  name: 'Comment Thread',
  problem:
    'Let collaborators discuss a piece of content and reach a conclusion without leaving it.',
  concept: CommentThreadConcept,
  grid: { columns: 2 },
  decisions: [
    {
      slug: '1',
      name: 'Inline Anchored',
      best: 'Feedback that points at a specific spot, like a sentence or a cell. The thread is pinned to the selection so the discussion keeps its context and resolving it clears the marker.',
      tags: ['Anchored', 'In context', 'Resolve'],
      caveat:
        'Comments tied to a position break or orphan when the underlying content is edited or deleted, so anchoring needs careful handling.',
      patterns: [],
      recommended: true,
      demo: CommentThread1,
    },
    {
      slug: '2',
      name: 'Side Panel',
      best: 'Documents with many parallel threads. A panel lists every conversation with its anchor and lets a reviewer filter open from resolved and work through them in order.',
      tags: ['Panel', 'Threaded', 'Triage'],
      caveat:
        'Pulling comments out of the content costs the at-a-glance context, so each thread must carry a reference back to what it is about.',
      patterns: [],
      demo: CommentThread2,
    },
    {
      slug: '3',
      name: 'Activity Feed',
      best: 'Shared spaces where comments and system events tell one story. A single chronological stream mixes human replies with edits and shares so everyone sees what happened and when.',
      tags: ['Timeline', 'Mixed events', 'Chronological'],
      caveat:
        'One flat stream cannot group a back-and-forth, so deep discussions get scattered between unrelated events and are hard to follow.',
      patterns: [],
      demo: CommentThread3,
    },
  ],
}
