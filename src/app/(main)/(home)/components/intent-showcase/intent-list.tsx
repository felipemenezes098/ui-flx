import Link from 'next/link'

import {
  CategoryPreviewCard,
  CategoryPreviewCardFooter,
  CategoryPreviewCardPreview,
  CategoryPreviewCardTitle,
} from '@/components/core/category-preview-card'
import { Button } from '@/components/ui/button'
import { allIntents } from '@/lib/intents/intent-catalog'

export function IntentList() {
  const items = allIntents.filter((i) => i.manifest).slice(0, 8)

  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4">
        {items.map((intent) => {
          const Concept = intent.manifest?.concept
          if (!Concept) return null

          return (
            <Link
              key={intent.slug}
              href={`/intents/${intent.slug}`}
              className="group"
            >
              <CategoryPreviewCard>
                <CategoryPreviewCardPreview className="aspect-square">
                  <Concept />
                </CategoryPreviewCardPreview>
                <CategoryPreviewCardFooter>
                  <CategoryPreviewCardTitle>
                    {intent.name}
                  </CategoryPreviewCardTitle>
                </CategoryPreviewCardFooter>
              </CategoryPreviewCard>
            </Link>
          )
        })}
      </div>

      <div className="from-background absolute inset-x-0 -bottom-10 flex h-40 items-end justify-center bg-gradient-to-t from-30% to-transparent pb-10">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="bg-background dark:bg-background hover:dark:bg-muted"
        >
          <Link href="/intents">View all</Link>
        </Button>
      </div>
    </div>
  )
}
