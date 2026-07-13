import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export function Tooltip03() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button>Save</Button>} />
      <TooltipContent>
        Save changes
        <kbd
          data-slot="kbd"
          className="bg-background/20 text-background ml-1 inline-flex h-5 items-center gap-0.5 rounded px-1.5 font-mono text-[10px] font-medium"
        >
          ⌘S
        </kbd>
      </TooltipContent>
    </Tooltip>
  )
}
