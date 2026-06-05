import { SelectConcept } from '@/lib/patterns/pattern-concepts'
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const selectCategory: PatternCategory = {
  slug: 'select',
  name: 'Select',
  description: 'Pick one option from a list.',
  preview: SelectConcept,
  items: [
    { slug: 'select-01', name: 'Basic', description: 'Minimal single-value dropdown with a placeholder and a flat list of options.' },
    { slug: 'select-02', name: 'Grouped', description: 'Options organized into labeled groups.' },
    { slug: 'select-03', name: 'Disabled', description: 'Non-interactive select state.' },
    { slug: 'select-04', name: 'With Icons', description: 'Options with leading icons.' },
    { slug: 'select-16', name: 'Icon in the trigger', description: 'Fixed leading icon in the trigger alongside the selected value; dropdown options are text only.' },
    { slug: 'select-05', name: 'With Object', description: 'Each option shows a bold label and a muted description sub-line; the trigger displays the full two-line item when selected.' },
    { slug: 'select-06', name: 'With description only items', description: 'Options show a bold label and a muted description sub-line; the trigger shows only the label after selection.' },
    { slug: 'select-07', name: 'Disabled Items', description: 'Select with individual disabled options.' },
    { slug: 'select-08', name: 'With Avatar', description: 'User picker with avatars in trigger and options.' },
    { slug: 'select-09', name: 'Custom Border & Background', description: 'Muted background and custom border on the trigger.' },
    { slug: 'select-10', name: 'With Label', description: 'Accessible field label linked to the select trigger.' },
    { slug: 'select-14', name: 'With inline label', description: 'Muted prefix label inside the trigger, left of the selected value.' },
    { slug: 'select-15', name: 'Animated content', description: 'Dropdown opens in popper position anchored below the trigger with a small offset, giving a tooltip-style layout.' },
    { slug: 'select-11', name: 'In Form', description: 'Select composed with Field, FieldLabel, and description.' },
    { slug: 'select-12', name: 'React Hook Form + Zod', description: 'Controller binds Select to RHF; Zod resolver drives FieldError on submit.' },
    { slug: 'select-13', name: 'TanStack Form + Zod', description: 'form.Field wires Select; Zod onSubmit validator surfaces FieldError when touched.' },
  ],
}
