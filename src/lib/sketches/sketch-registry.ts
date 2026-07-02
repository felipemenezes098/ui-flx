'use client'

import dynamic from 'next/dynamic'
import type React from 'react'

import { sketchCategories } from '@/lib/sketches/sketches-catalog'

/**
 * Slug -> sketch component, lazily imported. Lives in lib so any surface
 * (gallery) can resolve a sketch without reaching into a route's component
 * folder.
 */
export const sketchRegistry: Record<string, React.ComponentType> =
  Object.fromEntries(
    sketchCategories.flatMap((cat) =>
      cat.items.map((item) => [
        item.slug,
        dynamic(() =>
          import(`registry/sketches/${cat.slug}/${item.slug}`).then((m) => ({
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
