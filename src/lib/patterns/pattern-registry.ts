'use client'

import dynamic from 'next/dynamic'
import type React from 'react'

import { patternCategories } from '@/lib/patterns/patterns-catalog'

/**
 * Slug -> pattern component, lazily imported. Lives in lib so any surface
 * (gallery, category page) can resolve a pattern without reaching into a
 * route's component folder.
 */
export const patternRegistry: Record<string, React.ComponentType> =
  Object.fromEntries(
    patternCategories.flatMap((cat) =>
      cat.items.map((item) => [
        item.slug,
        dynamic(() =>
          import(`registry/patterns/${cat.slug}/${item.slug}`).then((m) => ({
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
