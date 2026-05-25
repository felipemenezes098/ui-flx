import { RefreshCwIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Button14() {
  return (
    <Button variant="outline" className="group/refresh">
      <RefreshCwIcon
        data-icon="inline-start"
        className="transition-transform duration-500 group-hover/refresh:rotate-180"
      />
      Refresh
    </Button>
  )
}
