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
        <TooltipTrigger asChild>
          <Button>Primary</Button>
        </TooltipTrigger>
        <TooltipContent className="bg-primary text-primary-foreground [&>span>svg]:bg-primary [&>span>svg]:fill-primary">
          Primary tone
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Secondary</Button>
        </TooltipTrigger>
        <TooltipContent className="bg-secondary text-secondary-foreground [&>span>svg]:bg-secondary [&>span>svg]:fill-secondary">
          Secondary tone
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="destructive">Delete</Button>
        </TooltipTrigger>
        <TooltipContent className="bg-destructive text-white [&>span>svg]:bg-destructive [&>span>svg]:fill-destructive">
          This cannot be undone
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
