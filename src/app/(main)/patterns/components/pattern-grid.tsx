import { cva, type VariantProps } from 'class-variance-authority'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export const patternGridVariants = cva('grid grid-cols-1 gap-4', {
  variants: {
    columns: {
      2: 'sm:grid-cols-2',
      3: 'sm:grid-cols-2 lg:grid-cols-3',
    },
  },
  defaultVariants: {
    columns: 3,
  },
})

export const patternGridItemVariants = cva('', {
  variants: {
    span: {
      default: '',
      full: '',
    },
    columns: {
      2: '',
      3: '',
    },
  },
  compoundVariants: [
    {
      span: 'full',
      columns: 2,
      className: 'sm:col-span-2',
    },
    {
      span: 'full',
      columns: 3,
      className: 'sm:col-span-2 lg:col-span-3',
    },
  ],
  defaultVariants: {
    span: 'default',
    columns: 3,
  },
})

export function PatternGrid({
  children,
  columns,
  className,
}: Readonly<
  {
    children: ReactNode
    className?: string
  } & VariantProps<typeof patternGridVariants>
>) {
  return (
    <div className={cn(patternGridVariants({ columns }), className)}>
      {children}
    </div>
  )
}
