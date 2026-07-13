import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const items = [
  {
    value: 'item-1',
    title: 'What makes a good filled accordion?',
    body: 'A solid surface gives each row weight and a clear, tappable target — handy on dense settings pages.',
  },
  {
    value: 'item-2',
    title: 'When should I use it?',
    body: 'Reach for filled rows when they need more emphasis than a plain underline divider provides.',
  },
  {
    value: 'item-3',
    title: 'Does it stay accessible?',
    body: 'Yes. It is the same component underneath — only the surface styling changes.',
  },
]

export function Accordion13() {
  return (
    <Accordion className="w-full max-w-md gap-2">
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="bg-muted/50 overflow-hidden rounded-lg border-b-0!"
        >
          <AccordionTrigger className="px-4 py-3 hover:no-underline">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground px-4 pt-0">
            {item.body}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
