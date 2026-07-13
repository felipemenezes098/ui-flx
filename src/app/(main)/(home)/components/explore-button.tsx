import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function ExploreButton() {
  return (
    <Link
      href="/patterns"
      className={cn(
        buttonVariants({ className: 'group h-9.5 rounded-xl px-4' }),
      )}
    >
      Explore Patterns
      <ArrowRight
        data-icon="inline-end"
        className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
      />
    </Link>
  )
}
