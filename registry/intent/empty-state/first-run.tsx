import { PlusIcon, SparklesIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'

export function FirstRunDecision() {
  return (
    <div className="bg-card w-full max-w-sm rounded-xl border p-2 shadow-sm">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <SparklesIcon />
          </EmptyMedia>
          <EmptyTitle>No projects yet</EmptyTitle>
          <EmptyDescription>
            Projects keep your work organized. Create your first one to get
            started — it only takes a few seconds.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Button>
            <PlusIcon />
            New project
          </Button>
        </EmptyContent>
      </Empty>
    </div>
  )
}
