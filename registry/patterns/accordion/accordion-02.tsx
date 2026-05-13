import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'How do I get started?',
    answer:
      'Install the CLI, pick your components, and paste them into your project.',
  },
  {
    question: 'Do I need to install all components?',
    answer:
      'No. Each component is standalone — add only what you need, nothing more.',
  },
  {
    question: 'Can I customize the styles?',
    answer:
      'Yes. Every component is plain code in your repo. Change anything you like.',
  },
  {
    question: 'Does it support dark mode?',
    answer:
      'Yes. All components use CSS variables and respond to your theme automatically.',
  },
]

export default function Accordion02() {
  return (
    <div className="w-80">
      <p className="mb-4 text-sm font-medium">Frequently asked questions</p>
      <Accordion type="single" collapsible>
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`}>
            <AccordionTrigger className="text-sm">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
