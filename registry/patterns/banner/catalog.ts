import { BannerConcept } from '@/lib/patterns/pattern-concepts'
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const bannerCategory: PatternCategory = {
  slug: 'banner',
  name: 'Banner',
  description: 'Page-level announcements, alerts, and promos that span the full width.',
  preview: BannerConcept,
  grid: { columns: 1 },
  items: [
    { slug: 'banner-01', name: 'Basic', description: 'Icon, message, and a subtle bordered surface.' },
    { slug: 'banner-02', name: 'Variants', description: 'Info, success, warning, and error tones stacked.' },
    { slug: 'banner-03', name: 'Dismissible', description: 'A close button hides the banner with a restore link.' },
    { slug: 'banner-04', name: 'With actions', description: 'Message paired with Later and Update now buttons.' },
    { slug: 'banner-06', name: 'Announcement bar', description: 'Full-width gradient promo with a New tag and arrow.' },
    { slug: 'banner-07', name: 'Expandable', description: 'Collapsible release notes that reveal highlights.' },
    { slug: 'banner-09', name: 'Maintenance', description: 'Amber system notice with a pulsing status dot.' },
    { slug: 'banner-11', name: 'Email verification', description: 'Blue prompt with a Resend email button that switches to a sent confirmation.' },
    { slug: 'banner-12', name: 'Stacked', description: 'A list of dismissible notices, each removed on its own.' },
    { slug: 'banner-14', name: 'With progress', description: 'Live import banner with a spinner and a progress bar.' },
  ],
}
