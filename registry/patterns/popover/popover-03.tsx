import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const sides = ['top', 'right', 'bottom', 'left'] as const

export function Popover03() {
  return (
    <div className="grid w-fit grid-cols-3 grid-rows-3 gap-2">
      <div />
      <SideButton side="top" />
      <div />
      <SideButton side="left" />
      <div />
      <SideButton side="right" />
      <div />
      <SideButton side="bottom" />
      <div />
    </div>
  )
}

function SideButton({ side }: { side: (typeof sides)[number] }) {
  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button variant="outline" size="sm" className="w-24 capitalize">
            {side}
          </Button>
        }
      />
      <PopoverContent side={side} className="w-auto px-3 py-2 text-sm">
        Side <span className="font-medium">{side}</span>
      </PopoverContent>
    </Popover>
  )
}
