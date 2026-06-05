import { AccordionConcept } from '@/lib/patterns/pattern-concepts'
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const accordionCategory: PatternCategory = {
  slug: 'accordion',
  name: 'Accordion',
  description: 'Stacked sections that expand and collapse to show or hide their content.',
  preview: AccordionConcept,
  items: [
    { slug: 'accordion-01', name: 'Basic', description: 'Only one section open at a time, type="single" collapsible. The default behavior.' },
    { slug: 'accordion-02', name: 'Multiple', description: 'type="multiple" keeps several sections open at once.' },
    { slug: 'accordion-03', name: 'With icons', description: 'Leading icon beside each trigger label.' },
    { slug: 'accordion-04', name: 'FAQ', description: 'A titled question-and-answer list.' },
    { slug: 'accordion-05', name: 'Separated cards', description: 'Each item is a bordered card with spacing between them.' },
    { slug: 'accordion-06', name: 'Plus / minus icon', description: 'Plus icon on each trigger that turns into a minus when open, instead of a chevron.' },
    { slug: 'accordion-07', name: 'Left chevron', description: 'Rotating chevron placed before the label instead of after it.' },
    { slug: 'accordion-09', name: 'Rich content', description: 'Lists, links, and a button inside the panel body.' },
    { slug: 'accordion-10', name: 'Disabled item', description: 'One trigger disabled while the others stay interactive.' },
    { slug: 'accordion-11', name: 'Nested', description: 'An accordion rendered inside another panel body.' },
    { slug: 'accordion-12', name: 'Ghost', description: 'Borderless minimal rows with an active color on open.' },
    { slug: 'accordion-13', name: 'Filled trigger', description: 'Each trigger sits on a muted, rounded background.' },
    { slug: 'accordion-14', name: 'Expand all', description: 'Controlled value with expand-all / collapse-all buttons.' },
    { slug: 'accordion-15', name: 'Settings sections', description: 'Grouped switch rows revealed inside each panel.' },
    { slug: 'accordion-16', name: 'With subtitle', description: 'Two-line trigger pairing a title with helper text.' },
  ],
}
