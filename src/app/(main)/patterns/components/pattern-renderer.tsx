'use client'

import { patternRegistry } from './pattern-registry'

export function PatternRenderer({ name }: { name: string }) {
  const Component = patternRegistry[name]
  if (!Component) return null
  return <Component />
}
