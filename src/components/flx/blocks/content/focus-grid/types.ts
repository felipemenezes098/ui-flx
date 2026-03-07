export interface FocusGridItem {
  image: string
  title: string
  description: string
  defaultFocus?: boolean
}

export interface FocusGridProps {
  title?: string
  description?: string
  items: FocusGridItem[]
  /** When true, unfocused items are dimmed while another item is focused. */
  dimUnfocused?: boolean
  /** When true, only the focused item displays its description. */
  descriptionOnFocus?: boolean
}
