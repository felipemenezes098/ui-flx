'use client'

import dynamic from 'next/dynamic'
import type React from 'react'

import { compositionCategories } from '@/lib/compositions/compositions-catalog'

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
