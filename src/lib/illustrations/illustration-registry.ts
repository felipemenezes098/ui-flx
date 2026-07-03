'use client'

import dynamic from 'next/dynamic'
import type React from 'react'

import { illustrationCategories } from '@/lib/illustrations/illustrations-catalog'

/**
 * Slug -> illustration component, lazily imported. Lives in lib so any surface
 * (gallery) can resolve an illustration without reaching into a route's
 * component folder.
 */
export const illustrationRegistry: Record<string, React.ComponentType> =
  Object.fromEntries(
    illustrationCategories.flatMap((cat) =>
      cat.items.map((item) => [
        item.slug,
        dynamic(() =>
          import(`registry/illustrations/${cat.slug}/${item.slug}`).then(
            (m) => ({
              default:
                m.default ??
                (Object.values(m).find(
                  (v) => typeof v === 'function',
                ) as React.ComponentType),
            }),
          ),
        ),
      ]),
    ),
  )
