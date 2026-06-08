'use client'

import { useState } from 'react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const TOTAL = 87

export function Pagination04() {
  const [pageSize, setPageSize] = useState(10)
  const [page, setPage] = useState(1)
  const pageCount = Math.ceil(TOTAL / pageSize)

  return (
    <div className="flex w-full max-w-2xl flex-col items-center justify-between gap-4 sm:flex-row">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground text-sm font-medium whitespace-nowrap">
          Rows per page
        </span>
        <Select
          value={`${pageSize}`}
          onValueChange={(v) => {
            setPageSize(Number(v))
            setPage(1)
          }}
        >
          <SelectTrigger size="sm" className="w-[4.5rem]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {[10, 20, 30, 50].map((size) => (
              <SelectItem key={size} value={`${size}`}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm font-medium tabular-nums">
          Page {page} of {pageCount}
        </span>
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="icon-sm"
            disabled={page === 1}
            onClick={() => setPage(1)}
            aria-label="First page"
          >
            <ChevronsLeftIcon />
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            aria-label="Previous page"
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            disabled={page === pageCount}
            onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            aria-label="Next page"
          >
            <ChevronRightIcon />
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            disabled={page === pageCount}
            onClick={() => setPage(pageCount)}
            aria-label="Last page"
          >
            <ChevronsRightIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}
