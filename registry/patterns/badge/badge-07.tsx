import { ArrowUpRightIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

export function Badge07() {
  return (
    <Badge asChild variant="secondary">
      <a href="#">
        What&apos;s new
        <ArrowUpRightIcon data-icon="inline-end" />
      </a>
    </Badge>
  )
}
