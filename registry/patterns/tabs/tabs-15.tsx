'use client'

import { useState } from 'react'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

const moods = [
  {
    value: 'neon',
    label: 'Neon',
    caption: 'Electric gradients and late-night glow.',
    src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1287&auto=format&fit=crop',
  },
  {
    value: 'film',
    label: 'Film',
    caption: 'Grain, warmth, and frames that breathe.',
    src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1287&auto=format&fit=crop',
  },
  {
    value: 'ink',
    label: 'Ink',
    caption: 'Brush strokes on paper, slow and deliberate.',
    src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1171&auto=format&fit=crop',
  },
  {
    value: 'clay',
    label: 'Clay',
    caption: 'Tactile forms shaped by hand and time.',
    src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1170&auto=format&fit=crop',
  },
] as const

export function Tabs15() {
  const [activeTab, setActiveTab] =
    useState<(typeof moods)[number]['value']>('neon')

  return (
    <Tabs
      value={activeTab}
      onValueChange={(value) =>
        setActiveTab(value as (typeof moods)[number]['value'])
      }
      className="w-full max-w-md gap-4"
    >
      <TabsList className="bg-muted/40 h-auto gap-1 rounded-full border p-1 shadow-none">
        {moods.map((mood) => (
          <TabsTrigger
            key={mood.value}
            value={mood.value}
            className="text-muted-foreground hover:text-foreground data-active:text-foreground data-active:bg-background dark:data-active:bg-background dark:data-active:text-foreground h-auto flex-none gap-1.5 rounded-full px-3 py-1 text-xs font-medium after:hidden data-active:shadow-sm dark:data-active:border-transparent"
          >
            {mood.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border">
        {moods.map((mood) => (
          <div
            key={mood.value}
            className={cn(
              'absolute inset-0 transition-opacity duration-500',
              mood.value === activeTab ? 'opacity-100' : 'opacity-0',
            )}
          >
            <img
              src={mood.src}
              alt={mood.label}
              loading={mood.value === 'neon' ? 'eager' : 'lazy'}
              decoding="async"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-sm font-medium text-white">{mood.label}</p>
              <p className="text-xs text-white/80">{mood.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </Tabs>
  )
}
