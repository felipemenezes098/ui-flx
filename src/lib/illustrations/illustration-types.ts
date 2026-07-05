/** How many of the 4 grid columns an item spans. Defaults to 1. */
export type IllustrationSpan = 1 | 2 | 3 | 4

/** Card height in the gallery grid. Defaults to 'md'. Use 'lg' for large,
 * layered illustrations (e.g. scenes) that need more vertical room so the
 * artwork and hover toolbar aren't cramped. */
export type IllustrationSize = 'md' | 'lg'

export interface IllustrationItem {
  slug: string
  name: string
  description?: string
  span?: IllustrationSpan
  size?: IllustrationSize
  isNew?: boolean
}

export interface IllustrationCategory {
  slug: string
  name: string
  description: string
  items: IllustrationItem[]
  hasNew?: boolean
}
