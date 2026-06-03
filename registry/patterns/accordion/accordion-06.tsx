import { PlusIcon } from 'lucide-react'
import { Accordion as AccordionPrimitive } from 'radix-ui'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'How do I reset my password?',
    a: 'Open the sign-in page, choose "Forgot password", and follow the emailed link to set a new one.',
  },
  {
    q: 'Can I invite teammates?',
    a: 'Yes. Invite unlimited teammates from the Members tab — they each get their own seat.',
  },
  {
    q: 'Where is my data stored?',
    a: 'Data is encrypted at rest and stored in the region you select when you create your workspace.',
  },
]

export function Accordion06() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-md">
      {faqs.map((faq) => (
        <AccordionItem key={faq.q} value={faq.q}>
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="flex flex-1 items-center justify-between gap-4 py-4 text-left text-sm font-medium transition-all outline-none focus-visible:underline disabled:pointer-events-none disabled:opacity-50 aria-expanded:[&>svg]:rotate-180 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 aria-expanded:[&>svg>path:last-child]:rotate-90 aria-expanded:[&>svg>path:last-child]:opacity-0">
              {faq.q}
              <PlusIcon
                aria-hidden
                className="pointer-events-none size-4 shrink-0 opacity-60 transition-transform duration-200"
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionContent className="text-muted-foreground">
            {faq.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
