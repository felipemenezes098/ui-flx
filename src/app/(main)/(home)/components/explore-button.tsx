import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function ExploreButton() {
  return (
    <Button className="group h-9.5 rounded-xl px-4" asChild>
      <Link href="/blocks">
        Explore Blocks
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </Button>
  )
}
