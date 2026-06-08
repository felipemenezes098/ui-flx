'use client'

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const TOTAL_PAGES = 24

export function Pagination08() {
  const [page, setPage] = useState(1)
  const [draft, setDraft] = useState('1')

  const commit = (value: string) => {
    const next = Math.min(TOTAL_PAGES, Math.max(1, Number(value) || 1))
    setPage(next)
    setDraft(`${next}`)
  }

  const go = (next: number) => {
    setPage(next)
    setDraft(`${next}`)
  }

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        disabled={page === 1}
        onClick={() => go(Math.max(1, page - 1))}
        aria-label="Previous page"
      >
        <ChevronLeftIcon />
      </Button>

      <div className="flex items-center gap-2 text-sm font-medium">
        <Input
          value={draft}
          inputMode="numeric"
          aria-label="Page number"
          onChange={(e) => setDraft(e.target.value.replace(/\D/g, ''))}
          onBlur={(e) => commit(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') commit((e.target as HTMLInputElement).value)
          }}
          className="h-9 w-14 text-center tabular-nums"
        />
        <span className="text-muted-foreground whitespace-nowrap">
          of {TOTAL_PAGES}
        </span>
      </div>

      <Button
        variant="outline"
        size="icon"
        disabled={page === TOTAL_PAGES}
        onClick={() => go(Math.min(TOTAL_PAGES, page + 1))}
        aria-label="Next page"
      >
        <ChevronRightIcon />
      </Button>
    </div>
  )
}
