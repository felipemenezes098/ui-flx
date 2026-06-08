'use client'

import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'

export function Pagination06() {
  return (
    <nav
      aria-label="Article pagination"
      onClick={(e) => e.preventDefault()}
      className="grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2"
    >
      <a
        href="#"
        className="group hover:border-foreground/20 hover:bg-accent/50 flex flex-col gap-1 rounded-lg border p-4 transition-colors"
      >
        <span className="text-muted-foreground flex items-center gap-1.5 text-xs font-medium">
          <ArrowLeftIcon className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
          Previous
        </span>
        <span className="line-clamp-1 text-sm font-semibold">
          Installing the component registry
        </span>
      </a>

      <a
        href="#"
        className="group hover:border-foreground/20 hover:bg-accent/50 flex flex-col items-end gap-1 rounded-lg border p-4 text-right transition-colors"
      >
        <span className="text-muted-foreground flex items-center gap-1.5 text-xs font-medium">
          Next
          <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
        <span className="line-clamp-1 text-sm font-semibold">
          Theming with CSS variables
        </span>
      </a>
    </nav>
  )
}
