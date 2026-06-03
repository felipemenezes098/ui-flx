'use client'

import { useState } from 'react'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

const TOTAL_PAGES = 12

// Build a windowed range with leading/trailing ellipsis (`'…'`).
function getPageRange(current: number, total: number, siblings = 1) {
  const range: (number | '…')[] = []
  const left = Math.max(2, current - siblings)
  const right = Math.min(total - 1, current + siblings)

  range.push(1)
  if (left > 2) range.push('…')
  for (let i = left; i <= right; i++) range.push(i)
  if (right < total - 1) range.push('…')
  if (total > 1) range.push(total)

  return range
}

export function Pagination03() {
  const [page, setPage] = useState(1)
  const pages = getPageRange(page, TOTAL_PAGES)

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            aria-disabled={page === 1}
            className={page === 1 ? 'pointer-events-none opacity-50' : ''}
            onClick={(e) => {
              e.preventDefault()
              setPage((p) => Math.max(1, p - 1))
            }}
          />
        </PaginationItem>

        {pages.map((p, i) =>
          p === '…' ? (
            <PaginationItem key={`ellipsis-${i}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={p}>
              <PaginationLink
                href="#"
                isActive={p === page}
                onClick={(e) => {
                  e.preventDefault()
                  setPage(p)
                }}
              >
                {p}
              </PaginationLink>
            </PaginationItem>
          ),
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            aria-disabled={page === TOTAL_PAGES}
            className={
              page === TOTAL_PAGES ? 'pointer-events-none opacity-50' : ''
            }
            onClick={(e) => {
              e.preventDefault()
              setPage((p) => Math.min(TOTAL_PAGES, p + 1))
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
