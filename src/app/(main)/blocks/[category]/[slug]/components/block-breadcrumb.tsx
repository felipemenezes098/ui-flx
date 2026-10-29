import { ChevronRight } from 'lucide-react'
import { HoverPrefetchLink } from '@/components/core/hover-prefetch-link'

import { categories } from '@/lib/blocks/block-catalog'
import { cn } from '@/lib/utils'

function categoryLabel(slug: string) {
  return categories.find((c) => c.slug === slug)?.category ?? slug
}

interface BlockBreadcrumbProps {
  category: string
  slug?: string
  title?: string
  className?: string
}

export function BlockBreadcrumb({
  category,
  title,
  className,
}: Readonly<BlockBreadcrumbProps>) {
  const current = title

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        'text-muted-foreground flex flex-wrap items-center gap-1 text-sm',
        className,
      )}
    >
      <HoverPrefetchLink
        href="/blocks"
        className="hover:text-foreground transition-colors"
      >
        Blocks
      </HoverPrefetchLink>
      <ChevronRight className="size-3.5 shrink-0 opacity-50" aria-hidden />
      {current ? (
        <>
          <HoverPrefetchLink
            href={`/blocks/${category}`}
            className="hover:text-foreground transition-colors"
          >
            {categoryLabel(category)}
          </HoverPrefetchLink>
          <ChevronRight className="size-3.5 shrink-0 opacity-50" aria-hidden />
          <span className="text-foreground font-medium" aria-current="page">
            {current}
          </span>
        </>
      ) : (
        <span className="text-foreground font-medium" aria-current="page">
          {categoryLabel(category)}
        </span>
      )}
    </nav>
  )
}
