import { SwitchConcept } from '@/lib/patterns/pattern-concepts'
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const switchCategory: PatternCategory = {
  slug: 'switch',
  name: 'Switch',
  description: 'Toggle a single setting on or off.',
  preview: SwitchConcept,
  items: [
    { slug: 'switch-01', name: 'Basic', description: 'A single standalone switch.' },
    { slug: 'switch-02', name: 'With label', description: 'Switch paired with an accessible field label.' },
    { slug: 'switch-03', name: 'With description', description: 'Label and helper description beside the switch.' },
    { slug: 'switch-04', name: 'Sizes', description: 'The sm and default sizes side-by-side.' },
    { slug: 'switch-05', name: 'Disabled', description: 'Disabled off and disabled on states.' },
    { slug: 'switch-06', name: 'Theme toggle', description: 'Sun and moon icons flank a light / dark toggle.' },
    { slug: 'switch-07', name: 'Icon in thumb', description: 'Custom larger toggle with sun / moon icons that swap inside the thumb.' },
    { slug: 'switch-08', name: 'Settings group', description: 'A grouped list of notification settings, each row with a label, helper text, and a switch.' },
    { slug: 'switch-09', name: 'Credit card auto-pay', description: 'A visual credit card mockup above a labeled switch for enabling automatic monthly payments.' },
    { slug: 'switch-10', name: 'Choice cards', description: 'Clickable add-on rows showing a title, description, price, and a switch, each fully tappable via a wrapping label.' },
    { slug: 'switch-11', name: 'Invalid / required', description: 'A required switch in a form that shows an inline error message when submitted while off.' },
    { slug: 'switch-12', name: 'React Hook Form + Zod', description: 'Controller binds the switch to RHF; Zod requires opt-in on submit.' },
    { slug: 'switch-13', name: 'TanStack Form + Zod', description: 'form.Field wires the switch; Zod onSubmit validator surfaces FieldError.' },
  ],
}
