'use client'

import { useState } from 'react'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

export interface Content03Item {
  label: string
  src: string
}

export interface Content03Props {
  title?: string
  description?: string
  items: Content03Item[]
}

export function Content03({
  title,
  description,
  items,
}: Readonly<Content03Props>) {
  const [activeIndex, setActiveIndex] = useState(0)
  const safeIndex = Math.min(activeIndex, Math.max(0, items.length - 1))

  if (!items.length) return null

  return (
    <div className="flex w-full flex-col gap-5">
      {(title || description) && (
        <header className="flex flex-col gap-2 text-center">
          {title && <h2 className="text-2xl font-bold">{title}</h2>}
          {description && (
            <p className="text-muted-foreground text-sm">{description}</p>
          )}
        </header>
      )}

      <Tabs
        value={String(safeIndex)}
        onValueChange={(value) => setActiveIndex(Number(value))}
        className="items-center gap-8"
      >
        <div className="scroll-fade-x scroll-fade-[50px] no-scrollbar flex w-full overflow-x-auto overflow-y-hidden p-1">
          <TabsList className="mx-auto h-auto gap-3 bg-transparent p-0 shadow-none">
            {items.map((tab, index) => (
              <TabsTrigger
                key={`${index}-${tab.label}`}
                value={String(index)}
                className="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:bg-muted hover:bg-muted hover:text-foreground dark:data-[state=active]:bg-accent dark:hover:text-foreground rounded-2xl border-none bg-transparent px-3 py-2 text-sm shadow-none transition-colors data-[state=active]:font-medium data-[state=active]:shadow-none group-data-[variant=default]/tabs-list:data-[state=active]:shadow-none"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="relative aspect-square max-h-120 min-h-100 w-full overflow-hidden rounded-2xl 2xl:max-h-150">
          {items.map((item, index) => (
            <div
              key={`${index}-${item.src}`}
              className={cn(
                'absolute inset-0 transition-opacity duration-500',
                index === safeIndex ? 'opacity-100' : 'opacity-0',
              )}
            >
              <img
                src={item.src}
                alt={item.label}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={index === 0 ? 'high' : 'low'}
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          ))}
        </div>
      </Tabs>
    </div>
  )
}
