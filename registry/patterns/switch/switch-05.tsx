import { Field, FieldLabel } from '@/components/ui/field'
import { Switch } from '@/components/ui/switch'

export function Switch05() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <Field orientation="horizontal" data-disabled>
        <FieldLabel htmlFor="switch-05-off">Disabled off</FieldLabel>
        <Switch id="switch-05-off" disabled />
      </Field>
      <Field orientation="horizontal" data-disabled>
        <FieldLabel htmlFor="switch-05-on">Disabled on</FieldLabel>
        <Switch id="switch-05-on" disabled defaultChecked />
      </Field>
    </div>
  )
}
