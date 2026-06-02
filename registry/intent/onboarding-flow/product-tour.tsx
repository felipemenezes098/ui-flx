'use client'

import { type ReactNode, useState } from 'react'
import {
  BellIcon,
  LayoutDashboardIcon,
  PlusIcon,
  SearchIcon,
  XIcon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Stop = {
  target: 'new' | 'search' | 'bell'
  title: string
  body: string
}

const STOPS: Stop[] = [
  {
    target: 'new',
    title: 'Create anything',
    body: 'Start a project, doc, or task from this button — it is always here.',
  },
  {
    target: 'search',
    title: 'Jump anywhere',
    body: 'Search across everything in your workspace, fast.',
  },
  {
    target: 'bell',
    title: 'Stay in the loop',
    body: 'Mentions and updates land here so nothing slips by.',
  },
]

export function ProductTourDecision() {
  const [stop, setStop] = useState(0)
  const last = STOPS.length - 1
  const active = STOPS[stop]

  return (
    <div className="bg-card w-80 overflow-hidden rounded-xl border shadow-sm">
      {/* Mock app chrome */}
      <div className="flex items-center gap-2 border-b px-3 py-2.5">
        <Highlight on={active.target === 'new'}>
          <Button size="sm" className="h-7 gap-1 px-2 text-xs">
            <PlusIcon className="size-3.5" />
            New
          </Button>
        </Highlight>
        <Highlight on={active.target === 'search'} className="flex-1">
          <div className="bg-muted/60 text-muted-foreground flex h-7 items-center gap-2 rounded-md px-2 text-xs">
            <SearchIcon className="size-3.5" />
            Search…
          </div>
        </Highlight>
        <Highlight on={active.target === 'bell'}>
          <div className="bg-muted/60 flex size-7 items-center justify-center rounded-md">
            <BellIcon className="size-3.5" />
          </div>
        </Highlight>
      </div>

      <div className="flex items-center gap-2 px-3 py-6">
        <LayoutDashboardIcon className="text-muted-foreground/40 size-4" />
        <div className="bg-foreground/10 h-2 w-24 rounded-full" />
      </div>

      {/* Coachmark */}
      <div className="bg-popover border-t p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xs font-semibold">{active.title}</h3>
          <button
            type="button"
            className="text-muted-foreground hover:text-foreground -mt-0.5"
            aria-label="Skip tour"
          >
            <XIcon className="size-3.5" />
          </button>
        </div>
        <p className="text-muted-foreground mt-1 text-[11px]">{active.body}</p>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex gap-1">
            {STOPS.map((s, i) => (
              <span
                key={s.target}
                className={cn(
                  'size-1.5 rounded-full',
                  i === stop ? 'bg-primary' : 'bg-muted-foreground/30',
                )}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="ghost"
              className={cn('h-7 px-2 text-xs', stop === 0 && 'invisible')}
              disabled={stop === 0}
              onClick={() => setStop((s) => Math.max(0, s - 1))}
            >
              Back
            </Button>
            <Button
              size="sm"
              className="h-7 w-16 px-3 text-xs"
              onClick={() => setStop((s) => (s === last ? 0 : s + 1))}
            >
              {stop === last ? 'Done' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Highlight({
  on,
  className,
  children,
}: Readonly<{ on: boolean; className?: string; children: ReactNode }>) {
  return (
    <div
      className={cn(
        'rounded-md transition-all',
        on && 'ring-primary ring-offset-background ring-2 ring-offset-2',
        className,
      )}
    >
      {children}
    </div>
  )
}
