import { DropdownConcept } from '@/lib/patterns/pattern-concepts'
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const dropdownCategory: PatternCategory = {
  slug: 'dropdown',
  name: 'Dropdown',
  description: 'Menu of actions and choices triggered by a button.',
  preview: DropdownConcept,
  items: [
    { slug: 'dropdown-01', name: 'Basic', description: 'Label, separator, and a list of action items.' },
    { slug: 'dropdown-02', name: 'With icons and shortcuts', description: 'Leading icons paired with trailing keyboard shortcuts.' },
    { slug: 'dropdown-03', name: 'Grouped', description: 'Multiple labeled groups divided by separators.' },
    { slug: 'dropdown-04', name: 'Destructive item', description: 'A red destructive Delete action separated from the regular items.' },
    { slug: 'dropdown-05', name: 'Disabled items', description: 'Non-interactive items dimmed with the disabled prop.' },
    { slug: 'dropdown-06', name: 'Checkbox items', description: 'Toggle multiple view options with checkbox items.' },
    { slug: 'dropdown-07', name: 'Radio group', description: 'Radio items that keep exactly one option selected at a time.' },
    { slug: 'dropdown-08', name: 'Submenu', description: 'A menu item that reveals a nested flyout panel with more options.' },
    { slug: 'dropdown-09', name: 'Account menu', description: 'Avatar trigger with a name and email header block.' },
    { slug: 'dropdown-10', name: 'Icon button actions', description: 'Ghost ellipsis trigger opens a compact actions menu.' },
    { slug: 'dropdown-11', name: 'Table row actions', description: 'Per-row ellipsis menu with edit, copy, and remove.' },
    { slug: 'dropdown-12', name: 'Sides and alignment', description: 'Align start or end and open the menu to the side.' },
    { slug: 'dropdown-13', name: 'Controlled open', description: 'Menu whose open/closed state is managed externally and reflected in the trigger label.' },
    { slug: 'dropdown-14', name: 'Theme switcher', description: 'Radio group toggling light, dark, and system themes.' },
    { slug: 'dropdown-15', name: 'Multi-select filter', description: 'Checkbox items with a count badge and a clear action.' },
    { slug: 'dropdown-16', name: 'Notifications', description: 'Bell trigger with an unread badge and an activity list.' },
    { slug: 'dropdown-17', name: 'With dialog', description: 'A menu item opens a controlled confirmation dialog.' },
    { slug: 'dropdown-18', name: 'React Hook Form + Zod', description: 'Controller binds a radio group to RHF; Zod requires a selection.' },
    { slug: 'dropdown-19', name: 'TanStack Form + Zod', description: 'form.Field wires the radio group; Zod onSubmit surfaces FieldError.' },
  ],
}
