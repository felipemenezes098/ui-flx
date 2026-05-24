import { Loader2Icon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Button08() {
  return (
    <Button>
      <Loader2Icon data-icon="inline-start" className="animate-spin" />
      Saving
    </Button>
  )
}
