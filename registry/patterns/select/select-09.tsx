import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function Select09() {
  return (
    <Select defaultValue="design">
      <SelectTrigger className="border-border/60 bg-muted hover:bg-muted/80 w-full max-w-56 border shadow-none">
        <SelectValue placeholder="Select a team" />
      </SelectTrigger>
      <SelectContent>
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
