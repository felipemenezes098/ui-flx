'use client'

import dynamic from 'next/dynamic'
import type React from 'react'

import { compositionCategories } from '@/lib/compositions/compositions-catalog'

/**
 * Slug -> composition component, lazily imported. Lives in lib so any surface
 * (gallery, preview route, home spotlight) can resolve a composition without
 * reaching into another route's component folder.
 */
export const compositionRegistry: Record<string, React.ComponentType> =
  Object.fromEntries(
    compositionCategories.flatMap((cat) =>
      cat.items.map((item) => [
        item.slug,
        dynamic(() =>
          import(`registry/compositions/${cat.slug}/${item.slug}`).then((m) => ({
            default:
              m.default ??
              (Object.values(m).find(
                (v) => typeof v === 'function',
              ) as React.ComponentType),
          })),
        ),
      ]),
    ),
  )
