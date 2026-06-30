export type CompositionGridColumns = 1 | 2 | 3

export interface CompositionItem {
  slug: string
  name: string
  description?: string
  span?: 'full'
  isNew?: boolean
}

export interface CompositionCategory {
  slug: string
  name: string
  description: string
  items: CompositionItem[]
  hasNew?: boolean
  grid?: {
    columns?: CompositionGridColumns
  }
}
