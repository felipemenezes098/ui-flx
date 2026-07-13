import { InfoIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function Tooltip06() {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button variant="outline" size="icon" aria-label="Plan info">
            <InfoIcon />
          </Button>
        }
      />
      <TooltipContent className="max-w-xs flex-col items-start gap-1 px-3 py-2 text-left">
        <p className="text-sm font-medium">Pro plan</p>
        <p className="text-background/70 text-xs leading-snug">
          Unlimited projects, priority support, and access to premium blocks.
        </p>
      </TooltipContent>
    </Tooltip>
  )
}
