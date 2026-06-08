import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from '@/components/ui/field'

export function Checkbox02() {
  return (
    <Field orientation="horizontal" className="max-w-sm">
      <Checkbox id="checkbox-02-newsletter" defaultChecked />
      <FieldContent>
        <FieldLabel htmlFor="checkbox-02-newsletter">
          Subscribe to the newsletter
        </FieldLabel>
        <FieldDescription>
          Get product updates and tips once a week. Unsubscribe anytime.
        </FieldDescription>
      </FieldContent>
    </Field>
  )
}
