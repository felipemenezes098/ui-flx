'use client'

import * as React from 'react'
import { MoonIcon, SunIcon } from 'lucide-react'
import { Switch as SwitchPrimitive } from 'radix-ui'

import { cn } from '@/lib/utils'

export function Switch07() {
  return (
    <SwitchPrimitive.Root
      defaultChecked
      aria-label="Toggle theme"
      className={cn(
        'group relative inline-flex h-8 w-14 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-colors outline-none',
        'focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50',
        'data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80',
      )}
    >
      <SunIcon className="absolute left-1.5 size-3.5 text-amber-500 transition-opacity group-data-checked:opacity-0" />
      <MoonIcon className="absolute right-1.5 size-3.5 text-background opacity-0 transition-opacity group-data-checked:opacity-100" />
      <SwitchPrimitive.Thumb
        className={cn(
          'pointer-events-none flex size-6 items-center justify-center rounded-full bg-background shadow-sm ring-0 transition-transform',
          'data-unchecked:translate-x-1 data-checked:translate-x-7',
        )}
      >
        <SunIcon className="size-3.5 text-amber-500 group-data-checked:hidden" />
        <MoonIcon className="hidden size-3.5 text-primary group-data-checked:block" />
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  )
}
