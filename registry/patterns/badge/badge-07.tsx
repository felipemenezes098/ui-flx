import { ArrowUpRightIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

export function Badge07() {
  return (
    <Badge variant="secondary" render={<a href="#" />}>
      What&apos;s new
      <ArrowUpRightIcon data-icon="inline-end" />
    </Badge>
  )
}
