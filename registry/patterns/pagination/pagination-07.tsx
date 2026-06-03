'use client'

import { useState } from 'react'

import { cn } from '@/lib/utils'

const TOTAL = 6

export function Pagination07() {
  const [page, setPage] = useState(0)

  return (
    <nav
      aria-label="pagination"
      className="bg-muted/60 flex items-center gap-2 rounded-full p-2"
    >
      {Array.from({ length: TOTAL }).map((_, i) => {
        const isActive = i === page
        return (
          <button
            key={i}
            type="button"
            aria-label={`Go to page ${i + 1}`}
            aria-current={isActive ? 'page' : undefined}
            onClick={() => setPage(i)}
            className={cn(
              'h-2 rounded-full transition-all duration-300 ease-out',
              isActive
                ? 'bg-foreground w-6'
                : 'bg-foreground/25 hover:bg-foreground/40 w-2',
            )}
          />
        )
      })}
    </nav>
  )
}
