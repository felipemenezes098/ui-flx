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
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function Input08() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="API key" />
      <InputGroupAddon align="inline-end">
        <TooltipProvider delay={300}>
          <Tooltip>
            <TooltipTrigger
              render={
                <InputGroupButton aria-label="API key help" size="icon-xs">
                  <CircleHelpIcon />
                </InputGroupButton>
              }
            />
            <TooltipContent side="top">
              Find your API key in project settings under Integrations.
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </InputGroupAddon>
    </InputGroup>
  )
}
