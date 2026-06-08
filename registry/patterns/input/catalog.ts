import { InputConcept } from '@/lib/patterns/pattern-concepts'
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const inputCategory: PatternCategory = {
  slug: 'input',
  name: 'Input',
  description: 'Fields for typing and entering values.',
  preview: InputConcept,
  items: [
    { slug: 'input-01', name: 'Basic', description: 'Plain text input with a placeholder, no addons.' },
    { slug: 'input-03', name: 'Disabled', description: 'Text input rendered in a disabled, non-interactive state.' },
    { slug: 'input-02', name: 'With Addon', description: 'Input with trailing search icon addon.' },
    { slug: 'input-04', name: 'With Addon in the end', description: 'Password input with a trailing eye-off icon to indicate visibility toggle.' },
    { slug: 'input-16', name: 'With email domain', description: 'Username field with a fixed @company.com suffix addon, locking the email domain.' },
    { slug: 'input-05', name: 'With prefix and suffix', description: 'URL input with a fixed "https://" prefix and ".com" suffix text addons.' },
    { slug: 'input-06', name: 'With loading spinner', description: 'Spinning loader in the trailing addon while searching.' },
    { slug: 'input-07', name: 'With clear button', description: 'Clear button appears in the trailing addon when the field has text.' },
    { slug: 'input-08', name: 'With tooltip', description: 'Help icon in the trailing addon opens a tooltip on hover.' },
    { slug: 'input-09', name: 'With popover', description: 'Info button in the trailing addon opens a popover with helper content.' },
    { slug: 'input-10', name: 'With dropdown menu', description: 'Trailing addon button opens a menu to choose search scope.' },
    { slug: 'input-11', name: 'In Form', description: 'Labeled text input with a supporting description line below the field.' },
    { slug: 'input-12', name: 'React Hook Form + Zod', description: 'Controller binds Input to RHF; Zod resolver drives FieldError on submit.' },
    { slug: 'input-13', name: 'TanStack Form + Zod', description: 'form.Field wires Input; Zod onSubmit validator surfaces FieldError when touched.' },
    { slug: 'input-14', name: 'With search button', description: 'ButtonGroup pairs a text input with a trailing search action button.' },
    { slug: 'input-15', name: 'With currency select', description: 'Nested ButtonGroup: currency Select, amount input, and submit icon button.' },
    { slug: 'input-17', name: 'With nested input group', description: 'Attach button plus InputGroup message field and send action in a ButtonGroup.' },
  ],
}
