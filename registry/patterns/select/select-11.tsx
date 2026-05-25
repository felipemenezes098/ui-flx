import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function Select11() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="department-select">Department</FieldLabel>
        <Select defaultValue="engineering">
          <SelectTrigger id="department-select" className="w-full">
            <SelectValue placeholder="Select department" />
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
        <FieldDescription>
          Choose the team that will review your request.
        </FieldDescription>
      </Field>
    </FieldGroup>
  )
}
