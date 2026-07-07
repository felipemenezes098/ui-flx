'use client'

import Link from 'next/link'
import type { ComponentType } from 'react'
import { useState } from 'react'

import {
  ConceptGalleryCard,
  ConceptGalleryCardBadge,
  ConceptGalleryCardFooter,
  ConceptGalleryCardMedia,
  ConceptGalleryCardTitle,
} from '@/components/core/gallery/concept-gallery-card'
import {
  GalleryFade,
  GalleryFadeFooter,
} from '@/components/core/gallery/gallery-fade'
import {
  GalleryGridLink,
  GalleryGridUniform,
} from '@/components/core/gallery/gallery-grid'
import { Button } from '@/components/ui/button'
import { FormsConcept } from '@/lib/patterns/pattern-concepts'
import { patternCategories } from '@/lib/patterns/patterns-catalog'

type TeaserItem = {
  slug: string
  name: string
  href: string
  preview: ComponentType
  hasNew?: boolean
}

const formsTeaserItem: TeaserItem = {
  slug: 'forms',
  name: 'Forms',
  href: '/forms/react-hook-form',
  preview: FormsConcept,
  hasNew: true,
}

export function PatternTeaser() {
  const [isShown, setIsShown] = useState(false)
  const sorted: TeaserItem[] = [
    ...patternCategories.map((cat) => ({
      slug: cat.slug,
      name: cat.name,
      href: `/patterns/${cat.slug}`,
      preview: cat.preview,
      hasNew: cat.hasNew,
    })),
    formsTeaserItem,
  ].sort((a, b) => a.name.localeCompare(b.name))
  const visibleItems = isShown ? sorted : sorted.slice(0, 8)

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-baseline gap-3">
          <h2 className="text-foreground text-lg font-semibold tracking-tight">
            Patterns
          </h2>
          <span className="text-muted-foreground text-sm">
            {sorted.length} components
          </span>
        </div>
        <Button
          render={<Link href="/patterns" />}
          nativeButton={false}
          variant="link"
          size="sm"
          className="bg-background"
        >
          View all
        </Button>
      </div>

      <GalleryFade>
        <GalleryGridUniform>
          {visibleItems.map((item) => {
            const Concept = item.preview
            return (
              <GalleryGridLink key={item.slug} href={item.href}>
                <ConceptGalleryCard>
                  <ConceptGalleryCardMedia className="aspect-square">
                    {item.hasNew && <ConceptGalleryCardBadge />}
                    <Concept />
                  </ConceptGalleryCardMedia>
                  <ConceptGalleryCardFooter>
                    <ConceptGalleryCardTitle>
                      {item.name}
                    </ConceptGalleryCardTitle>
                  </ConceptGalleryCardFooter>
                </ConceptGalleryCard>
              </GalleryGridLink>
            )
          })}
        </GalleryGridUniform>
        {!isShown && (
          <GalleryFadeFooter>
            <Button
              onClick={() => setIsShown(true)}
              variant="outline"
              size="sm"
              className="bg-background dark:bg-background hover:dark:bg-muted"
            >
              Show all patterns
            </Button>
          </GalleryFadeFooter>
        )}
      </GalleryFade>
    </div>
  )
}
