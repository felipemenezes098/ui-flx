import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const items = [
  {
    value: 'starter',
    title: 'Starter',
    subtitle: 'For individuals getting started',
    body: 'Includes 1 project, community support, and 1 GB of storage.',
  },
  {
    value: 'pro',
    title: 'Pro',
    subtitle: 'For growing teams',
    body: 'Unlimited projects, priority support, and 100 GB of storage.',
  },
  {
    value: 'enterprise',
    title: 'Enterprise',
    subtitle: 'Advanced security and control',
    body: 'SSO, audit logs, a dedicated success manager, and a custom SLA.',
  },
]

export function Accordion16() {
  return (
    <Accordion className="w-full max-w-md">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger className="items-center">
            <span className="flex flex-col gap-0.5">
              <span>{item.title}</span>
              <span className="text-muted-foreground text-xs font-normal">
                {item.subtitle}
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {item.body}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
