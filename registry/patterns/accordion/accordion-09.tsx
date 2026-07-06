import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from 'lucide-react'

export function Accordion09() {
  return (
    <Accordion defaultValue={['features']} className="w-full max-w-md">
      <AccordionItem value="features">
        <AccordionTrigger>What is included?</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          <p>Every plan ships with the core toolkit:</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Unlimited projects and members</li>
            <li>Role-based access control</li>
            <li>Audit logs and exports</li>
          </ul>
          <p className="mt-4">
            Read the full{' '}
            <a href="#" className="text-foreground">
              feature comparison
            </a>{' '}
            for details.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="contact">
        <AccordionTrigger>Need a custom plan?</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          <p>Talk to our team about volume pricing and enterprise features.</p>
          <Button size="sm" className="mt-1">
            Contact sales
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
