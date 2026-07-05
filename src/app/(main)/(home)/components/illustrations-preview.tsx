'use client'

import Link from 'next/link'

import { PatternRenderer } from '@/components/core/patterns/pattern-renderer'
import {
  GalleryFade,
  GalleryFadeFooter,
} from '@/components/core/gallery/gallery-fade'
import type { MosaicCellSize } from '@/components/core/mosaic/mosaic-cell'
import { MosaicSlot } from '@/components/core/mosaic/mosaic-cell'
import { MosaicGrid } from '@/components/core/mosaic/mosaic-grid'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { allIllustrations } from '@/lib/illustrations/illustrations-catalog'
import { illustrationRegistry } from '@/lib/illustrations/illustration-registry'
import { cn } from '@/lib/utils'

const mediaMinHeightBySize: Record<MosaicCellSize, string> = {
  md: 'min-h-48',
  lg: 'min-h-64',
}

export function IllustrationsPreview() {
  return (
    <GalleryFade>
      <MosaicGrid variant="cards">
        {allIllustrations.map((item) => {
          const size = item.size ?? 'md'

          return (
            <MosaicSlot key={item.slug} span={item.span ?? 1}>
              <Link href="/illustrations" className="block h-full">
                <Card
                  size="sm"
                  className="hover:bg-card/30 dark:bg-background dark:hover:bg-card/30 h-full gap-0 py-0"
                >
                  <CardContent
                    className={cn(
                      'flex flex-1 items-center justify-center p-4',
                      mediaMinHeightBySize[size],
                    )}
                  >
                    <PatternRenderer
                      name={item.slug}
                      registry={illustrationRegistry}
                    />
                  </CardContent>
                </Card>
              </Link>
            </MosaicSlot>
          )
        })}
      </MosaicGrid>

      <GalleryFadeFooter className="h-52 h-60 pb-15">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="bg-background dark:bg-background hover:dark:bg-muted"
        >
          <Link href="/illustrations">View all</Link>
        </Button>
      </GalleryFadeFooter>
    </GalleryFade>
  )
}
