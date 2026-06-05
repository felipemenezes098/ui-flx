import { CardConcept } from '@/lib/patterns/pattern-concepts'
import type { PatternCategory } from '@/lib/patterns/pattern-types'

export const cardCategory: PatternCategory = {
  slug: 'card',
  name: 'Card',
  description: 'Group related content and actions in a bordered surface.',
  preview: CardConcept,
  grid: { columns: 2 },
  items: [
    { slug: 'card-01', name: 'Basic', description: 'Header, action, content, and a bordered footer.' },
    { slug: 'card-02', name: 'With image', description: 'Top media banner above title, body, and a CTA footer.' },
    { slug: 'card-03', name: 'Horizontal', description: 'Image on the left beside a category, title, and link.' },
    { slug: 'card-04', name: 'With action menu', description: 'Three-dot icon button in the header corner opens a dropdown with rename, share, and delete options.' },
    { slug: 'card-05', name: 'Stat', description: 'KPI value with an icon and a tinted trend badge.' },
    { slug: 'card-06', name: 'Login form', description: 'Email and password fields with sign-in and OAuth buttons.' },
    { slug: 'card-07', name: 'Opens in dialog', description: 'A footer button launches a modal with subscription detail.' },
    { slug: 'card-08', name: 'Profile', description: 'Centered avatar, stats row, and follow / message actions.' },
    { slug: 'card-09', name: 'Pricing', description: 'Highlighted plan with a Popular badge and feature checklist.' },
    { slug: 'card-10', name: 'Product', description: 'Square image with a sale badge, price, and add-to-cart.' },
    { slug: 'card-11', name: 'Notification settings', description: 'Horizontal field rows each toggled with a switch.' },
    { slug: 'card-12', name: 'Selectable', description: 'Clickable plan cards with a ring and check on the active one.' },
    { slug: 'card-13', name: 'Image overlay', description: 'Text and a CTA over a gradient-darkened cover image.' },
    { slug: 'card-14', name: 'Payment form', description: 'Name on card, card number with icon, expiry, CVC, and country select fields with a pay button.' },
  ],
}
