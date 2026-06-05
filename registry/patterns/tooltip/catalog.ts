import { TooltipConcept } from '@/lib/patterns/pattern-concepts'
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const tooltipCategory: PatternCategory = {
  slug: 'tooltip',
  name: 'Tooltip',
  description: 'Quick hints that appear on hover or focus.',
  preview: TooltipConcept,
  items: [
    { slug: 'tooltip-01', name: 'Basic', description: 'Default dark tooltip on a button.' },
    { slug: 'tooltip-02', name: 'Sides', description: 'Place the tooltip on top, right, bottom, or left.' },
    { slug: 'tooltip-03', name: 'With shortcut', description: 'Label paired with a keyboard shortcut badge inside the tooltip.' },
    { slug: 'tooltip-04', name: 'On icon button', description: 'Labels icon-only buttons in a toolbar.' },
    { slug: 'tooltip-05', name: 'Custom delay', description: 'Tooltips that open instantly, after 500ms, or after 1.2s, showing different hover delay behaviors.' },
    { slug: 'tooltip-06', name: 'Rich content', description: 'Title plus supporting description in the content.' },
    { slug: 'tooltip-07', name: 'Light via dark class', description: 'A light-colored tooltip that appears in light mode, inverted from the default dark style.' },
    { slug: 'tooltip-08', name: 'Colored', description: 'Primary, secondary, and destructive tooltips with arrow color matching the content.' },
    { slug: 'tooltip-09', name: 'No arrow', description: 'Hide the pointer arrow for a flatter look.' },
    { slug: 'tooltip-10', name: 'Side offset', description: 'Adjust the gap between trigger and content.' },
  ],
}
