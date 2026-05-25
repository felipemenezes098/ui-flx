import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'

export function Input11() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <Field>
        <FieldLabel htmlFor="display-name-input">Display name</FieldLabel>
        <Input
          id="display-name-input"
          placeholder="Enter your name"
          defaultValue="shadcn"
        />
        <FieldDescription>
          Shown on your profile and in comments you post.
        </FieldDescription>
      </Field>
    </FieldGroup>
  )
}
