import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function Tooltip05() {
  return (
    <div className="flex items-center gap-3">
      <TooltipProvider delay={0}>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline">Instant</Button>} />
          <TooltipContent>Opens with no delay</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delay={500}>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline">500ms</Button>} />
          <TooltipContent>Opens after 500ms hover</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delay={1200}>
        <Tooltip>
          <TooltipTrigger render={<Button variant="outline">1.2s</Button>} />
          <TooltipContent>Opens after 1.2s hover</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
