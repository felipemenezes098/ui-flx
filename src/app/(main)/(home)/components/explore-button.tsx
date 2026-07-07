import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function ExploreButton() {
  return (
    <Button
      className="group h-9.5 rounded-xl px-4"
      render={<Link href="/patterns" />}
      nativeButton={false}
    >
      Explore Patterns
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
    </Button>
  )
}
