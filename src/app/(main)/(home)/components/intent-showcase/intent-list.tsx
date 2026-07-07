import Link from 'next/link'

import {
  ConceptGalleryCard,
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
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { allIntents } from '@/lib/intents/intent-catalog'

export function IntentList() {
  const items = allIntents.filter((i) => i.manifest).slice(0, 8)

  return (
    <GalleryFade>
      <GalleryGridUniform>
        {items.map((intent) => {
          const Concept = intent.manifest?.concept
          if (!Concept) return null

          return (
            <GalleryGridLink key={intent.slug} href={`/intents/${intent.slug}`}>
              <ConceptGalleryCard>
                <ConceptGalleryCardMedia className="aspect-square">
                  <Concept />
                </ConceptGalleryCardMedia>
                <ConceptGalleryCardFooter>
                  <ConceptGalleryCardTitle>
                    {intent.name}
                  </ConceptGalleryCardTitle>
                </ConceptGalleryCardFooter>
              </ConceptGalleryCard>
            </GalleryGridLink>
          )
        })}
      </GalleryGridUniform>

      <GalleryFadeFooter>
        <Link
          href="/intents"
          className={cn(
            buttonVariants({
              variant: 'outline',
              size: 'sm',
              className: 'bg-background dark:bg-background hover:dark:bg-muted',
            }),
          )}
        >
          View all
        </Link>
      </GalleryFadeFooter>
    </GalleryFade>
  )
}
