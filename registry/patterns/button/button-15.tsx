'use client'

import { useState } from 'react'

import { Button } from '@/components/ui/button'

export function Button15() {
  const [open, setOpen] = useState(false)

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-pressed={open}
      onClick={() => setOpen((v) => !v)}
      className="group/hamburger"
      data-state={open ? 'open' : 'closed'}
    >
      <span className="relative flex size-4 flex-col items-center justify-center">
        <span className="absolute h-0.5 w-4 -translate-y-1.5 rounded-full bg-current transition-transform duration-200 group-data-[state=open]/hamburger:translate-y-0 group-data-[state=open]/hamburger:rotate-45" />
        <span className="absolute h-0.5 w-4 rounded-full bg-current transition-opacity duration-200 group-data-[state=open]/hamburger:opacity-0" />
        <span className="absolute h-0.5 w-4 translate-y-1.5 rounded-full bg-current transition-transform duration-200 group-data-[state=open]/hamburger:translate-y-0 group-data-[state=open]/hamburger:-rotate-45" />
      </span>
    </Button>
  )
}
