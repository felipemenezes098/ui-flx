import { TabsConcept } from '@/lib/patterns/pattern-concepts'
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const tabsCategory: PatternCategory = {
  slug: 'tabs',
  name: 'Tabs',
  description: 'Switch between views on the same page.',
  preview: TabsConcept,
  items: [
    { slug: 'tabs-01', name: 'Basic', description: 'Three tabs with the default filled variant.' },
    { slug: 'tabs-02', name: 'Line variant', description: 'Underline indicator instead of filled background.' },
    { slug: 'tabs-04', name: 'Vertical line', description: 'Vertical orientation with underline indicators, suited for sidebar navigation.' },
    { slug: 'tabs-05', name: 'Disabled tab', description: 'One trigger disabled while others stay interactive.' },
    { slug: 'tabs-06', name: 'With icons', description: 'Tabs with a small icon placed before each label in the trigger.' },
    { slug: 'tabs-07', name: 'With count badges', description: 'Trigger labels paired with secondary count badges.' },
    { slug: 'tabs-08', name: 'Icon only', description: 'Compact icon-only triggers for view switching.' },
    { slug: 'tabs-10', name: 'Icon with title', description: 'Icon stacked above the title in each trigger, with a visual panel below.' },
    { slug: 'tabs-11', name: 'Account and password', description: 'Two-tab card with a profile edit form on one tab and a password change form on the other.' },
    { slug: 'tabs-12', name: 'In card', description: 'Tabs inside a card with stats, member list, and billing summary panels.' },
    { slug: 'tabs-13', name: 'Preview and code', description: 'Docs-style switch between live preview and code snippet.' },
    { slug: 'tabs-14', name: 'Pricing toggle', description: 'Monthly versus yearly billing toggle swaps the price.' },
    { slug: 'tabs-15', name: 'Pill track', description: 'Rounded pill triggers in a bordered track with cross-fading mood boards.' },
  ],
}
