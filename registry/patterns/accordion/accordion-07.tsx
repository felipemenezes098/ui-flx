import { Accordion as AccordionPrimitive } from 'radix-ui'
import { ChevronRightIcon } from 'lucide-react'

const items = [
  {
    value: 'getting-started',
    title: 'Getting started',
    body: 'Install the CLI, authenticate, and scaffold your first project in under a minute.',
  },
  {
    value: 'configuration',
    title: 'Configuration',
    body: 'Tune build targets, environment variables, and output paths from a single config file.',
  },
  {
    value: 'deployment',
    title: 'Deployment',
    body: 'Ship to preview and production with atomic, instantly reversible deploys.',
  },
]

export function Accordion07() {
  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      defaultValue="getting-started"
      className="flex w-full max-w-md flex-col"
    >
      {items.map((item) => (
        <AccordionPrimitive.Item
          key={item.value}
          value={item.value}
          className="not-last:border-b"
        >
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="group/trigger flex flex-1 items-center gap-2 py-4 text-left text-sm font-medium outline-none focus-visible:underline">
              <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground transition-transform group-aria-expanded/trigger:rotate-90" />
              {item.title}
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up">
            <p className="h-(--radix-accordion-content-height) pb-4 pl-6 text-muted-foreground">
              {item.body}
            </p>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  )
}
