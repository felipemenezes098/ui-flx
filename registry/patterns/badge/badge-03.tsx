import { BadgeCheckIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

export function Badge03() {
  return (
    <Badge variant="secondary">
      <BadgeCheckIcon data-icon="inline-start" />
      Verified
    </Badge>
  )
}
