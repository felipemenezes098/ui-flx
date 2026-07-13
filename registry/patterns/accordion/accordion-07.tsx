import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion'
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
      defaultValue={['getting-started']}
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
              <ChevronRightIcon className="text-muted-foreground size-4 shrink-0 transition-transform group-aria-expanded/trigger:rotate-90" />
              {item.title}
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Panel className="data-open:animate-accordion-down data-closed:animate-accordion-up overflow-hidden text-sm">
            <p className="text-muted-foreground h-(--accordion-panel-height) pb-4 pl-6 data-ending-style:h-0 data-starting-style:h-0">
              {item.body}
            </p>
          </AccordionPrimitive.Panel>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  )
}
