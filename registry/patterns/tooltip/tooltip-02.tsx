import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function Tooltip02() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-3">
      <div className="col-start-2 row-start-1 flex justify-center">
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline">Top</Button>} />
          <TooltipContent side="top">Tooltip on top</TooltipContent>
        </Tooltip>
      </div>
      <div className="col-start-1 row-start-2 flex justify-start">
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline">Left</Button>} />
          <TooltipContent side="left">Tooltip on left</TooltipContent>
        </Tooltip>
      </div>
      <div className="col-start-3 row-start-2 flex justify-end">
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline">Right</Button>} />
          <TooltipContent side="right">Tooltip on right</TooltipContent>
        </Tooltip>
      </div>
      <div className="col-start-2 row-start-3 flex justify-center">
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline">Bottom</Button>} />
          <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}
