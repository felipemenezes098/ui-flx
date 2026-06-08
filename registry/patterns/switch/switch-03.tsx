import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
} from '@/components/ui/field'
import { Switch } from '@/components/ui/switch'

export function Switch03() {
  return (
    <Field orientation="horizontal" className="w-full max-w-sm">
      <FieldContent>
        <FieldLabel htmlFor="switch-03">Share usage data</FieldLabel>
        <FieldDescription>
          Help us improve the product with anonymous analytics.
        </FieldDescription>
      </FieldContent>
      <Switch id="switch-03" defaultChecked />
    </Field>
  )
}
