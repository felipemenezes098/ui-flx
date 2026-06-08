import { ItemConcept } from '@/lib/patterns/pattern-concepts'
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const itemCategory: PatternCategory = {
  slug: 'item',
  name: 'Item',
  description: 'Show entries in lists, feeds, and settings rows.',
  preview: ItemConcept,
  items: [
    { slug: 'item-02', name: 'Basic', description: 'Title plus supporting description.' },
    { slug: 'item-03', name: 'Variants', description: 'Default, outline, and muted variants side-by-side.' },
    { slug: 'item-04', name: 'Sizes', description: 'Default, sm, and xs sizes side-by-side.' },
    { slug: 'item-05', name: 'With icon', description: 'Leading icon placed before the title and description.' },
    { slug: 'item-06', name: 'With avatar', description: 'User avatar photo placed before the name and subtitle.' },
    { slug: 'item-07', name: 'With thumbnail', description: 'Small image thumbnail placed before the title and subtitle.' },
    { slug: 'item-08', name: 'With actions', description: 'Avatar, name, role, and a trailing action button.' },
    { slug: 'item-09', name: 'Header and footer', description: 'Status badge above the title and a metadata row below the description.' },
    { slug: 'item-10', name: 'As link', description: 'The entire row is clickable, navigating to a URL with a trailing arrow icon.' },
    { slug: 'item-11', name: 'Group', description: 'Multiple rows grouped together with thin dividers between each row.' },
    { slug: 'item-12', name: 'User list', description: 'Avatars with name, role, and Follow action per row.' },
    { slug: 'item-13', name: 'Notifications', description: 'Leading icon, title with an unread dot indicator, and a trailing timestamp.' },
    { slug: 'item-14', name: 'File list', description: 'File icon, name, size metadata, and a trailing overflow menu with actions per row.' },
    { slug: 'item-15', name: 'Settings row', description: 'Title and description with a trailing Switch.' },
    { slug: 'item-16', name: 'Integrations', description: 'Brand icon, status badge in title, connect Switch.' },
    { slug: 'item-17', name: 'Stat rows', description: 'Stacked KPI rows with label, value, and trend delta.' },
    { slug: 'item-18', name: 'Pricing tiers', description: 'Stacked tier rows with Popular badge, price, and CTA button.' },
    { slug: 'item-19', name: 'Activity feed', description: 'Icon timeline rows with relative time footer.' },
    { slug: 'item-20', name: 'In dropdown menu', description: 'Compact user avatar and email placed at the top of a dropdown menu.' },
    { slug: 'item-21', name: 'In popover', description: 'File rows with image thumbnails displayed inside a floating popover panel.' },
    { slug: 'item-24', name: 'Empty team', description: 'Overlapping avatar stack above an empty-state message with an invite button.' },
  ],
}
