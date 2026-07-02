import type { ComponentType } from 'react'

export type PatternGridColumns = 1 | 2 | 3

export interface PatternItem {
  slug: string
  name: string
  description?: string
  span?: 'full'
  isNew?: boolean
}

export interface PatternCategory {
  slug: string
  name: string
  description: string
  preview: ComponentType
  items: PatternItem[]
  hasNew?: boolean
  grid?: {
    columns?: PatternGridColumns
  }
}

/**
 * A forms library (e.g. React Hook Form, TanStack Form) groups several
 * pattern categories. The library is the top-level tab; its categories are
 * rendered as ordered sections (simple → advanced) within a single page.
 */
export interface FormLibrary {
  slug: string
  name: string
  description: string
  categories: PatternCategory[]
}
