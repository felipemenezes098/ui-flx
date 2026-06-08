import type { ComponentType } from 'react'

export type PatternGridColumns = 1 | 2 | 3

export interface PatternItem {
  slug: string
  name: string
  description?: string
  prompt?: string
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
