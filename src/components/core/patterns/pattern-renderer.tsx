'use client'

import type { ComponentType } from 'react'

interface PatternRendererProps {
  name: string
  registry: Record<string, ComponentType>
}

export function PatternRenderer({ name, registry }: PatternRendererProps) {
  const Component = registry[name]
  if (!Component) return null
  return <Component />
}
