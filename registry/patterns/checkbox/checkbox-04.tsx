import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from '@/components/ui/field'

const notifications = [
  {
    id: 'comments',
    label: 'Comments',
    description: 'Someone comments on your posts.',
    defaultChecked: true,
  },
  {
    id: 'mentions',
    label: 'Mentions',
    description: 'Someone @mentions you in a thread.',
    defaultChecked: true,
  },
  {
    id: 'follows',
    label: 'New followers',
    description: 'Someone starts following your account.',
    defaultChecked: false,
  },
]

export function Checkbox04() {
  return (
    <FieldSet className="max-w-sm">
      <FieldLegend>Email notifications</FieldLegend>
      <FieldDescription>
        Choose what you want to be notified about.
      </FieldDescription>
      <FieldGroup data-slot="checkbox-group">
        {notifications.map((item) => (
          <Field key={item.id} orientation="horizontal">
            <Checkbox id={`checkbox-04-${item.id}`} defaultChecked={item.defaultChecked} />
            <FieldContent>
              <FieldLabel htmlFor={`checkbox-04-${item.id}`}>
                {item.label}
              </FieldLabel>
              <FieldDescription>{item.description}</FieldDescription>
            </FieldContent>
          </Field>
        ))}
      </FieldGroup>
    </FieldSet>
  )
}
