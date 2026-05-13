'use client'

import * as React from 'react'

import { motion } from 'motion/react'
import {
  Fullscreen,
  Maximize2,
  Minimize2,
  Moon,
  Palette,
  RotateCcw,
  Sun,
} from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { isPresetId, presets } from '@/lib/presets-config'

import { useBlockLiveEditorOptional } from './block-live-editor'

export function BlockPreviewToolbar() {
  const ctx = useBlockLiveEditorOptional()
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!ctx) return null

  const {
    expanded,
    setExpanded,
    iframeRef,
    category,
    slug,
    preset,
    setPreset,
  } = ctx
  const isDark = theme !== 'light'

  function handleRefresh() {
    const iframe = iframeRef.current
    if (!iframe) return
    iframe.src = iframe.src
  }

  function handleThemeToggle() {
    setTheme(isDark ? 'light' : 'dark')
  }

  function handlePresetValue(next: string) {
    if (isPresetId(next)) setPreset(next)
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              type="button"
              variant="ghost"
              title="Preview preset"
              aria-label="Preview preset"
              className="rounded-xl"
            >
              <Palette className="size-3.5 shrink-0" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" align="center" className="min-w-52">
            <DropdownMenuLabel className="text-muted-foreground font-normal">
              Preview preset
            </DropdownMenuLabel>
            <DropdownMenuRadioGroup
              value={preset}
              onValueChange={handlePresetValue}
            >
              {presets.map((p) => (
                <DropdownMenuRadioItem
                  key={p.id}
                  value={p.id}
                  textValue={p.name}
                  className="gap-2.5 pr-8 pl-2"
                >
                  <span
                    data-preset={p.id}
                    className="border-border/60 bg-background flex shrink-0 items-center gap-0.5 rounded-md border p-0.5"
                    aria-hidden
                  >
                    <span className="bg-primary size-2.5 rounded-full" />
                    <span className="bg-muted size-2.5 rounded-full" />
                  </span>
                  <span className="min-w-0 font-medium">{p.name}</span>
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
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
