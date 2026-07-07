import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

// Hide the arrow by collapsing its wrapper span. Useful for flat tooltips
// or chip-style hints where the pointer would feel noisy.
export function Tooltip09() {
  return (
    <div className="flex items-center gap-2">
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline">No arrow</Button>} />
        <TooltipContent className="[&>span]:hidden" sideOffset={10}>
          Clean tooltip without the arrow
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button>Primary</Button>} />
        <TooltipContent
          className="bg-primary text-primary-foreground [&>span]:hidden"
          sideOffset={10}
        >
          Primary tone, no arrow
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
