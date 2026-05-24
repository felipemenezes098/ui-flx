'use client'

import { useState } from 'react'

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

const items = [
  {
    label: 'Design',
    src: 'https://images.unsplash.com/photo-1635746065098-a0ae3eadfa6f?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    label: 'Components',
    src: 'https://images.unsplash.com/photo-1530912780732-0d2507ded3e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    label: 'Developer',
    src: 'https://images.unsplash.com/photo-1719448683263-8424028681f2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
] as const

export function Tabs15() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <Tabs
      value={String(activeIndex)}
      onValueChange={(value) => setActiveIndex(Number(value))}
      className="w-full max-w-md items-center gap-6"
    >
      <div className="flex w-full justify-center p-1">
        <TabsList className="mx-auto h-auto gap-1.5 bg-transparent p-0 shadow-none">
          {items.map((tab, index) => (
            <TabsTrigger
              key={tab.label}
              value={String(index)}
              className="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:bg-muted hover:bg-muted hover:text-foreground dark:data-[state=active]:bg-accent dark:hover:text-foreground rounded-2xl border-none bg-transparent px-3 py-2 text-sm shadow-none transition-colors data-[state=active]:font-medium data-[state=active]:shadow-none group-data-[variant=default]/tabs-list:data-[state=active]:shadow-none"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      <div className="relative aspect-square max-h-60 w-full overflow-hidden rounded-2xl">
        {items.map((item, index) => (
          <div
            key={item.label}
            className={cn(
              'absolute inset-0 transition-opacity duration-500',
              index === activeIndex ? 'opacity-100' : 'opacity-0',
            )}
          >
            <img
              src={item.src}
              alt={item.label}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        ))}
      </div>
    </Tabs>
  )
}
