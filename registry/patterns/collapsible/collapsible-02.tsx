import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { ChevronDownIcon } from 'lucide-react'

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
]

export function Collapsible02() {
  return (
    <div className="w-full max-w-md divide-y rounded-lg border">
      {faqs.map((faq) => (
        <Collapsible key={faq.q} className="px-4">
          <CollapsibleTrigger className="group flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium">
            {faq.q}
            <ChevronDownIcon className="text-muted-foreground size-4 shrink-0 transition-transform group-data-panel-open:rotate-180" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            <p className="text-muted-foreground pb-4 text-sm leading-relaxed">
              {faq.a}
            </p>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  )
}
