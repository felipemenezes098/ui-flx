import { PlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Button04() {
  return (
    <Button variant="outline">
      <PlusIcon data-icon="inline-start" />
      New project
    </Button>
  )
}
