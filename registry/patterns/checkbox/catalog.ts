import { CheckboxConcept } from '@/lib/patterns/pattern-concepts'
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const checkboxCategory: PatternCategory = {
  slug: 'checkbox',
  name: 'Checkbox',
  description: 'Toggle one or many options on and off.',
  preview: CheckboxConcept,
  items: [
    { slug: 'checkbox-01', name: 'Basic', description: 'Single checkbox with a label.' },
    { slug: 'checkbox-02', name: 'With description', description: 'Checkbox with a label and helper description.' },
    { slug: 'checkbox-03', name: 'Disabled', description: 'Disabled unchecked and disabled checked states.' },
    { slug: 'checkbox-04', name: 'Group', description: 'Grouped list of notification checkboxes, each with a label and helper description, inside a labelled fieldset.' },
    { slug: 'checkbox-06', name: 'Select all', description: 'Parent checkbox with an indeterminate mixed state.' },
    { slug: 'checkbox-07', name: 'Nested tree', description: 'Multi-level file tree; parents derive checked / indeterminate from children.' },
    { slug: 'checkbox-08', name: 'Choice cards', description: 'Bordered add-on cards that highlight when checked.' },
    { slug: 'checkbox-09', name: 'Payment methods', description: 'Selectable saved credit cards with brand and last four.' },
    { slug: 'checkbox-10', name: 'Table row selection', description: 'Data table with a select-all header, per-row checkboxes, and a count.' },
    { slug: 'checkbox-11', name: 'Invalid / required', description: 'Checkbox with an inline error message that appears when the form is submitted without checking it.' },
    { slug: 'checkbox-12', name: 'React Hook Form + Zod', description: 'Controller binds a checkbox group to React Hook Form; Zod requires at least one selection.' },
    { slug: 'checkbox-13', name: 'TanStack Form + Zod', description: 'form.Field wires a checkbox group to TanStack Form; Zod validates on submit and shows an error when none are selected.' },
  ],
}
