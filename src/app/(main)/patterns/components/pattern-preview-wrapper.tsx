'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { Palette } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { PresetScope } from '@/components/core/preset/preset-scope'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { type PresetId, isPresetId, presets } from '@/lib/presets-config'
import {
  FALLBACK_PRESET,
  readPresetFromStorage,
  writePresetToStorage,
} from '@/lib/preset-storage'
import { patternCategories } from '@/lib/patterns-catalog'

export function PatternPreviewWrapper({ children }: { children: ReactNode }) {
  const [preset, setPreset] = useState<PresetId>(FALLBACK_PRESET)
  const pathname = usePathname()

  useEffect(() => {
    const stored = readPresetFromStorage('patterns')
    if (stored) setPreset(stored)
  }, [])

  function handlePreset(value: string) {
    if (!isPresetId(value)) return
    setPreset(value)
    writePresetToStorage('patterns', value)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-4">
        <nav className="flex flex-wrap gap-1.5">
          {patternCategories.map((category) => {
            const isActive = pathname === `/patterns/${category.slug}`
            return (
              <Link
                key={category.slug}
                href={`/patterns/${category.slug}`}
                className={cn(
                  'rounded-full px-3 py-1 text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-foreground text-background'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted',
                )}
              >
                {category.name}
              </Link>
            )
          })}
        </nav>

        {/* Desktop: inline indicators */}
        <TooltipProvider delayDuration={0}>
          <div className="hidden items-center gap-1 md:flex">
            {presets.map((p) => (
              <Tooltip key={p.id}>
                <TooltipTrigger asChild>
                  <button
                    data-preset={p.id}
                    onClick={() => handlePreset(p.id)}
                    aria-label={p.name}
                    className={cn(
                      'border-border/60 bg-background flex cursor-pointer items-center gap-0.5 rounded-md border p-0.5 transition-all',
                      preset === p.id
                        ? 'ring-foreground/25 ring-2'
                        : 'opacity-40 hover:opacity-100',
                    )}
                  >
                    <span className="bg-primary size-2.5 rounded-full" />
                    <span className="bg-muted size-2.5 rounded-full" />
                  </button>
                </TooltipTrigger>
                <TooltipContent>{p.name}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground md:hidden"
              aria-label="Preview preset"
            >
              <Palette className="size-3.5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="bottom" align="end" className="min-w-44">
            <DropdownMenuLabel className="text-muted-foreground font-normal">
              Preview preset
            </DropdownMenuLabel>
            <DropdownMenuRadioGroup value={preset} onValueChange={handlePreset}>
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
                    <span className="bg-primary size-2 rounded-full" />
                    <span className="bg-muted size-2 rounded-full" />
                  </span>
                  <span className="min-w-0 font-medium">{p.name}</span>
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <PresetScope preset={preset}>{children}</PresetScope>
    </div>
  )
}
