import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function Tooltip05() {
  return (
    <div className="flex items-center gap-3">
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <Button variant="outline">Instant</Button>
        </TooltipTrigger>
        <TooltipContent>Opens with no delay</TooltipContent>
      </Tooltip>
      <Tooltip delayDuration={500}>
        <TooltipTrigger asChild>
          <Button variant="outline">500ms</Button>
        </TooltipTrigger>
        <TooltipContent>Opens after 500ms hover</TooltipContent>
      </Tooltip>
      <Tooltip delayDuration={1200}>
        <TooltipTrigger asChild>
          <Button variant="outline">1.2s</Button>
        </TooltipTrigger>
        <TooltipContent>Opens after 1.2s hover</TooltipContent>
      </Tooltip>
    </div>
  )
}
