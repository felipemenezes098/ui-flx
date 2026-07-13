import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Can I cancel my subscription anytime?',
    a: 'Yes. Your plan stays active until the end of the current billing period, and you keep full access until then.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'We refund unused time on annual plans within 30 days of purchase. Monthly plans are non-refundable.',
  },
  {
    q: 'Can I switch plans later?',
    a: 'Absolutely — upgrade or downgrade at any time. Changes are prorated against your next invoice.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Every plan includes a 14-day free trial. No credit card is required to start.',
  },
]

export function Accordion04() {
  return (
    <div className="w-full max-w-xl">
      <h3 className="mb-4 text-lg font-semibold">Frequently asked questions</h3>
      <Accordion>
        {faqs.map((faq, index) => (
          <AccordionItem key={faq.q} value={`faq-${index}`}>
            <AccordionTrigger>{faq.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
