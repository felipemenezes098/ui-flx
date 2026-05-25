import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function Select10() {
  return (
    <div className="flex w-full max-w-56 flex-col gap-2">
      <Label htmlFor="team-select">Team</Label>
      <Select defaultValue="design">
        <SelectTrigger id="team-select" className="w-full">
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
    </div>
  )
}
