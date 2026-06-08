import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field'
import { Switch } from '@/components/ui/switch'

const settings = [
  {
    id: 'marketing',
    label: 'Marketing emails',
    description: 'Product updates, tips, and announcements.',
    defaultChecked: true,
  },
  {
    id: 'security',
    label: 'Security alerts',
    description: 'Sign-in notifications and password changes.',
    defaultChecked: true,
  },
  {
    id: 'digest',
    label: 'Weekly digest',
    description: 'A summary of your team activity every Monday.',
    defaultChecked: false,
  },
]

export function Switch08() {
  return (
    <FieldSet className="max-w-sm">
      <FieldLegend>Notifications</FieldLegend>
      <FieldDescription>Choose how we reach you.</FieldDescription>
      <FieldGroup className="gap-4">
        {settings.map((item) => (
          <Field key={item.id} orientation="horizontal">
            <FieldContent>
              <FieldLabel htmlFor={`switch-08-${item.id}`}>
                {item.label}
              </FieldLabel>
              <FieldDescription>{item.description}</FieldDescription>
            </FieldContent>
            <Switch
              id={`switch-08-${item.id}`}
              defaultChecked={item.defaultChecked}
            />
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  )
}
