import { InfoIcon } from 'lucide-react'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export function Input09() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="Enter password" type="password" />
      <InputGroupAddon align="inline-end">
        <Popover>
          <PopoverTrigger asChild>
            <InputGroupButton aria-label="Password requirements" size="icon-xs">
              <InfoIcon />
            </InputGroupButton>
          </PopoverTrigger>
          <PopoverContent align="end" className="w-64">
            <p className="font-medium">Password requirements</p>
            <ul className="text-muted-foreground list-inside list-disc space-y-1 text-sm">
              <li>At least 8 characters</li>
              <li>One uppercase letter</li>
              <li>One number or symbol</li>
            </ul>
          </PopoverContent>
        </Popover>
      </InputGroupAddon>
    </InputGroup>
  )
}
