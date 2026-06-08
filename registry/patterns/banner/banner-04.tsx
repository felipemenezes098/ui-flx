'use client'

import { useState } from 'react'
import { ArrowUpCircle, X } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Banner04() {
  const [open, setOpen] = useState(true)

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-muted-foreground hover:text-foreground text-sm underline-offset-4 hover:underline"
      >
        Show banner again
      </button>
    )
  }

  return (
    <div className="flex w-full flex-col gap-3 rounded-lg border bg-card px-4 py-3.5 shadow-sm sm:flex-row sm:items-center">
      <span className="bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-full">
        <ArrowUpCircle className="size-5" />
      </span>
      <div className="flex flex-1 flex-col gap-0.5">
        <p className="text-sm font-medium">Update available — v2.4.0</p>
        <p className="text-muted-foreground text-sm">
          Restart the app to install the latest improvements and fixes.
        </p>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setOpen(false)}
          className="text-muted-foreground"
        >
          Later
        </Button>
        <Button size="sm">Update now</Button>
      </div>
    </div>
  )
}
