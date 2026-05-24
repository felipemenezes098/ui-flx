import { BellIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export function Button12() {
  return (
    <Button
      variant="outline"
      size="icon"
      className="relative"
      aria-label="Notifications"
    >
      <BellIcon />
      <Badge className="absolute -top-1.5 -right-1.5 h-4 min-w-4 rounded-full bg-emerald-500 px-1 text-white">
        3
      </Badge>
    </Button>
  )
}
