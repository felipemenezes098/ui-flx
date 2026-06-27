import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const tsfFieldsCategory: PatternCategory = {
  slug: 'fields',
  name: 'Fields',
  description:
    'Bind individual input primitives like select, switch and checkbox to the form.',
  preview: () => null,
  grid: { columns: 3 },
  items: [
    {
      slug: 'tsf-fields-07',
      name: 'Select',
      description:
        'Grouped select with labelled option groups wired with form.Field.',
    },
    {
      slug: 'tsf-fields-08',
      name: 'Command',
      description:
        'Searchable combobox using Command inside a Popover, wired with form.Field.',
    },
    {
      slug: 'tsf-fields-09',
      name: 'Dropdown',
      description:
        'Single choice via a dropdown menu radio group wired with form.Field.',
    },
    {
      slug: 'tsf-fields-02',
      name: 'Text Input',
      description:
        'Native text and email inputs wired with form.Field and Zod validation.',
    },
    {
      slug: 'tsf-fields-03',
      name: 'Textarea',
      description:
        'Multi-line textarea with a description and length-constrained Zod rule.',
    },
    {
      slug: 'tsf-fields-04',
      name: 'Slider',
      description:
        'Numeric slider wired with form.Field, validated against a Zod range.',
    },
    {
      slug: 'tsf-fields-05',
      name: 'Checkbox Group',
      description:
        'Multiple checkboxes collected into a string array with a min-selection rule.',
    },
    {
      slug: 'tsf-fields-06',
      name: 'Toggle Group',
      description:
        'Single-select toggle group wired with form.Field and Zod validation.',
    },
  ],
}
