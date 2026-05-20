import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function Select03() {
  return (
    <Select disabled>
      <SelectTrigger className="w-full max-w-56" disabled>
        <SelectValue placeholder="Select a status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="active">Active</SelectItem>
          <SelectItem value="draft">Draft</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="archived">Archived</SelectItem>
          <SelectItem value="deleted">Deleted</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
