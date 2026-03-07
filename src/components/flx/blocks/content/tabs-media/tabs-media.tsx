'use client'

import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { useState } from 'react'

import { ScrollFadeEdges } from '@/components/flx/blocks/shared/scroll-fade-edges'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

import type { TabsMediaProps } from './types'

export function TabsMedia({
  title,
  description,
  items,
}: Readonly<TabsMediaProps>) {
  const [active, setActive] = useState(items[0]?.label ?? '')
  const activeTab = items.find((t) => t.label === active) ?? items[0]

  if (!items.length) return null

  return (
    <section className="flex w-full flex-col gap-5">
      {(title || description) && (
        <header className="flex flex-col gap-2 text-center">
          {title && <h2 className="text-2xl font-bold">{title}</h2>}
          {description && (
            <p className="text-muted-foreground text-sm">{description}</p>
          )}
        </header>
      )}

      <Tabs
        value={active}
        onValueChange={setActive}
        className="items-center gap-8"
      >
        <ScrollFadeEdges
          direction="horizontal"
          className="w-full"
          scrollClassName="flex no-scrollbar p-1"
          fadeWidth={50}
        >
          <TabsList className="mx-auto h-auto gap-3 bg-transparent p-0 shadow-none">
            {items.map((tab) => (
              <TabsTrigger
                key={tab.label}
                value={tab.label}
                className="text-muted-foreground data-[state=active]:text-foreground data-[state=active]:bg-muted hover:bg-muted hover:text-foreground dark:data-[state=active]:bg-accent dark:hover:text-foreground rounded-2xl border-none bg-transparent px-3 py-2 text-sm shadow-none transition-colors data-[state=active]:font-medium data-[state=active]:shadow-none group-data-[variant=default]/tabs-list:data-[state=active]:shadow-none"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </ScrollFadeEdges>

        <div className="relative aspect-square max-h-120 min-h-100 w-full overflow-hidden rounded-2xl 2xl:max-h-150">
          <AnimatePresence>
            <motion.div
              key={activeTab?.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={activeTab?.url ?? ''}
                alt={activeTab?.label ?? ''}
                fill
                className="object-cover"
                sizes="100vw"
                unoptimized
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </Tabs>
    </section>
  )
}
