import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function Select07() {
  return (
    <Select defaultValue="pro">
      <SelectTrigger className="w-full max-w-56">
        <SelectValue placeholder="Select a plan" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="free">Free</SelectItem>
          <SelectItem value="pro">Pro</SelectItem>
          <SelectItem value="enterprise" disabled>
            Enterprise
          </SelectItem>
          <SelectItem value="custom" disabled>
            Custom (contact sales)
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
