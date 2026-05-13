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
      'Dropdown selects with search, multi-select, and custom triggers.',
    image: {
      light:
        'https://images.unsplash.com/photo-1557683316-973673baf926?w=600&q=80&auto=format',
      dark: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=600&q=80&auto=format',
    },
    items: [
      {
        slug: 'select-01',
        name: 'Basic Select',
        description: 'Simple single-value select with clean styling.',
      },
      {
        slug: 'select-02',
        name: 'Searchable Select',
        description: 'Select with inline search and keyboard navigation.',
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
    slug: 'inputs',
    name: 'Inputs',
    description:
      'Form inputs, text fields, and interactive controls for data entry.',
    image: {
      light:
        'https://images.unsplash.com/photo-1557683316-973673baf926?w=600&q=80&auto=format',
      dark: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=600&q=80&auto=format',
    },
    items: [
      {
        slug: 'inputs-01',
        name: 'Input with Label',
        description: 'Accessible labeled input with error state.',
      },
      {
        slug: 'inputs-02',
        name: 'Input with Icon',
        description: 'Input with leading or trailing icon.',
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
