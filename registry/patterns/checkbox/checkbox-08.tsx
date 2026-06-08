import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from '@/components/ui/field'

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
  {
    id: 'analytics',
    title: 'Advanced analytics',
    description: 'Funnels, retention, and custom reports.',
    price: '$12/mo',
    defaultChecked: false,
  },
]

export function Checkbox08() {
  return (
    <FieldGroup className="w-full max-w-sm gap-3">
      {addons.map((addon) => (
        <FieldLabel key={addon.id} htmlFor={`checkbox-08-${addon.id}`}>
          <Field orientation="horizontal">
            <FieldContent>
              <FieldTitle>{addon.title}</FieldTitle>
              <FieldDescription>{addon.description}</FieldDescription>
            </FieldContent>
            <span className="text-sm font-medium tabular-nums">
              {addon.price}
            </span>
            <Checkbox
              id={`checkbox-08-${addon.id}`}
              defaultChecked={addon.defaultChecked}
            />
          </Field>
        </FieldLabel>
      ))}
    </FieldGroup>
  )
}
