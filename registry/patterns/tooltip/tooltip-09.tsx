import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

// Hide the arrow via [&>div[aria-hidden]] — Base UI Arrow is a rotated
// <div> sibling, not a wrapper span.
export function Tooltip09() {
  return (
    <div className="flex items-center gap-2">
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline">No arrow</Button>} />
        <TooltipContent className="[&>div[aria-hidden]]:hidden" sideOffset={10}>
          Clean tooltip without the arrow
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button>Primary</Button>} />
        <TooltipContent
          className="bg-primary text-primary-foreground [&>div[aria-hidden]]:hidden"
          sideOffset={10}
        >
          Primary tone, no arrow
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
