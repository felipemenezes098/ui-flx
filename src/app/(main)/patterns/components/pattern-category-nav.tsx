'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import { patternCategories } from '@/lib/patterns-catalog'

export function PatternCategoryNav() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-wrap gap-1.5">
      {patternCategories
        .toSorted((a, b) => a.name.localeCompare(b.name))
        .map((category) => {
          const isActive = pathname === `/patterns/${category.slug}`
          return (
            <Link
              key={category.slug}
              href={`/patterns/${category.slug}`}
              className={cn(
                'rounded-full px-3 py-1 text-sm font-medium',
                isActive
                  ? 'bg-foreground text-background'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground',
              )}
            >
              {category.name}
            </Link>
          )
        })}
    </nav>
  )
}
