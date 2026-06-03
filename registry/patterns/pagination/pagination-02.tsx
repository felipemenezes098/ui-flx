'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export function Pagination02() {
  return (
    <Pagination>
      {/* Demo links — cancel navigation so the page does not jump */}
      <PaginationContent
        onClick={(e) => e.preventDefault()}
        className="w-full justify-between sm:w-auto sm:justify-center"
      >
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>

        {/* Inline numbers from sm up */}
        <div className="hidden items-center gap-1 sm:flex">
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
        </div>

        {/* Text indicator on small screens */}
        <span className="text-muted-foreground text-sm font-medium tabular-nums sm:hidden">
          Page 2 of 3
        </span>

        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
