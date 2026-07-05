'use client'

import { MosaicGrid } from '@/components/core/mosaic/mosaic-grid'
import { illustrationCategories } from '@/lib/illustrations/illustrations-catalog'

import { IllustrationItem } from './illustration-item'

export function IllustrationsGallery() {
  return (
    <MosaicGrid>
      {illustrationCategories.flatMap((category) =>
        category.items.map((item) => (
          <IllustrationItem
            key={item.slug}
            slug={item.slug}
            name={item.name}
            description={item.description}
            categorySlug={category.slug}
            span={item.span}
            size={item.size}
          />
        )),
      )}
    </MosaicGrid>
  )
}
