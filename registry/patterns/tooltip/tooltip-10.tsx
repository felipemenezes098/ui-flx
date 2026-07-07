import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function Tooltip10() {
  return (
    <div className="flex items-center gap-3">
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline">offset 4</Button>} />
        <TooltipContent sideOffset={4}>Small gap</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline">offset 12</Button>} />
        <TooltipContent sideOffset={12}>Medium gap</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline">offset 20</Button>} />
        <TooltipContent sideOffset={20}>Large gap</TooltipContent>
      </Tooltip>
    </div>
  )
}
