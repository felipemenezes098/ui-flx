export type SketchGridColumns = 1 | 2 | 3

export interface SketchItem {
  slug: string
  name: string
  description?: string
  span?: 'full'
  isNew?: boolean
}

export interface SketchCategory {
  slug: string
  name: string
  description: string
  items: SketchItem[]
  hasNew?: boolean
  grid?: {
    columns?: SketchGridColumns
  }
}
