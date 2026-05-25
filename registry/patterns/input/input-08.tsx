import { CircleHelpIcon } from 'lucide-react'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function Input08() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="API key" />
      <InputGroupAddon align="inline-end">
        <Tooltip delayDuration={300}>
          <TooltipTrigger asChild>
            <InputGroupButton aria-label="API key help" size="icon-xs">
              <CircleHelpIcon />
            </InputGroupButton>
          </TooltipTrigger>
          <TooltipContent side="top">
            Find your API key in project settings under Integrations.
          </TooltipContent>
        </Tooltip>
      </InputGroupAddon>
    </InputGroup>
  )
}
