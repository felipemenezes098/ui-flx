import { Trash2Icon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function Button25() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">
        <Trash2Icon data-icon="inline-start" />
        Delete
      </Button>
    </div>
  )
}
