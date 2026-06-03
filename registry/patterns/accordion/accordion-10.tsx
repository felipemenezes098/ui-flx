import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function Accordion10() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Personal information</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          Your name, email, and contact details.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger disabled>
          Payout settings (verify email first)
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          Add a bank account to receive payouts.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Preferences</AccordionTrigger>
        <AccordionContent className="text-muted-foreground">
          Language, theme, and notification defaults.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
