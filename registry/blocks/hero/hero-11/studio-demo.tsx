import type * as React from 'react'
import {
  ArrowUp,
  Boxes,
  CircleDot,
  Component,
  FileText,
  Layers,
  LayoutTemplate,
  MoreHorizontal,
  Paperclip,
  Plus,
  Search,
  SignalHigh,
  Sparkles,
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const nav = [
  { icon: Boxes, label: 'Catalog', count: '128' },
  { icon: LayoutTemplate, label: 'Blocks', count: '48' },
  { icon: Layers, label: 'Patterns' },
  { icon: Component, label: 'Compositions' },
]

const collections = [
  { label: 'Heroes' },
  { label: 'Forms' },
  { label: 'Illustrations' },
]

const recent = [
  { label: 'Split-copy hero', active: true },
  { label: 'Agent studio' },
  { label: 'Empty states' },
  { label: 'Auth screens' },
]

const activity = [
  {
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&q=80',
    name: 'Flex',
    action: 'added to catalog',
    time: '2m',
    body: null as string | null,
  },
  {
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&q=80',
    name: 'Maya',
    action: 'tagged',
    time: '6m',
    body: null,
    badge: 'Hero',
  },
  {
    src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=64&q=80',
    name: 'Noah',
    action: 'commented',
    time: '4m',
    body: 'Keep the right edge soft — sidebar stays crisp against the page.',
  },
  {
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&q=80',
    name: 'Ava',
    action: 'commented',
    time: '3m',
    body: 'Light-first. Soft shadows, concentric radii, tabular counts.',
  },
]

const changedFiles = [
  { name: 'studio-demo.tsx', add: 48, del: 12 },
  { name: 'hero-11.tsx', add: 16, del: 4 },
]

export function StudioDemo() {
  return (
    <div className="relative w-full">
      <div
        className={cn(
          'bg-card w-full overflow-hidden rounded-xl border',
          'shadow-[10px_18px_40px_-18px_rgba(0,0,0,0.16)]',
          'dark:shadow-[10px_18px_40px_-18px_rgba(0,0,0,0.5)]',
        )}
      >
        <div className="flex min-h-[30rem]">
          {/* Sidebar */}
          <aside className="bg-muted/40 hidden w-52 shrink-0 flex-col border-r sm:flex">
            <div className="flex items-center gap-2 px-3 py-3">
              <div className="bg-foreground text-background flex size-5 items-center justify-center rounded-md text-[10px] font-semibold">
                F
              </div>
              <span className="truncate text-sm font-semibold tracking-tight">
                Flexnative
              </span>
              <div className="ml-auto flex items-center gap-0.5">
                <Button
                  size="icon-xs"
                  variant="ghost"
                  className="text-muted-foreground"
                  aria-label="Search"
                >
                  <Search className="size-3.5" />
                </Button>
                <Button
                  size="icon-xs"
                  variant="ghost"
                  className="text-muted-foreground"
                  aria-label="New block"
                >
                  <Plus className="size-3.5" />
                </Button>
              </div>
            </div>

            <nav className="flex flex-col gap-0.5 px-2">
              {nav.map(({ icon: Icon, label, count }) => (
                <div
                  key={label}
                  className="text-muted-foreground hover:bg-muted flex items-center gap-2 rounded-md px-2 py-1.5 text-xs"
                >
                  <Icon className="size-3.5 shrink-0" />
                  <span className="min-w-0 flex-1 truncate">{label}</span>
                  {count && (
                    <span className="text-muted-foreground/80 tabular-nums">
                      {count}
                    </span>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-4 px-2">
              <span className="text-muted-foreground px-2 text-[10px] font-medium tracking-wide uppercase">
                Collections
              </span>
              <div className="mt-1 flex flex-col gap-0.5">
                {collections.map(({ label }) => (
                  <div
                    key={label}
                    className="text-muted-foreground hover:bg-muted truncate rounded-md px-2 py-1.5 text-xs"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex-1 px-2 pb-3">
              <span className="text-muted-foreground px-2 text-[10px] font-medium tracking-wide uppercase">
                Recent
              </span>
              <div className="mt-1 flex flex-col gap-0.5">
                {recent.map(({ label, active }) => (
                  <div
                    key={label}
                    className={cn(
                      'truncate rounded-md px-2 py-1.5 text-xs',
                      active
                        ? 'bg-muted text-foreground font-medium'
                        : 'text-muted-foreground hover:bg-muted',
                    )}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Main */}
          <div className="flex min-w-0 flex-1 flex-col">
            <header className="flex items-center gap-2 border-b px-3 py-2.5 sm:px-4">
              <span className="truncate text-sm font-medium tracking-tight">
                Split-copy hero
              </span>
              <div className="text-muted-foreground ml-auto flex items-center gap-1.5 text-[10px] tabular-nums">
                <span>02</span>
                <span className="text-muted-foreground/50">/</span>
                <span>128</span>
              </div>
            </header>

            <div className="flex min-h-0 flex-1">
              <div className="flex min-w-0 flex-1 flex-col gap-4 p-4 sm:p-5">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                    Split-copy hero
                  </h2>
                  <p className="text-muted-foreground max-w-xl text-xs leading-relaxed text-pretty sm:text-[13px]">
                    A product studio mock with split copy, concentric radii, and
                    a soft{' '}
                    <code className="bg-muted rounded px-1 py-0.5 font-mono text-[11px]">
                      mask-*
                    </code>{' '}
                    fade so the interface dissolves into the page.
                  </p>
                </div>

                <Separator />

                <div className="flex flex-col gap-3">
                  {activity.map((item, i) => (
                    <div key={`${item.name}-${i}`} className="flex gap-2.5">
                      <Avatar className="mt-0.5 size-6 shrink-0">
                        <AvatarImage src={item.src} alt="" />
                        <AvatarFallback className="text-[9px]">
                          {item.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="min-w-0 flex-1 space-y-1.5">
                        <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5 text-xs">
                          <span className="font-medium">{item.name}</span>
                          <span className="text-muted-foreground">
                            {item.action}
                          </span>
                          {'badge' in item && item.badge && (
                            <Badge
                              variant="secondary"
                              className="h-4 px-1.5 text-[9px]"
                            >
                              {item.badge}
                            </Badge>
                          )}
                          <span className="text-muted-foreground ml-auto text-[10px] tabular-nums">
                            {item.time}
                          </span>
                        </div>
                        {item.body && (
                          <div className="bg-muted/50 rounded-lg px-3 py-2 text-xs leading-relaxed text-pretty">
                            {item.body}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  <div className="flex items-center gap-2.5 text-xs">
                    <div className="flex size-6 shrink-0 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10">
                      <CircleDot className="size-3 text-amber-500" />
                    </div>
                    <span className="text-muted-foreground">
                      Moved from{' '}
                      <span className="text-foreground font-medium">Draft</span>{' '}
                      to{' '}
                      <span className="text-foreground font-medium">
                        In review
                      </span>
                    </span>
                    <span className="text-muted-foreground ml-auto text-[10px] tabular-nums">
                      1m
                    </span>
                  </div>
                </div>
              </div>

              {/* Properties */}
              <aside className="hidden w-40 shrink-0 flex-col gap-3 border-l p-3 md:flex lg:w-44">
                <Property
                  label="Status"
                  value={
                    <span className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-amber-400" />
                      In review
                    </span>
                  }
                />
                <Property
                  label="Priority"
                  value={
                    <span className="flex items-center gap-1.5">
                      <SignalHigh className="size-3.5 text-orange-500" />
                      High
                    </span>
                  }
                />
                <Property
                  label="Owner"
                  value={
                    <span className="flex items-center gap-1.5">
                      <Avatar className="size-4">
                        <AvatarImage
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=64&q=80"
                          alt=""
                        />
                        <AvatarFallback className="text-[8px]">
                          N
                        </AvatarFallback>
                      </Avatar>
                      Noah
                    </span>
                  }
                />
                <Property
                  label="Category"
                  value={
                    <span className="flex items-center gap-1.5">
                      <span className="bg-foreground/90 size-3.5 rounded-[4px]" />
                      Hero
                    </span>
                  }
                />
                <Property
                  label="Slug"
                  value={<span className="font-mono text-[11px]">hero-11</span>}
                />
              </aside>
            </div>
          </div>
        </div>
      </div>

      {/* Floating agent panel */}
      <div
        className={cn(
          'bg-card absolute right-2 bottom-3 z-10 w-[min(100%-1rem,17.5rem)] overflow-hidden rounded-xl sm:right-4 sm:w-72',
          'shadow-[0_10px_32px_-8px_rgba(0,0,0,0.2)]',
          'dark:shadow-[0_10px_32px_-8px_rgba(0,0,0,0.55)]',
        )}
      >
        <div className="flex items-center gap-2 border-b px-3 py-2">
          <Sparkles className="text-foreground size-3.5 shrink-0" />
          <span className="truncate text-xs font-medium tracking-tight">
            Flex Agent
          </span>
          <Badge
            variant="secondary"
            className="h-4 border-emerald-500/20 bg-emerald-500/10 px-1.5 text-[9px] text-emerald-700 dark:text-emerald-400"
          >
            Live
          </Badge>
          <Button
            size="icon-xs"
            variant="ghost"
            className="text-muted-foreground ml-auto"
            aria-label="More"
          >
            <MoreHorizontal className="size-3.5" />
          </Button>
        </div>

        <div className="space-y-2.5 px-3 py-2.5">
          <p className="text-muted-foreground text-[11px] leading-relaxed">
            Examining the hero mask path…
          </p>
          <p className="text-muted-foreground text-[10px] tabular-nums">
            Worked for 7s
          </p>
          <p className="text-[11px] leading-relaxed">
            Pushed and opened a draft PR.
          </p>

          <div className="bg-muted/60 space-y-1.5 rounded-lg p-2">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-medium">
                Changed 2 files{' '}
                <span className="text-emerald-600 tabular-nums dark:text-emerald-400">
                  +64
                </span>{' '}
                <span className="text-red-500 tabular-nums dark:text-red-400">
                  -16
                </span>
              </span>
              <Button
                size="xs"
                variant="outline"
                className="h-5 px-1.5 text-[9px]"
              >
                Preview
              </Button>
            </div>
            {changedFiles.map((f) => (
              <div
                key={f.name}
                className="text-muted-foreground flex items-center gap-1.5 text-[10px]"
              >
                <FileText className="size-3 shrink-0" />
                <span className="min-w-0 flex-1 truncate font-mono">
                  {f.name}
                </span>
                <span className="text-emerald-600 tabular-nums dark:text-emerald-400">
                  +{f.add}
                </span>
                <span className="text-red-500 tabular-nums dark:text-red-400">
                  -{f.del}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t p-2">
          <div className="bg-muted/50 flex items-center gap-1.5 rounded-lg px-2 py-1.5">
            <span className="text-muted-foreground min-w-0 flex-1 truncate text-[11px]">
              Tell Flex what to do next…
            </span>
            <Button
              size="icon-xs"
              variant="ghost"
              className="text-muted-foreground"
              aria-label="Attach"
            >
              <Paperclip className="size-3.5" />
            </Button>
            <Button
              size="icon-xs"
              variant="default"
              className="size-6 rounded-md active:scale-[0.96]"
              aria-label="Send"
            >
              <ArrowUp className="size-3.5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Property({
  label,
  value,
}: Readonly<{ label: string; value: React.ReactNode }>) {
  return (
    <div className="space-y-1">
      <span className="text-muted-foreground text-[10px]">{label}</span>
      <div className="text-foreground text-xs font-medium">{value}</div>
    </div>
  )
}
