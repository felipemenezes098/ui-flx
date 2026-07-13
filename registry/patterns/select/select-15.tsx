import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function Select15() {
  return (
    <Select defaultValue="design">
      <SelectTrigger className="w-full max-w-56">
        <SelectValue placeholder="Select a team" />
      </SelectTrigger>
      <SelectContent alignItemWithTrigger={false} sideOffset={4}>
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
