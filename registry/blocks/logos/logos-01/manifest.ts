import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Logos01 } from './logos-01'

export const manifest: BlockManifest = {
  slug: 'logos-01',
  name: 'Logos 01',
  description:
    'Logo carousel with auto-scroll, edge gradient and minimalist style.',
  category: 'logos',
  preset: 'vellum',
  image: {
    light: '/images/blocks/logos/logos-01.webp',
    dark: '/images/blocks/logos/logos-01-dark.webp',
  },
  meta: {
    containerClassName: 'max-w-full overflow-hidden px-0',
  },
  component: Logos01,
}
