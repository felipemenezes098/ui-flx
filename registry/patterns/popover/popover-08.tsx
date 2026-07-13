'use client'

import { useState } from 'react'
import { CheckIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

const swatches = [
  { hex: '#EF4444', className: 'bg-red-500' },
  { hex: '#F97316', className: 'bg-orange-500' },
  { hex: '#F59E0B', className: 'bg-amber-500' },
  { hex: '#84CC16', className: 'bg-lime-500' },
  { hex: '#10B981', className: 'bg-emerald-500' },
  { hex: '#14B8A6', className: 'bg-teal-500' },
  { hex: '#0EA5E9', className: 'bg-sky-500' },
  { hex: '#3B82F6', className: 'bg-blue-500' },
  { hex: '#6366F1', className: 'bg-indigo-500' },
  { hex: '#8B5CF6', className: 'bg-violet-500' },
  { hex: '#EC4899', className: 'bg-pink-500' },
  { hex: '#F43F5E', className: 'bg-rose-500' },
] as const

export function Popover08() {
  const [color, setColor] = useState<(typeof swatches)[number]>(swatches[7])

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button variant="outline">
            <span
              className={cn('size-4 rounded-sm', color.className)}
              aria-hidden
            />
            <span className="font-mono text-xs">{color.hex}</span>
          </Button>
        }
      />
      <PopoverContent align="start" className="w-auto p-3">
        <div className="grid grid-cols-6 gap-1.5">
          {swatches.map((s) => (
            <button
              key={s.hex}
              type="button"
              aria-label={s.hex}
              onClick={() => setColor(s)}
              className={cn(
                'flex size-7 items-center justify-center rounded-md transition outline-none',
                s.className,
                'hover:ring-ring focus-visible:ring-ring hover:ring-2 focus-visible:ring-2',
              )}
            >
              {color.hex === s.hex && (
                <CheckIcon className="size-3.5 text-white drop-shadow" />
              )}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}
