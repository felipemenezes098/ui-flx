import type { ComponentType } from 'react'

export interface IntentEntry {
  slug: string
  name: string
  problem: string
  comingSoon?: boolean
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
  demo: ComponentType
}

export interface IntentManifest {
  slug: string
  name: string
  problem: string
  domain: string
  decisions: IntentDecision[]
}
