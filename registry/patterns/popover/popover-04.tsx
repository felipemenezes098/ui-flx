import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const aligns = ['start', 'center', 'end'] as const

export function Popover04() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      {aligns.map((align) => (
        <Popover key={align}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              <span className="capitalize">Align {align}</span>
              <span className="text-muted-foreground text-xs">Open ↓</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align={align}
            className="w-32 px-3 py-2 text-sm"
          >
            <span className="font-medium capitalize">{align}</span>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  )
}
