import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const items = [
  {
    value: 'overview',
    title: 'Project overview',
    body: 'A summary of goals, scope, and the people involved in this project.',
  },
  {
    value: 'timeline',
    title: 'Timeline',
    body: 'Key milestones and delivery dates across the next two quarters.',
  },
  {
    value: 'resources',
    title: 'Resources',
    body: 'Links to design files, the repository, and the shared drive.',
  },
]

export function Accordion05() {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="overview"
      className="w-full max-w-md gap-3"
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="rounded-lg border px-4 not-last:border-b"
        >
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {item.body}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
