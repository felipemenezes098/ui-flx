import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  CreditCardIcon,
  LifeBuoyIcon,
  SettingsIcon,
  ShieldIcon,
} from 'lucide-react'

const sections = [
  {
    value: 'account',
    icon: SettingsIcon,
    title: 'Account',
    body: 'Update your name, email, and profile photo from the account settings.',
  },
  {
    value: 'billing',
    icon: CreditCardIcon,
    title: 'Billing',
    body: 'Manage your payment method, view invoices, and change your plan.',
  },
  {
    value: 'security',
    icon: ShieldIcon,
    title: 'Security',
    body: 'Enable two-factor authentication and review active sessions.',
  },
  {
    value: 'support',
    icon: LifeBuoyIcon,
    title: 'Support',
    body: 'Reach our team any time — we typically reply within a few hours.',
  },
]

export function Accordion03() {
  return (
    <Accordion className="w-full max-w-md">
      {sections.map((section) => (
        <AccordionItem key={section.value} value={section.value}>
          <AccordionTrigger>
            <span className="flex items-center gap-2.5">
              <section.icon className="text-muted-foreground size-4" />
              {section.title}
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {section.body}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
