import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

import { categories } from '@/lib/blocks/block-catalog'
import { cn } from '@/lib/utils'

function categoryLabel(slug: string) {
  return categories.find((c) => c.slug === slug)?.category ?? slug
}

interface BlockBreadcrumbProps {
  category: string
  slug: string
  title?: string
  className?: string
}

export function BlockBreadcrumb({
  category,
  slug,
  title,
  className,
}: Readonly<BlockBreadcrumbProps>) {
  const current = title ?? slug

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        'text-muted-foreground flex flex-wrap items-center gap-1 text-sm',
        className,
      )}
    >
      <Link href="/blocks" className="hover:text-foreground transition-colors">
        Blocks
      </Link>
      <ChevronRight className="size-3.5 shrink-0 opacity-50" aria-hidden />
      <Link
        href={`/blocks?category=${encodeURIComponent(category)}`}
        className="hover:text-foreground transition-colors"
      >
        {categoryLabel(category)}
      </Link>
      <ChevronRight className="size-3.5 shrink-0 opacity-50" aria-hidden />
      <span className="text-foreground font-medium" aria-current="page">
        {current}
      </span>
    </nav>
  )
}
