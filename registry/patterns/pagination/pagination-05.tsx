'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

export function Pagination05() {
  return (
    <div className="flex w-full max-w-2xl flex-col items-center justify-between gap-4 sm:flex-row">
      <p className="text-muted-foreground order-2 text-sm sm:order-1">
        Showing <span className="text-foreground font-medium">1–10</span> of{' '}
        <span className="text-foreground font-medium">97</span> results
      </p>

      <Pagination className="order-1 mx-0 w-auto sm:order-2">
        {/* Demo links — cancel navigation so the page does not jump */}
        <PaginationContent onClick={(e) => e.preventDefault()}>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem className="hidden sm:block">
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
