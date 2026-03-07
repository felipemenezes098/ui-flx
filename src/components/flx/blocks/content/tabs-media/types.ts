export interface TabsMediaItem {
  label: string
  url: string
}

export interface TabsMediaProps {
  title?: string
  description?: string
  items: TabsMediaItem[]
}
