import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from '@/components/ui/field'
import { Switch } from '@/components/ui/switch'

const addons = [
  {
    id: 'storage',
    title: 'Extra storage',
    description: '+100 GB of cloud storage.',
    price: '$4/mo',
    defaultChecked: true,
  },
  {
    id: 'support',
    title: 'Priority support',
    description: '24/7 chat with a 1h response SLA.',
    price: '$9/mo',
    defaultChecked: false,
  },
]

export function Switch10() {
  return (
    <FieldGroup className="w-full max-w-sm gap-3">
      {addons.map((addon) => (
        <FieldLabel key={addon.id} htmlFor={`switch-10-${addon.id}`}>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>{addon.title}</FieldTitle>
              <FieldDescription>{addon.description}</FieldDescription>
            </FieldContent>
            <span className="text-sm font-medium tabular-nums">
              {addon.price}
            </span>
            <Switch
              id={`switch-10-${addon.id}`}
              defaultChecked={addon.defaultChecked}
            />
          </Field>
        </FieldLabel>
      ))}
    </FieldGroup>
  )
}
