import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Accordion01() {
  return (
    <Accordion type="single" collapsible className="w-72">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is shadcn/ui?</AccordionTrigger>
        <AccordionContent>
          A collection of accessible, customizable components built on Radix UI
          and Tailwind CSS.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it free to use?</AccordionTrigger>
        <AccordionContent>
          Yes. Open source and free forever under the MIT license.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I use it in my projects?</AccordionTrigger>
        <AccordionContent>
          Absolutely. Copy the code into your project and make it your own.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
