import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'

export function Select15() {
  return (
    <Select defaultValue="design">
      <SelectTrigger className="w-full max-w-56">
        <SelectValue placeholder="Select a team" />
      </SelectTrigger>
      <SelectContent
        position="popper"
        sideOffset={4}
        className={cn(
          'origin-(--radix-select-content-transform-origin) duration-200 ease-out',
          'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          'data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95',
          'data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95',
        )}
      >
        <SelectGroup>
          <SelectItem value="design">Design</SelectItem>
          <SelectItem value="engineering">Engineering</SelectItem>
          <SelectItem value="marketing">Marketing</SelectItem>
          <SelectItem value="support">Support</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
