import { Field, FieldLabel } from '@/components/ui/field'
import { Switch } from '@/components/ui/switch'

export function Switch02() {
  return (
    <Field orientation="horizontal" className="w-full max-w-sm">
      <FieldLabel htmlFor="switch-02">Airplane mode</FieldLabel>
      <Switch id="switch-02" />
    </Field>
  )
}
