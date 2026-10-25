import {
  Check,
  ChevronDown,
  ChevronRight,
  ChevronsUpDown,
  Search,
} from 'lucide-react'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

const surface = 'bg-card dark:bg-muted border shadow-sm'

function Stage({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      {children}
    </div>
  )
}

function Bar({ className }: Readonly<{ className?: string }>) {
  return (
    <div className={cn('bg-foreground/15 h-1.5 rounded-full', className)} />
  )
}

export function AccordionConcept() {
  return (
    <Stage>
      <div className={cn(surface, 'w-36 divide-y rounded-lg')}>
        <div className="flex h-8 items-center justify-between px-3">
          <Bar className="bg-foreground/30 w-14" />
          <ChevronDown className="text-foreground/30 size-3" />
        </div>
        <div className="flex h-8 items-center justify-between px-3">
          <Bar className="w-10" />
          <ChevronDown className="text-foreground/30 size-3" />
        </div>
        <div className="flex h-8 items-center justify-between px-3">
          <Bar className="w-12" />
          <ChevronDown className="text-foreground/30 size-3" />
        </div>
      </div>
    </Stage>
  )
}

export function AvatarConcept() {
  return (
    <Stage>
      <div className="relative">
        <div
          className={cn(
            surface,
            'relative flex size-16 items-end justify-center overflow-hidden rounded-full',
          )}
        >
          <div className="bg-foreground/20 absolute top-3 size-6 rounded-full" />
          <div className="bg-foreground/20 h-6 w-10 rounded-t-full" />
        </div>
        <div className="bg-primary ring-card dark:ring-muted absolute right-0 bottom-0 size-3.5 rounded-full ring-[3px]" />
      </div>
    </Stage>
  )
}

export function BadgeConcept() {
  return (
    <Stage>
      <div className="flex items-center gap-2">
        <div className="bg-primary flex h-5 w-14 items-center justify-center rounded-full">
          <Bar className="bg-primary-foreground/50 w-7" />
        </div>
        <div className="border-foreground/20 flex h-5 w-14 items-center justify-center rounded-full border">
          <Bar className="w-7" />
        </div>
      </div>
    </Stage>
  )
}

export function BannerConcept() {
  return (
    <Stage>
      <div className="bg-primary flex h-8 w-40 items-center justify-center rounded-md shadow-sm">
        <Bar className="bg-primary-foreground/50 w-24" />
      </div>
    </Stage>
  )
}

export function BreadcrumbConcept() {
  return (
    <Stage>
      <div className="flex items-center gap-1.5">
        <Bar className="w-8" />
        <ChevronRight className="text-foreground/25 size-3" />
        <Bar className="w-10" />
        <ChevronRight className="text-foreground/25 size-3" />
        <Bar className="bg-foreground/35 w-12" />
      </div>
    </Stage>
  )
}

export function ButtonConcept() {
  return (
    <Stage>
      <div className="bg-primary flex h-8 w-24 items-center justify-center rounded-md shadow-sm">
        <Bar className="bg-primary-foreground/50 w-12" />
      </div>
    </Stage>
  )
}

export function CardConcept() {
  return (
    <Stage>
      <div className={cn(surface, 'w-32 overflow-hidden rounded-lg')}>
        <div className="bg-foreground/10 h-12 w-full" />
        <div className="flex flex-col gap-1.5 p-3">
          <Bar className="bg-foreground/30 w-16" />
          <Bar className="bg-foreground/10 w-24" />
        </div>
      </div>
    </Stage>
  )
}

export function CheckboxConcept() {
  return (
    <Stage>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2.5">
          <div className="bg-primary flex size-4 items-center justify-center rounded-[4px] shadow-sm">
            <Check
              className="text-primary-foreground size-2.5"
              strokeWidth={3}
            />
          </div>
          <Bar className="bg-foreground/25 w-16" />
        </div>
        <div className="flex items-center gap-2.5">
          <div className="border-foreground/25 size-4 rounded-[4px] border" />
          <Bar className="bg-foreground/10 w-12" />
        </div>
      </div>
    </Stage>
  )
}

export function CollapsibleConcept() {
  return (
    <Stage>
      <div className="flex w-36 flex-col gap-3">
        <div
          className={cn(
            surface,
            'flex h-8 items-center justify-between rounded-md px-3',
          )}
        >
          <Bar className="bg-foreground/25 w-14" />
          <ChevronDown className="text-foreground/30 size-3" />
        </div>
        <div className="flex flex-col gap-1.5 px-3">
          <Bar className="bg-foreground/10 w-full" />
          <Bar className="bg-foreground/10 w-2/3" />
        </div>
      </div>
    </Stage>
  )
}

export function CommandConcept() {
  return (
    <Stage>
      <div className={cn(surface, 'w-40 overflow-hidden rounded-lg')}>
        <div className="flex h-8 items-center gap-2 border-b px-3">
          <Search className="text-foreground/30 size-3" />
          <Bar className="w-12" />
        </div>
        <div className="p-1">
          <div className="bg-foreground/5 flex h-6 items-center rounded px-2">
            <Bar className="bg-foreground/25 w-14" />
          </div>
          <div className="flex h-6 items-center px-2">
            <Bar className="bg-foreground/10 w-10" />
          </div>
        </div>
      </div>
    </Stage>
  )
}

export function DialogConcept() {
  return (
    <Stage>
      <div
        className={cn(
          surface,
          'flex w-36 flex-col gap-2.5 rounded-xl p-3 shadow-md',
        )}
      >
        <Bar className="bg-foreground/30 w-14" />
        <Bar className="bg-foreground/10 w-full" />
        <div className="bg-primary h-5 w-10 self-end rounded-md" />
      </div>
    </Stage>
  )
}

export function DropdownConcept() {
  return (
    <Stage>
      <div className={cn(surface, 'w-32 rounded-lg p-1 shadow-md')}>
        <div className="bg-foreground/5 flex h-6 items-center rounded px-2">
          <Bar className="bg-foreground/25 w-12" />
        </div>
        <div className="flex h-6 items-center px-2">
          <Bar className="bg-foreground/12 w-10" />
        </div>
        <div className="flex h-6 items-center px-2">
          <Bar className="bg-foreground/12 w-14" />
        </div>
      </div>
    </Stage>
  )
}

export function EmptyConcept() {
  return (
    <Stage>
      <div className="border-foreground/20 flex h-24 w-36 flex-col items-center justify-center gap-2.5 rounded-lg border border-dashed">
        <div className="bg-foreground/5 size-7 rounded-md" />
        <Bar className="bg-foreground/20 w-16" />
      </div>
    </Stage>
  )
}

export function FormsConcept() {
  return (
    <Stage>
      <div className="flex w-36 flex-col gap-2">
        <Bar className="bg-foreground/25 w-10" />
        <div className={cn(surface, 'flex h-8 items-center rounded-md px-3')}>
          <Bar className="bg-foreground/10 w-16" />
        </div>
        <div className="bg-primary h-6 w-14 self-end rounded-md shadow-sm" />
      </div>
    </Stage>
  )
}

export function InputConcept() {
  return (
    <Stage>
      <div
        className={cn(
          surface,
          'flex h-9 w-40 items-center gap-1 rounded-md px-3',
        )}
      >
        <Bar className="bg-foreground/10 w-16" />
        <div className="bg-foreground/40 h-3.5 w-px" />
      </div>
    </Stage>
  )
}

export function ItemConcept() {
  return (
    <Stage>
      <div
        className={cn(
          surface,
          'flex w-40 items-center gap-2.5 rounded-lg p-2.5',
        )}
      >
        <div className="bg-foreground/15 size-7 shrink-0 rounded-full" />
        <div className="flex flex-col gap-1.5">
          <Bar className="bg-foreground/25 w-14" />
          <Bar className="bg-foreground/10 w-20" />
        </div>
      </div>
    </Stage>
  )
}

export function PaginationConcept() {
  return (
    <Stage>
      <div className="flex items-center gap-1.5">
        <div className="border-foreground/15 flex size-7 items-center justify-center rounded-md border">
          <div className="bg-foreground/25 size-1.5 rounded-full" />
        </div>
        <div className="bg-foreground flex size-7 items-center justify-center rounded-md">
          <div className="bg-background size-1.5 rounded-full" />
        </div>
        <div className="border-foreground/15 flex size-7 items-center justify-center rounded-md border">
          <div className="bg-foreground/25 size-1.5 rounded-full" />
        </div>
      </div>
    </Stage>
  )
}

export function PopoverConcept() {
  return (
    <Stage>
      <div className={cn(surface, 'relative w-36 rounded-lg p-3 shadow-md')}>
        <div className="bg-card dark:bg-muted absolute -top-1 left-1/2 size-2 -translate-x-1/2 rotate-45 border-t border-l" />
        <div className="flex flex-col gap-1.5">
          <Bar className="bg-foreground/30 w-14" />
          <Bar className="bg-foreground/10 w-full" />
          <Bar className="bg-foreground/10 w-2/3" />
        </div>
      </div>
    </Stage>
  )
}

export function SelectConcept() {
  return (
    <Stage>
      <div
        className={cn(
          surface,
          'flex h-9 w-40 items-center justify-between rounded-md px-3',
        )}
      >
        <Bar className="w-16" />
        <ChevronsUpDown className="text-foreground/30 size-3" />
      </div>
    </Stage>
  )
}

export function SkeletonConcept() {
  return (
    <Stage>
      <div className="flex items-center gap-3">
        <div className="bg-foreground/10 size-10 shrink-0 animate-pulse rounded-full" />
        <div className="flex flex-col gap-2">
          <Bar className="bg-foreground/15 w-20 animate-pulse" />
          <Bar className="bg-foreground/10 w-14 animate-pulse" />
        </div>
      </div>
    </Stage>
  )
}

export function SwitchConcept() {
  return (
    <Stage>
      <div className="flex items-center gap-4">
        <div className="bg-primary flex h-5 w-9 items-center rounded-full px-0.5 shadow-sm">
          <div className="bg-background ml-auto size-4 rounded-full" />
        </div>
        <div className="bg-input flex h-5 w-9 items-center rounded-full px-0.5 shadow-sm">
          <div className="bg-background size-4 rounded-full" />
        </div>
      </div>
    </Stage>
  )
}

export function TableConcept() {
  return (
    <Stage>
      <div className={cn(surface, 'w-40 divide-y overflow-hidden rounded-lg')}>
        <div className="bg-foreground/5 flex h-7 items-center justify-between px-3">
          <Bar className="bg-foreground/25 w-10" />
          <Bar className="bg-foreground/25 w-8" />
        </div>
        {[0, 1].map((row) => (
          <div key={row} className="flex h-7 items-center justify-between px-3">
            <Bar className="w-12" />
            <Bar className="bg-foreground/10 w-8" />
          </div>
        ))}
      </div>
    </Stage>
  )
}

export function TabsConcept() {
  return (
    <Stage>
      <div className="bg-muted flex w-40 rounded-md p-1">
        <div className="bg-card dark:bg-foreground/10 flex h-6 flex-1 items-center justify-center rounded shadow-sm">
          <Bar className="bg-foreground/30 w-8" />
        </div>
        <div className="flex h-6 flex-1 items-center justify-center">
          <Bar className="bg-foreground/12 w-8" />
        </div>
        <div className="flex h-6 flex-1 items-center justify-center">
          <Bar className="bg-foreground/12 w-8" />
        </div>
      </div>
    </Stage>
  )
}

export function TooltipConcept() {
  return (
    <Stage>
      <div className="flex flex-col items-center">
        <div className="bg-foreground flex h-6 items-center rounded-md px-3 shadow-md">
          <Bar className="bg-background/70 w-14" />
        </div>
        <div className="bg-foreground -mt-1 size-2 rotate-45 rounded-[2px]" />
      </div>
    </Stage>
  )
}
