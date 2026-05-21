export interface PatternImage {
  light: string
  dark: string
}

export interface PatternItem {
  slug: string
  name: string
  description?: string
  isNew?: boolean
  prompt?: string
}

export interface PatternCategory {
  slug: string
  name: string
  description: string
  image: PatternImage
  items: PatternItem[]
}

export const patternCategories: PatternCategory[] = [
  {
    slug: 'select',
    name: 'Select',
    description:
      'A set of select patterns for single-value, grouped, disabled, and more.',
    image: {
      light:
        'https://images.unsplash.com/photo-1557683316-973673baf926?w=600&q=80&auto=format',
      dark: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=600&q=80&auto=format',
    },
    items: [
      {
        slug: 'select-01',
        name: 'Basic',
        description: 'Single-value dropdown.',
      },
      {
        slug: 'select-02',
        name: 'Grouped',
        description: 'Options organized into labeled groups.',
      },
      {
        slug: 'select-03',
        name: 'Disabled',
        description: 'Non-interactive select state.',
      },
      {
        slug: 'select-04',
        name: 'With Icons',
        description: 'Options with leading icons.',
      },
      {
        slug: 'select-16',
        name: 'Icon in the trigger',
        description:
          'Leading icon in the trigger updates with the selection; dropdown options are text only.',
      },
      {
        slug: 'select-05',
        name: 'With Object',
        description: 'with object values.',
      },
      {
        slug: 'select-06',
        name: 'With description only items',
        description: 'Select with description only items.',
      },
      {
        slug: 'select-07',
        name: 'Disabled Items',
        description: 'Select with individual disabled options.',
      },
      {
        slug: 'select-08',
        name: 'With Avatar',
        description: 'User picker with avatars in trigger and options.',
        isNew: true,
      },
      {
        slug: 'select-09',
        name: 'Custom Border & Background',
        description: 'Muted background and custom border on the trigger.',
        isNew: true,
      },
      {
        slug: 'select-10',
        name: 'With Label',
        description: 'Accessible field label linked to the select trigger.',
        isNew: true,
      },
      {
        slug: 'select-14',
        name: 'With inline label',
        description:
          'Muted prefix label inside the trigger, left of the selected value.',
        isNew: true,
      },
      {
        slug: 'select-15',
        name: 'Animated content',
        description:
          'Popper position plus Popover-style origin-aware fade, zoom, and slide (duration-200).',
        isNew: true,
      },
      {
        slug: 'select-11',
        name: 'In Form',
        description: 'Select composed with Field, FieldLabel, and description.',
        isNew: true,
      },
      {
        slug: 'select-12',
        name: 'React Hook Form + Zod',
        description:
          'Controller binds Select to RHF; Zod resolver drives FieldError on submit.',
        isNew: true,
      },
      {
        slug: 'select-13',
        name: 'TanStack Form + Zod',
        description:
          'form.Field wires Select; Zod onSubmit validator surfaces FieldError when touched.',
        isNew: true,
      },
    ],
  },
  {
    slug: 'dialog',
    name: 'Dialog',
    description:
      'Modal dialogs for confirmations, forms, and contextual actions.',
    image: {
      light:
        'https://images.unsplash.com/photo-1557683316-973673baf926?w=600&q=80&auto=format',
      dark: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=600&q=80&auto=format',
    },
    items: [
      {
        slug: 'dialog-01',
        name: 'Confirm Dialog',
        description: 'Simple confirmation dialog with cancel and confirm.',
      },
      {
        slug: 'dialog-02',
        name: 'Form Dialog',
        description: 'Dialog wrapping a form with validation.',
      },
      {
        slug: 'dialog-03',
        name: 'Alert Dialog',
        description: 'Destructive action warning with clear messaging.',
        isNew: true,
      },
    ],
  },
  {
    slug: 'input',
    name: 'Input',
    description:
      'Form inputs, text fields, and interactive controls for data entry.',
    image: {
      light:
        'https://images.unsplash.com/photo-1557683316-973673baf926?w=600&q=80&auto=format',
      dark: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=600&q=80&auto=format',
    },
    items: [
      {
        slug: 'input-01',
        name: 'Basic',
        description: 'Basic input with placeholder.',
      },
      {
        slug: 'input-03',
        name: 'Disabled',
        description: 'Disabled input.',
      },
      {
        slug: 'input-02',
        name: 'With Addon',
        description: 'Input with trailing search icon addon.',
      },
      {
        slug: 'input-04',
        name: 'With Addon in the end',
        description: 'Input with trailing icon addon.',
      },
      {
        slug: 'input-16',
        name: 'With email domain',
        description:
          'InputGroup suffix addon locks the @company.com domain beside the username field.',
        isNew: true,
      },
      {
        slug: 'input-05',
        name: 'With prefix and suffix',
        description: 'Fixed text addons at the start and end of the field.',
        isNew: true,
      },
      {
        slug: 'input-06',
        name: 'With loading spinner',
        description: 'Spinning loader in the trailing addon while searching.',
        isNew: true,
      },
      {
        slug: 'input-07',
        name: 'With clear button',
        description:
          'Clear button appears in the trailing addon when the field has text.',
        isNew: true,
      },
      {
        slug: 'input-08',
        name: 'With tooltip',
        description:
          'Help icon in the trailing addon opens a tooltip on hover.',
        isNew: true,
      },
      {
        slug: 'input-09',
        name: 'With popover',
        description:
          'Info button in the trailing addon opens a popover with helper content.',
        isNew: true,
      },
      {
        slug: 'input-10',
        name: 'With dropdown menu',
        description:
          'Trailing addon button opens a menu to choose search scope.',
        isNew: true,
      },
      {
        slug: 'input-11',
        name: 'In Form',
        description: 'Input composed with Field, FieldLabel, and description.',
        isNew: true,
      },
      {
        slug: 'input-12',
        name: 'React Hook Form + Zod',
        description:
          'Controller binds Input to RHF; Zod resolver drives FieldError on submit.',
        isNew: true,
      },
      {
        slug: 'input-13',
        name: 'TanStack Form + Zod',
        description:
          'form.Field wires Input; Zod onSubmit validator surfaces FieldError when touched.',
        isNew: true,
      },
      {
        slug: 'input-14',
        name: 'With search button',
        description:
          'ButtonGroup pairs a text input with a trailing search action button.',
        isNew: true,
      },

      {
        slug: 'input-15',
        name: 'With currency select',
        description:
          'Nested ButtonGroup: currency Select, amount input, and submit icon button.',
        isNew: true,
      },
      {
        slug: 'input-17',
        name: 'With nested input group',
        description:
          'Attach button plus InputGroup message field and send action in a ButtonGroup.',
        isNew: true,
      },
    ],
  },
  {
    slug: 'accordion',
    name: 'Accordion',
    description: 'Collapsible content sections with smooth expand animations.',
    image: {
      light:
        'https://images.unsplash.com/photo-1557683316-973673baf926?w=600&q=80&auto=format',
      dark: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=600&q=80&auto=format',
    },
    items: [
      {
        slug: 'accordion-01',
        name: 'Basic Accordion',
        description: 'Single or multiple open sections.',
      },
      {
        slug: 'accordion-02',
        name: 'FAQ Accordion',
        description: 'FAQ layout with styled questions and answers.',
      },
    ],
  },
]

export const allPatterns = patternCategories.flatMap((category) =>
  category.items.map((item) => ({
    ...item,
    categorySlug: category.slug,
  })),
)

export type PatternCatalogEntry = (typeof allPatterns)[number]

export function getCategoryBySlug(slug: string): PatternCategory | undefined {
  return patternCategories.find((c) => c.slug === slug)
}

export function getPatternBySlug(
  categorySlug: string,
  patternSlug: string,
): PatternItem | undefined {
  return getCategoryBySlug(categorySlug)?.items.find(
    (p) => p.slug === patternSlug,
  )
}
