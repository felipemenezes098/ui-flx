import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

function MosaicGrid({
  className,
  variant = 'mosaic',
  children,
  ...props
}: Readonly<
  ComponentProps<'div'> & {
    variant?: 'mosaic' | 'cards'
  }
>) {
  return (
    <div
      data-slot="mosaic-grid"
      data-variant={variant}
      className={cn(
        'grid w-full grid-cols-1 md:grid-cols-4',
        variant === 'mosaic' &&
          'border-border/60 relative overflow-hidden rounded-xl after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:border after:border-border/60',
        variant === 'cards' && 'gap-4',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { MosaicGrid }
