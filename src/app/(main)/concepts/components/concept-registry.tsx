'use client'

import dynamic from 'next/dynamic'
import type React from 'react'

import { conceptCategories } from '@/lib/concepts/concepts-catalog'

export const conceptRegistry: Record<string, React.ComponentType> =
  Object.fromEntries(
    conceptCategories.flatMap((cat) =>
      cat.items.map((item) => [
        item.slug,
        dynamic(() =>
          import(`registry/concepts/${cat.slug}/${item.slug}`).then((m) => ({
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
