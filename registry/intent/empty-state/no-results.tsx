import { SearchXIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty'

export function NoResultsDecision() {
  return (
    <div className="bg-card w-full max-w-sm rounded-xl border p-2 shadow-sm">
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <SearchXIcon />
          </EmptyMedia>
          <EmptyTitle>No matches for “invoices”</EmptyTitle>
          <EmptyDescription>
            We couldn&apos;t find anything matching your search. Try a different
            term or clear your active filters.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <div className="flex gap-2">
            <Button variant="outline">Clear filters</Button>
            <Button variant="ghost">Reset search</Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  )
}
