'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

import { showcaseIntents, type ShowcaseIntent } from './intents'

export function IntentShowcaseMobile() {
  const [active, setActive] = useState<ShowcaseIntent>(showcaseIntents[0])

  return (
    <Card className="dark:bg-background gap-0 py-0 shadow-sm md:hidden">
      {/* Intent selector */}
      <div className="no-scrollbar flex gap-1.5 overflow-x-auto border-b p-3">
        {showcaseIntents.map((intent) => (
          <button
            key={intent.slug}
            type="button"
            onClick={() => setActive(intent)}
            className={cn(
              'shrink-0 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors',
              intent.slug === active.slug
                ? 'border-foreground/20 bg-foreground text-background'
                : 'text-muted-foreground hover:text-foreground',
            )}
          >
            {intent.name}
          </button>
        ))}
      </div>

      {/* Prompt context */}
      <div className="flex flex-col gap-2 border-b px-4 py-3.5">
        <span className="text-muted-foreground text-[11px] font-medium tracking-wide uppercase">
          You want to
        </span>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.slug}
            initial={{ opacity: 0, filter: 'blur(6px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(6px)' }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-1.5"
          >
            <p className="text-sm font-medium">{active.prompt}</p>
            <div className="flex items-center gap-1.5 text-xs">
              <span className="text-muted-foreground">Decision</span>
              <span className="text-muted-foreground/40">·</span>
              <span className="font-semibold">{active.decision}</span>
            </div>
            <div className="mt-0.5 flex flex-wrap gap-1">
              {active.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-muted-foreground bg-background/50 px-1.5 py-0 text-[10px] font-normal"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Preview */}
      <div className="bg-muted/20 dark:bg-background relative flex min-h-72 items-center justify-center [background-image:radial-gradient(var(--color-border)_1px,transparent_1px)] [background-size:16px_16px] p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.slug}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.25 }}
            className="flex w-full max-w-full min-w-0 items-center justify-center"
          >
            <active.Demo />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <Link
        href={`/intents/${active.slug}`}
        className="text-muted-foreground hover:text-foreground group flex items-center justify-center gap-1 border-t px-4 py-3 text-xs font-medium transition-colors"
      >
        Open intent
        <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </Card>
  )
}
