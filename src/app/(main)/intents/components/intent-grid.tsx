import { cva, type VariantProps } from 'class-variance-authority'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

export const intentGridVariants = cva('grid grid-cols-1 gap-3', {
  variants: {
    columns: {
      2: 'sm:grid-cols-2',
      3: 'sm:grid-cols-2 lg:grid-cols-3',
      4: 'sm:grid-cols-2 lg:grid-cols-4',
    },
  },
  defaultVariants: {
    columns: 4,
  },
})

export const intentGridItemVariants = cva('', {
  variants: {
    span: {
      default: '',
      full: '',
    },
    columns: {
      2: '',
      3: '',
      4: '',
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
    {
      span: 'full',
      columns: 4,
      className: 'sm:col-span-2 lg:col-span-4',
    },
  ],
  defaultVariants: {
    span: 'default',
    columns: 4,
  },
})

export function IntentGrid({
  children,
  columns,
  className,
}: Readonly<
  {
    children: ReactNode
    className?: string
  } & VariantProps<typeof intentGridVariants>
>) {
  return (
    <div className={cn(intentGridVariants({ columns }), className)}>
      {children}
    </div>
  )
}
