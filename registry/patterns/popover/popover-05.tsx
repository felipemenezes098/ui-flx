import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover'

export function Popover05() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Wide popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-96">
        <PopoverHeader>
          <PopoverTitle>Custom width</PopoverTitle>
          <PopoverDescription>
            Override the default width with a utility class on
            <span className="bg-muted mx-1 rounded px-1 py-0.5 font-mono text-xs">
              PopoverContent
            </span>
            to fit longer content or grids.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}
