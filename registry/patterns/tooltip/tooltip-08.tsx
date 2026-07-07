import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

// Override arrow color with [&>span>svg] — radix wraps the arrow svg in a
// positioning <span>, so a direct `>svg` selector misses it.
export function Tooltip08() {
  return (
    <div className="flex items-center gap-2">
      <Tooltip>
        <TooltipTrigger render={<Button>Primary</Button>} />
        <TooltipContent className="bg-primary text-primary-foreground [&>span>svg]:bg-primary [&>span>svg]:fill-primary">
          Primary tone
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline">Secondary</Button>} />
        <TooltipContent className="bg-secondary text-secondary-foreground [&>span>svg]:bg-secondary [&>span>svg]:fill-secondary">
          Secondary tone
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          render={<Button variant="destructive">Delete</Button>}
        />
        <TooltipContent className="bg-destructive [&>span>svg]:bg-destructive [&>span>svg]:fill-destructive text-white">
          This cannot be undone
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
