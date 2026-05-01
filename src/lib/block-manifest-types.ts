import type React from 'react'

export interface BlockImage {
  light: string
  dark: string
}

export interface BlockMeta {
  containerClassName?: string
  componentClassName?: string
  iframeHeight?: number
}

export interface BlockManifest<TProps = Record<string, unknown>> {
  slug: string
  name: string
  description: string
  category: string
  image: BlockImage
  meta?: BlockMeta
  hasNew?: boolean
  component: React.ComponentType<any>
  editorFields: React.ComponentType<any>
  example?: React.ComponentType<any>
  defaults: TProps
  variations?: Record<string, React.ComponentType<any>>
}

export interface BlockItem {
  name: string
  description: string
  image: BlockImage
  slug: string
  hasNew?: boolean
  meta?: BlockMeta
}

export interface BlockCategory {
  category: string
  description: string
  image: BlockImage
  slug: string
  hasNew?: boolean
  type: string
  blocks: BlockItem[]
}
