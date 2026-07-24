'use client'

import { useSearchParams } from 'next/navigation'
import { useLayoutEffect, useState } from 'react'

import { parseCategoryFilter } from '../lib/blocks-category'

export function useBlocksNavCategories(): string[] | null {
  const searchParams = useSearchParams()
  const nextQs = searchParams.toString()
  const [fromLocation, setFromLocation] = useState<string[] | null>(null)

  useLayoutEffect(() => {
    const sync = () => {
      const raw = new URLSearchParams(globalThis.window.location.search).get(
        'category',
      )
      setFromLocation(parseCategoryFilter(raw))
    }
    sync()
    globalThis.window.addEventListener('popstate', sync)
    return () => globalThis.window.removeEventListener('popstate', sync)
  }, [nextQs])

  return fromLocation
}
