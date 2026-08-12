import Link from 'next/link'

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
    </Link>
  )
}
