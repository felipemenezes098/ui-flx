'use client'

import * as React from 'react'

import {
  Fullscreen,
  Maximize2,
  Minimize2,
  Moon,
  RotateCcw,
  Sun,
} from 'lucide-react'
import { motion } from 'motion/react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { useBlockLiveEditorOptional } from './block-live-editor'

export function BlockPreviewToolbar() {
  const ctx = useBlockLiveEditorOptional()
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!ctx) return null

  const { expanded, setExpanded, iframeRef, category, slug } = ctx
  const isDark = theme !== 'light'

  function handleRefresh() {
    const iframe = iframeRef.current
    if (!iframe) return
    iframe.src = iframe.src
  }

  function handleThemeToggle() {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <motion.div
      className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="dark:bg-card flex items-center gap-0.5 rounded-2xl border bg-white px-1.5 py-1.5">
        <div className="hidden lg:block">
          <Button
            variant={expanded ? 'secondary' : 'ghost'}
            title={expanded ? 'Collapse preview' : 'Expand preview'}
            onClick={() => setExpanded((v) => !v)}
            aria-label={expanded ? 'Collapse preview' : 'Expand preview'}
            className="gap-0 rounded-xl"
          >
            {expanded ? (
              <Minimize2 className="size-3.5 shrink-0" />
            ) : (
              <Maximize2 className="size-3.5 shrink-0" />
            )}
            <span
              className={cn(
                'grid overflow-hidden transition-all duration-150',
                expanded ? 'ml-1 grid-cols-[1fr]' : 'ml-0 grid-cols-[0fr]',
              )}
            >
              <span className="overflow-hidden text-xs whitespace-nowrap">
                {expanded ? 'Collapse' : 'Expand'}
              </span>
            </span>
          </Button>
        </div>
        <Button
          variant="ghost"
          title="Refresh preview"
          onClick={handleRefresh}
          aria-label="Refresh preview"
          className="rounded-xl"
        >
          <RotateCcw className="size-3.5 shrink-0" />
        </Button>
        {mounted && (
          <Button
            variant="ghost"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            onClick={handleThemeToggle}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="rounded-xl"
          >
            {isDark ? (
              <Sun className="size-3.5 shrink-0" />
            ) : (
              <Moon className="size-3.5 shrink-0" />
            )}
          </Button>
        )}
        <Button
          variant="ghost"
          title="Fullscreen"
          aria-label="Fullscreen"
          className="rounded-xl"
          asChild
        >
          <Link href={`/preview-editor/${category}/${slug}`} target="_blank">
            <Fullscreen className="size-3.5 shrink-0" />
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}
