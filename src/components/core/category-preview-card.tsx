import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

function CategoryPreviewCard({
  className,
  ...props
}: Readonly<ComponentProps<'div'>>) {
  return (
    <div
      className={cn(
        'bg-card/50 border-border flex min-w-0 flex-col gap-3 overflow-hidden rounded-xl border p-3 shadow-xs',
        className,
      )}
      {...props}
    />
  )
}

function CategoryPreviewCardPreview({
  className,
  ...props
}: Readonly<ComponentProps<'div'>>) {
  return (
    <div
      className={cn(
        'border-border bg-muted/40 dark:bg-background relative w-full min-w-0 overflow-hidden rounded-lg border transition-transform duration-200 ease-out group-hover:-translate-y-0.5',
        className,
      )}
      {...props}
    />
  )
}

function CategoryPreviewCardBadge({
  className,
  children = 'New',
  ...props
}: Readonly<ComponentProps<'span'>>) {
  return (
    <span
      className={cn(
        'absolute top-2 right-2 z-10 rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-semibold text-white',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

function CategoryPreviewCardFooter({
  className,
  ...props
}: Readonly<ComponentProps<'div'>>) {
  return (
    <div
      className={cn('flex flex-col items-center gap-0.5 px-0.5', className)}
      {...props}
    />
  )
}

function CategoryPreviewCardTitle({
  className,
  ...props
}: Readonly<ComponentProps<'span'>>) {
  return (
    <span
      className={cn(
        'text-foreground text-center text-sm font-medium group-hover:underline group-hover:underline-offset-4',
        className,
      )}
      {...props}
    />
  )
}

function CategoryPreviewCardSublabel({
  className,
  ...props
}: Readonly<ComponentProps<'span'>>) {
  return (
    <span
      className={cn('text-muted-foreground text-center text-xs', className)}
      {...props}
    />
  )
}

export {
  CategoryPreviewCard,
  CategoryPreviewCardBadge,
  CategoryPreviewCardFooter,
  CategoryPreviewCardPreview,
  CategoryPreviewCardSublabel,
  CategoryPreviewCardTitle,
}
