import { cva, type VariantProps } from 'class-variance-authority'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export const patternGridVariants = cva('grid grid-cols-1 gap-x-6 gap-y-8', {
  variants: {
    columns: {
      1: 'md:grid-cols-1',
      2: 'lg:grid-cols-2',
      3: 'lg:grid-cols-2 xl:grid-cols-3',
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
      1: '',
      2: '',
      3: '',
    },
  },
  compoundVariants: [
    {
      span: 'full',
      columns: 1,
      className: '',
    },
    {
      span: 'full',
      columns: 2,
      className: 'lg:col-span-2',
    },
    {
      span: 'full',
      columns: 3,
      className: 'lg:col-span-2 xl:col-span-3',
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
