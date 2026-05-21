import { Loader2Icon } from 'lucide-react'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui/input-group'

export function Input06() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="Searching..." />
      <InputGroupAddon align="inline-end">
        <Loader2Icon className="text-muted-foreground size-4 animate-spin" />
      </InputGroupAddon>
    </InputGroup>
  )
}
