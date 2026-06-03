'use client'

import { useState } from 'react'
import {
  Bug,
  ChevronDown,
  Megaphone,
  Sparkles,
  Zap,
  type LucideIcon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const highlights: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Sparkles,
    title: 'Command palette',
    body: 'Jump to anything with ⌘K — pages, settings, and actions.',
  },
  {
    icon: Zap,
    title: '3× faster boards',
    body: 'Large workspaces now load in a fraction of the time.',
  },
  {
    icon: Bug,
    title: 'Filter fix',
    body: 'Filters no longer reset when navigating between views.',
  },
]

export function Banner07() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-card w-full overflow-hidden rounded-lg border shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm"
      >
        <span className="bg-primary/10 text-primary flex size-8 shrink-0 items-center justify-center rounded-full">
          <Megaphone className="size-4" />
        </span>
        <span className="flex-1">
          <span className="font-medium">Release 3.0 is here</span>
          <span className="text-muted-foreground"> — 3 highlights</span>
        </span>
        <ChevronDown
          className={cn(
            'text-muted-foreground size-4 shrink-0 transition-transform',
            open && 'rotate-180',
          )}
        />
      </button>
      <div
        className={cn(
          'grid transition-all duration-300',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-3 border-t px-4 py-4">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="bg-muted text-foreground flex size-7 shrink-0 items-center justify-center rounded-md">
                    <Icon className="size-3.5" />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-muted-foreground text-sm">{item.body}</p>
                  </div>
                </div>
              )
            })}
            <div className="flex items-center justify-between pt-1">
              <span className="text-muted-foreground text-xs">
                Shipped June 3, 2026
              </span>
              <Button variant="outline" size="sm">
                Full changelog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
