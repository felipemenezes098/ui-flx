import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

// Trick: applying the `dark` class to TooltipContent flips its local CSS
// variables to the dark-scheme values, so `bg-foreground` (default tooltip
// background) resolves to a light color — and the arrow follows automatically
// because it also reads `--foreground`. In dark mode this is a no-op.
export function Tooltip07() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
      <TooltipContent className="dark">
        Light tooltip via dark class
      </TooltipContent>
    </Tooltip>
  )
}
