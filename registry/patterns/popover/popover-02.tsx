import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover'

export function Popover02() {
  return (
    <Popover>
      <PopoverTrigger
        render={<Button variant="outline">View details</Button>}
      />
      <PopoverContent>
        <PopoverHeader>
          <PopoverTitle>About this feature</PopoverTitle>
          <PopoverDescription>
            Popovers display rich content tied to a trigger. Use them for
            previews, settings, or quick actions.
          </PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  )
}
