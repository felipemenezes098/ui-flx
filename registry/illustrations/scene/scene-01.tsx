'use client'

import { Activity, Bell, LayoutGrid, Settings, Users } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const nav = [
  { icon: LayoutGrid, active: true },
  { icon: Activity, active: false },
  { icon: Users, active: false },
  { icon: Settings, active: false },
]

const stats = [
  { label: 'Revenue', value: '$48.2k', trend: '+12%' },
  { label: 'Users', value: '2,318', trend: '+4%' },
  { label: 'Churn', value: '1.4%', trend: '-2%' },
]

export function Scene01() {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className="relative w-full max-w-xl"
      initial={reduce ? false : { opacity: 0, filter: 'blur(6px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <Card className="bg-card w-full gap-0 overflow-hidden p-0 shadow-sm">
        <div className="flex items-center gap-2 border-b px-3 py-2">
          <div className="flex shrink-0 gap-1.5">
            <span className="size-2.5 rounded-full bg-red-400/70" />
            <span className="size-2.5 rounded-full bg-amber-400/70" />
            <span className="size-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="bg-muted mx-auto h-4 w-full max-w-36 min-w-0 rounded-md" />
          <Avatar className="size-5 shrink-0">
            <AvatarImage
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&q=80"
              alt=""
            />
            <AvatarFallback className="text-[9px]">JD</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex">
          <div className="flex w-11 shrink-0 flex-col items-center gap-2.5 border-r py-3 sm:w-12">
            <div className="bg-primary/80 size-5 rounded-lg" />
            {nav.map(({ icon: Icon, active }, i) => (
              <div
                key={i}
                className={`flex size-7 items-center justify-center rounded-lg ${
                  active ? 'bg-muted text-foreground' : 'text-muted-foreground'
                }`}
              >
                <Icon className="size-3.5" />
              </div>
            ))}
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-2.5 p-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex min-w-0 flex-col gap-0.5">
                <span className="truncate text-sm font-semibold tracking-tight">
                  Overview
                </span>
                <span className="text-muted-foreground truncate text-[10px]">
                  Last 30 days
                </span>
              </div>
              <Button size="xs" variant="outline" className="shrink-0">
                Export
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {stats.map((s) => (
                <div key={s.label} className="min-w-0 rounded-lg border p-2">
                  <span className="text-muted-foreground block truncate text-[9px]">
                    {s.label}
                  </span>
                  <div className="mt-0.5 flex flex-wrap items-baseline justify-between gap-x-1">
                    <span className="text-xs font-semibold tabular-nums sm:text-[13px]">
                      {s.value}
                    </span>
                    <span className="text-[9px] font-medium text-emerald-600 dark:text-emerald-400">
                      {s.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-lg border p-2.5">
              <div className="flex items-center justify-between gap-2">
                <div className="bg-foreground/10 h-1.5 w-14 max-w-full rounded-full" />
                <div className="flex shrink-0 gap-1">
                  <span className="bg-primary/70 size-1.5 rounded-full" />
                  <span className="bg-muted-foreground/30 size-1.5 rounded-full" />
                </div>
              </div>
              <svg
                viewBox="0 0 320 44"
                className="mt-1.5 h-10 w-full"
                preserveAspectRatio="none"
                aria-hidden
              >
                <defs>
                  <linearGradient id="scene-01-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      className="text-primary"
                      stopColor="currentColor"
                      stopOpacity="0.24"
                    />
                    <stop
                      offset="100%"
                      className="text-primary"
                      stopColor="currentColor"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
                <path
                  d="M0 33 C 34 30, 52 14, 84 18 S 150 7, 184 21 S 250 4, 288 12 S 312 10, 320 9 L 320 44 L 0 44 Z"
                  fill="url(#scene-01-fill)"
                />
                <path
                  d="M0 33 C 34 30, 52 14, 84 18 S 150 7, 184 21 S 250 4, 288 12 S 312 10, 320 9"
                  className="text-primary stroke-current"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </Card>

      <div className="absolute right-1 bottom-1 max-w-[calc(100%-0.5rem)] sm:-right-2 sm:-bottom-3">
        <Card className="flex-row items-center gap-2 p-2 shadow-md sm:gap-2.5 sm:p-2.5">
          <div className="bg-primary/15 text-primary relative flex size-8 shrink-0 items-center justify-center rounded-lg">
            <Bell className="size-4" />
            <span className="border-card absolute -top-0.5 -right-0.5 size-2 rounded-full border-2 bg-emerald-500" />
          </div>
          <div className="flex min-w-0 flex-col">
            <span className="truncate text-xs leading-tight font-medium">
              New signup
            </span>
            <span className="text-muted-foreground truncate text-[10px] leading-tight">
              Acme Inc. joined your plan
            </span>
          </div>
          <Badge variant="secondary" className="ml-1 shrink-0 text-[10px]">
            Live
          </Badge>
        </Card>
      </div>
    </motion.div>
  )
}
