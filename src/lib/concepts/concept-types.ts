export type ConceptGridColumns = 1 | 2 | 3

export interface ConceptItem {
  slug: string
  name: string
  description?: string
  span?: 'full'
  isNew?: boolean
}

export interface ConceptCategory {
  slug: string
  name: string
  description: string
  items: ConceptItem[]
  hasNew?: boolean
  grid?: {
    columns?: ConceptGridColumns
  }
}
