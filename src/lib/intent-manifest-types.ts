import type { ComponentType } from 'react'

export type IntentGridColumns = 2 | 3 | 4

export interface IntentDecisionStyles {
  span?: 'full'
  className?: string
}

export interface IntentEntry {
  slug: string
  name: string
  problem: string
  comingSoon?: boolean
  grid?: {
    columns?: IntentGridColumns
  }
  manifest?: IntentManifest
}

export interface IntentDomain {
  slug: string
  name: string
  intents: IntentEntry[]
}

export interface IntentDecision {
  slug: string
  name: string
  best: string
  tags: string[]
  caveat: string
  patterns: string[]
  recommended?: boolean
  styles?: IntentDecisionStyles
  demo: ComponentType
}

export interface IntentManifest {
  slug: string
  name: string
  problem: string
  domain: string
  grid?: {
    columns?: IntentGridColumns
  }
  decisions: IntentDecision[]
}

export interface IntentCodeFile {
  name: string
  content: string
}

/**
 * Self-contained, server-built artifacts for a single decision. Built once in a
 * server component (see `intent-view.ts`) and passed down as one prop — never
 * threaded as loose scalars.
 *
 * Fully serializable: it carries the decision's display copy but NOT its `demo`
 * component, so it can cross the server→client boundary. Render the demo on the
 * server and pass it as children/prop alongside the view.
 */
export interface DecisionView {
  slug: string
  name: string
  best: string
  caveat: string
  styles?: IntentDecisionStyles
  registryName: string
  install: string
  prompt: string
  codeFiles: IntentCodeFile[]
}
