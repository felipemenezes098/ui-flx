import { PopoverConcept } from '@/lib/patterns/pattern-concepts'
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const popoverCategory: PatternCategory = {
  slug: 'popover',
  name: 'Popover',
  description: 'Floating panels triggered by a click.',
  preview: PopoverConcept,
  items: [
    { slug: 'popover-01', name: 'Basic', description: 'Default popover with a button trigger and simple text.' },
    { slug: 'popover-02', name: 'With header', description: 'Popover with a bold title and a short description below it.' },
    { slug: 'popover-03', name: 'Sides', description: 'Place the popover on top, right, bottom, or left of the trigger.' },
    { slug: 'popover-04', name: 'Alignment', description: 'Align the content to the start, center, or end of the trigger.' },
    { slug: 'popover-05', name: 'Custom width', description: 'Override the default width via className on PopoverContent.' },
    { slug: 'popover-06', name: 'Dimensions form', description: 'Form with inline labeled inputs for width, max-width, height, and max-height.' },
    { slug: 'popover-07', name: 'Notification settings', description: 'Switches with labels and descriptions inside the popover.' },
    { slug: 'popover-08', name: 'Color picker', description: 'Swatch grid with a check icon on the active color.' },
    { slug: 'popover-09', name: 'Share link', description: 'Readonly URL input with a trailing copy button.' },
    { slug: 'popover-10', name: 'Notifications list', description: 'Notification rows with an icon, message text, timestamp, and unread indicator dot.' },
    { slug: 'popover-11', name: 'Profile card', description: 'Banner image, avatar, bio, and follow / message actions.' },
    { slug: 'popover-12', name: 'Cover picker', description: 'Thumbnail grid with a selection ring for choosing a cover image.' },
    { slug: 'popover-13', name: 'Filters', description: 'Grouped toggle button filters for status and priority, with reset and apply actions.' },
    { slug: 'popover-14', name: 'Scrollable list', description: 'Scrollable list of team members with avatars and roles inside a fixed-height popover.' },
  ],
}
