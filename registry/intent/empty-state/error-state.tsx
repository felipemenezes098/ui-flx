import { RefreshCwIcon, TriangleAlertIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'

export function ErrorStateDecision() {
  return (
    <div className="bg-card w-full max-w-sm rounded-xl border p-2 shadow-sm">
      <Empty>
        <EmptyHeader>
          <EmptyMedia
            variant="icon"
            className="bg-destructive/10 text-destructive"
          >
            <TriangleAlertIcon />
          </EmptyMedia>
          <EmptyTitle>Couldn&apos;t load your data</EmptyTitle>
          <EmptyDescription>
            Something went wrong on our end. Your data is safe — try again in a
            moment, or contact support if it keeps happening.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2">
            <Button>
              <RefreshCwIcon />
              Try again
            </Button>
            <Button variant="ghost">Contact support</Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  )
}
