import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
} from '@/components/ui/item'
import { CreditCardIcon, MailIcon, ShieldIcon } from 'lucide-react'

const items = [
  {
    icon: MailIcon,
    title: 'Email preferences',
    description: 'Choose which product emails you receive.',
  },
  {
    icon: ShieldIcon,
    title: 'Security',
    description: 'Password, sessions, and two-factor auth.',
  },
  {
    icon: CreditCardIcon,
    title: 'Billing',
    description: 'Plan, invoices, and payment methods.',
  },
]

export function Item11() {
  return (
    <ItemGroup className="w-full max-w-md">
      {items.map((item, index) => (
        <div key={item.title}>
          <Item>
            <ItemMedia variant="icon">
              <item.icon />
            </ItemMedia>
            <ItemContent>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemDescription>{item.description}</ItemDescription>
            </ItemContent>
          </Item>
          {index < items.length - 1 && <ItemSeparator />}
        </div>
      ))}
    </ItemGroup>
  )
}
