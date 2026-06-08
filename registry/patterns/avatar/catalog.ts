import { AvatarConcept } from '@/lib/patterns/pattern-concepts'
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const avatarCategory: PatternCategory = {
  slug: 'avatar',
  name: 'Avatar',
  description: 'Represent a user or entity with an image or initials.',
  preview: AvatarConcept,
  items: [
    { slug: 'avatar-01', name: 'Basic', description: 'Image avatar with an initials fallback.' },
    { slug: 'avatar-02', name: 'Fallback initials', description: 'Missing image falls back to initials.' },
    { slug: 'avatar-03', name: 'Icon fallback', description: 'Generic user icon when there is no image or name.' },
    { slug: 'avatar-04', name: 'Sizes', description: 'Small, default, and large sizes side-by-side.' },
    { slug: 'avatar-05', name: 'Colored fallback', description: 'Tinted initials fallbacks using semantic tokens.' },
    { slug: 'avatar-06', name: 'Status badge', description: 'Presence dot in the corner showing online, away, or offline.' },
    { slug: 'avatar-07', name: 'Badge with icon', description: 'Verified check icon inside the AvatarBadge.' },
    { slug: 'avatar-08', name: 'With name', description: 'Avatar beside a name and email, forming a user row.' },
    { slug: 'avatar-09', name: 'Group', description: 'Overlapping AvatarGroup stack of members.' },
    { slug: 'avatar-10', name: 'Group with count', description: 'Overlapping group with a +N count for the remaining members.' },
    { slug: 'avatar-11', name: 'Group with tooltip', description: 'Hover each avatar in the group to reveal its name.' },
    { slug: 'avatar-12', name: 'Loading skeleton', description: 'Skeleton placeholder while the avatar loads.' },
    { slug: 'avatar-13', name: 'Icon on top', description: 'Icon badge pinned to the top-right corner.' },
  ],
}
