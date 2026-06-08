import { Checkbox } from '@/components/ui/checkbox'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from '@/components/ui/field'
import { CreditCardIcon } from 'lucide-react'

const cards = [
  {
    id: 'visa',
    brand: 'Visa',
    last4: '4242',
    expires: '08/27',
    defaultChecked: true,
  },
  {
    id: 'mastercard',
    brand: 'Mastercard',
    last4: '8210',
    expires: '11/26',
    defaultChecked: false,
  },
  {
    id: 'amex',
    brand: 'Amex',
    last4: '0005',
    expires: '03/25',
    defaultChecked: false,
  },
]

export function Checkbox09() {
  return (
    <FieldGroup className="w-full max-w-sm gap-3">
      {cards.map((card) => (
        <FieldLabel key={card.id} htmlFor={`checkbox-09-${card.id}`}>
          <Field orientation="horizontal">
            <div className="bg-muted flex size-9 shrink-0 items-center justify-center rounded-md border">
              <CreditCardIcon className="size-4" />
            </div>
            <FieldContent>
              <FieldTitle>
                {card.brand} •••• {card.last4}
              </FieldTitle>
              <FieldDescription>Expires {card.expires}</FieldDescription>
            </FieldContent>
            <Checkbox
              id={`checkbox-09-${card.id}`}
              defaultChecked={card.defaultChecked}
            />
          </Field>
        </FieldLabel>
      ))}
    </FieldGroup>
  )
}
