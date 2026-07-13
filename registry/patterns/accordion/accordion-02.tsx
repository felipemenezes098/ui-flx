import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function Accordion02() {
  return (
    <Accordion
      multiple
      defaultValue={['item-1', 'item-2']}
      className="w-full max-w-md"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Shipping</AccordionTrigger>
        <AccordionContent>
          Orders ship within two business days. Tracking is emailed as soon as
          your package leaves the warehouse.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Returns</AccordionTrigger>
        <AccordionContent>
          Return any item within 30 days for a full refund. Items must be unworn
          and in the original packaging.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Warranty</AccordionTrigger>
        <AccordionContent>
          Every product is covered by a one-year limited warranty against
          manufacturing defects.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
