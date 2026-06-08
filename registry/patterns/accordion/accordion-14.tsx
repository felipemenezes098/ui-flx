'use client'

import { useState } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

const items = [
  {
    value: 'item-1',
    title: 'Step 1 — Create your account',
    body: 'Sign up with your email and verify it to unlock your workspace.',
  },
  {
    value: 'item-2',
    title: 'Step 2 — Invite your team',
    body: 'Add teammates by email and assign them roles.',
  },
  {
    value: 'item-3',
    title: 'Step 3 — Connect your tools',
    body: 'Link the integrations your team already uses.',
  },
]

const allValues = items.map((item) => item.value)

export function Accordion14() {
  const [open, setOpen] = useState<string[]>([allValues[0]])

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex justify-end gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setOpen(allValues)}
          disabled={open.length === allValues.length}
        >
          Expand all
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setOpen([])}
          disabled={open.length === 0}
        >
          Collapse all
        </Button>
      </div>
      <Accordion type="multiple" value={open} onValueChange={setOpen}>
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.body}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
