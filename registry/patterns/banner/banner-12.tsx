'use client'

import { useState } from 'react'
import {
  AlertTriangle,
  CheckCircle2,
  Info,
  X,
  type LucideIcon,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type Notice = {
  id: number
  icon: LucideIcon
  title: string
  body: string
  accent: string
}

const initial: Notice[] = [
  {
    id: 1,
    icon: CheckCircle2,
    title: 'Backup complete',
    body: 'Your workspace was backed up 5 minutes ago.',
    accent: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    id: 2,
    icon: AlertTriangle,
    title: 'Seat limit reached',
    body: 'Invite more members by upgrading your plan.',
    accent: 'text-amber-600 dark:text-amber-400',
  },
  {
    id: 3,
    icon: Info,
    title: 'API keys rotated',
    body: 'Two keys were rotated automatically for security.',
    accent: 'text-blue-600 dark:text-blue-400',
  },
]

export function Banner12() {
  const [notices, setNotices] = useState(initial)

  if (notices.length === 0) {
    return (
      <button
        type="button"
        onClick={() => setNotices(initial)}
        className="text-muted-foreground hover:text-foreground text-sm underline-offset-4 hover:underline"
      >
        Restore notifications
      </button>
    )
  }

  return (
    <div className="flex w-full flex-col gap-2">
      {notices.map((notice) => {
        const Icon = notice.icon
        return (
          <div
            key={notice.id}
            className="bg-card relative flex items-start gap-3 rounded-lg border px-4 py-3 pr-11 text-sm shadow-sm"
          >
            <Icon className={cn('mt-0.5 size-5 shrink-0', notice.accent)} />
            <div className="flex flex-col gap-0.5">
              <p className="font-medium">{notice.title}</p>
              <p className="text-muted-foreground">{notice.body}</p>
            </div>
            <Button
              variant="ghost"
              size="icon-sm"
              aria-label={`Dismiss ${notice.title}`}
              onClick={() =>
                setNotices((prev) => prev.filter((n) => n.id !== notice.id))
              }
              className="text-muted-foreground absolute top-2 right-2"
            >
              <X />
            </Button>
          </div>
        )
      })}
    </div>
  )
}
