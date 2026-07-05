export interface CompositionMeta {
  containerClassName?: string
  iframeHeight?: number
}

export interface CompositionItem {
  slug: string
  name: string
  description?: string
  isNew?: boolean
  meta?: CompositionMeta
}

export interface CompositionCategory {
  slug: string
  name: string
  description: string
  items: CompositionItem[]
  hasNew?: boolean
}
