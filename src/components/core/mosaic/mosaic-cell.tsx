import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'

import { cn } from '@/lib/utils'

import { type MosaicSpan, mosaicSpanClass } from './mosaic-span'

export type MosaicCellSize = 'md' | 'lg'

const minHeightBySize: Record<MosaicCellSize, string> = {
  md: 'min-h-70',
  lg: 'min-h-96',
}

function mosaicCellClassName({
  span = 1,
  size = 'md',
  className,
}: Readonly<{
  span?: MosaicSpan
  size?: MosaicCellSize
  className?: string
}>) {
  return cn(
    'border-border/60 relative flex items-center justify-center border-r border-b p-6',
    minHeightBySize[size],
    mosaicSpanClass[span],
    className,
  )
}

function MosaicCell({
  span = 1,
  size = 'md',
  className,
  ...props
}: Readonly<
  ComponentProps<'div'> & {
    span?: MosaicSpan
    size?: MosaicCellSize
  }
>) {
  return (
    <div
      data-slot="mosaic-cell"
      data-span={span}
      data-size={size}
      className={mosaicCellClassName({ span, size, className })}
      {...props}
    />
  )
}

function MosaicCellLink({
  href,
  span = 1,
  size = 'md',
  className,
  children,
}: Readonly<{
  href: string
  span?: MosaicSpan
  size?: MosaicCellSize
  className?: string
  children: ReactNode
}>) {
  return (
    <Link
      href={href}
      data-slot="mosaic-cell-link"
      data-span={span}
      data-size={size}
      className={mosaicCellClassName({
        span,
        size,
        className: cn('hover:bg-muted/50 transition-colors', className),
      })}
    >
      {children}
    </Link>
  )
}

function MosaicSlot({
  span = 1,
  className,
  ...props
}: Readonly<
  ComponentProps<'div'> & {
    span?: MosaicSpan
  }
>) {
  return (
    <div
      data-slot="mosaic-slot"
      data-span={span}
      className={cn('min-w-0', mosaicSpanClass[span], className)}
      {...props}
    />
  )
}

export { MosaicCell, MosaicCellLink, MosaicSlot, mosaicCellClassName }
