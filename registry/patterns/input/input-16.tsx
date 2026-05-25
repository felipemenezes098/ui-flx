import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from '@/components/ui/input-group'

export function Input16() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="username" />
      <InputGroupAddon align="inline-end">
        <InputGroupText>@company.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  )
}
