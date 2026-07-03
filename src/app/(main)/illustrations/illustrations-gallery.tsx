'use client'

import { illustrationCategories } from '@/lib/illustrations/illustrations-catalog'
import type { IllustrationSpan } from '@/lib/illustrations/illustration-types'

import { IllustrationItem } from './illustration-item'


const spanClass: Record<IllustrationSpan, string> = {
  1: 'md:col-span-1',
  2: 'md:col-span-2',
  3: 'md:col-span-3',
  4: 'md:col-span-4',
}

export function IllustrationsGallery() {
  return (
    <div className="border-border/60 relative grid w-full grid-cols-1 overflow-hidden rounded-xl md:grid-cols-4 after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:border after:border-border/60">
      {illustrationCategories.flatMap((category) =>
        category.items.map((item) => (
          <IllustrationItem
            key={item.slug}
            slug={item.slug}
            name={item.name}
            description={item.description}
            categorySlug={category.slug}
            size={item.size}
            className={spanClass[item.span ?? 1]}
          />
        )),
      )}
    </div>
  )
}
