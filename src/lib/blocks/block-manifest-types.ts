import type React from 'react'
import type { ComponentType } from 'react'

import type { PresetId } from '@/lib/presets/presets-config'

export interface BlockImage {
  light: string
  dark: string
}

export interface BlockMeta {
  containerClassName?: string
  iframeHeight?: number
  captureViewportOnly?: boolean
  captureDelay?: number
}

export interface BlockManifest {
  slug: string
  name: string
  description: string
  category: string
  preset: PresetId
  image: BlockImage
  meta?: BlockMeta
  hasNew?: boolean
  component: React.ComponentType<any>
}

export interface BlockItem {
  name: string
  description: string
  preset: PresetId
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

export interface BlockCategoryRow {
  slug: string
  category: string
  description: string
  type: string
  hasNew?: boolean
  image: BlockImage
  concept: ComponentType
  blocks: BlockManifest[]
}
