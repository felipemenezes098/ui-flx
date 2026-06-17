import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const rhfFieldsCategory: PatternCategory = {
  slug: 'fields',
  name: 'Fields',
  description:
    'Bind individual input primitives like select, switch and checkbox to the form.',
  preview: () => null,
  grid: { columns: 3 },
  items: [
    {
      slug: 'rhf-fields-07',
      name: 'Select',
      description:
        'Grouped select with labelled option groups bound via Controller.',
    },
    {
      slug: 'rhf-fields-08',
      name: 'Command',
      description:
        'Searchable combobox using Command inside a Popover, bound via Controller.',
    },
    {
      slug: 'rhf-fields-09',
      name: 'Dropdown',
      description:
        'Single choice via a dropdown menu radio group bound through Controller.',
    },
    {
      slug: 'rhf-fields-02',
      name: 'Text Input',
      description:
        'Native text and email inputs bound with register and Zod validation.',
      isNew: true,
    },
    {
      slug: 'rhf-fields-03',
      name: 'Textarea',
      description:
        'Multi-line textarea with a description and length-constrained Zod rule.',
      isNew: true,
    },
    {
      slug: 'rhf-fields-04',
      name: 'Slider',
      description:
        'Numeric slider bound via Controller, validated against a Zod range.',
      isNew: true,
    },
    {
      slug: 'rhf-fields-05',
      name: 'Checkbox Group',
      description:
        'Multiple checkboxes collected into a string array with a min-selection rule.',
      isNew: true,
    },
    {
      slug: 'rhf-fields-06',
      name: 'Toggle Group',
      description:
        'Single-select toggle group bound via Controller with Zod validation.',
      isNew: true,
    },
  ],
}
