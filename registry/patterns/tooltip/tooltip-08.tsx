import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

// Override arrow color via [&>div[aria-hidden]] — Base UI Arrow is a rotated
// <div> sibling, not an svg inside a positioning span.
export function Tooltip08() {
  return (
    <div className="flex items-center gap-2">
      <Tooltip>
        <TooltipTrigger render={<Button>Primary</Button>} />
        <TooltipContent className="bg-primary text-primary-foreground [&>div[aria-hidden]]:bg-primary">
          Primary tone
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline">Secondary</Button>} />
        <TooltipContent className="bg-secondary text-secondary-foreground [&>div[aria-hidden]]:bg-secondary">
          Secondary tone
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          render={<Button variant="destructive">Delete</Button>}
        />
        <TooltipContent className="bg-destructive text-white [&>div[aria-hidden]]:bg-destructive">
          This cannot be undone
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
