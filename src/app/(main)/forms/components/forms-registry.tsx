'use client'

import dynamic from 'next/dynamic'
import type React from 'react'

import { formsLibraries } from '@/lib/forms/catalog'

export const formsRegistry: Record<string, React.ComponentType> =
  Object.fromEntries(
    formsLibraries.flatMap((lib) =>
      lib.categories.flatMap((cat) =>
        cat.items.map((item) => [
          item.slug,
          dynamic(() =>
            import(
              `registry/forms/${lib.slug}/${cat.slug}/${item.slug}`
            ).then((m) => ({
              default:
                m.default ??
                (Object.values(m).find(
                  (v) => typeof v === 'function',
                ) as React.ComponentType),
            })),
          ),
        ]),
      ),
    ),
  )
