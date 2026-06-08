'use client'

import { useState } from 'react'
import { Sparkles, X } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Banner03() {
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
    <div className="relative flex w-full items-center gap-3 rounded-lg border bg-card px-4 py-3 pr-12 text-sm shadow-sm">
      <span className="bg-primary/10 text-primary flex size-8 shrink-0 items-center justify-center rounded-full">
        <Sparkles className="size-4" />
      </span>
      <p className="text-muted-foreground">
        <span className="text-foreground font-medium">What&apos;s new.</span>{' '}
        We&apos;ve refreshed the editor with faster autosave.
      </p>
      <Button
        variant="ghost"
        size="icon-sm"
        onClick={() => setOpen(false)}
        aria-label="Dismiss banner"
        className="text-muted-foreground absolute top-1/2 right-2 -translate-y-1/2"
      >
        <X />
      </Button>
    </div>
  )
}
