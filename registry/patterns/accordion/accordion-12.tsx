import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'What payment methods do you accept?',
    a: 'All major credit cards, plus PayPal and bank transfer on annual plans.',
  },
  {
    q: 'Do you offer student discounts?',
    a: 'Yes — verified students and educators get 50% off any paid plan.',
  },
  {
    q: 'Can I export my data?',
    a: 'Export everything to JSON or CSV at any time, with no lock-in.',
  },
]

export function Accordion12() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-md">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={faq.q}
          value={`item-${index}`}
          className="border-b-0"
        >
          <AccordionTrigger className="py-3 hover:no-underline data-[state=open]:text-primary">
            {faq.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
