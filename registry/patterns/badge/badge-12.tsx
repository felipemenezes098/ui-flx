import { CheckIcon, StarIcon, ZapIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

export function Badge12() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Badge className="size-5 rounded-full p-0">
        <CheckIcon />
      </Badge>
      <Badge variant="secondary" className="size-5 rounded-full p-0">
        <StarIcon />
      </Badge>
      <Badge variant="outline" className="size-5 rounded-full p-0">
        <ZapIcon />
      </Badge>
    </div>
  )
}
