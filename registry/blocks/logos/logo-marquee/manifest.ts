import type { BlockManifest } from '@/lib/block-manifest-types'
import { LogoMarquee } from './logo-marquee'
import { LogoMarqueeEditorFields } from './editor/fields'
import { LogoMarqueeExample, values } from './logo-marquee-example'

export const manifest: BlockManifest = {
  slug: 'logo-marquee',
  name: 'Logo Marquee',
  description:
    'Logo carousel with auto-scroll, edge gradient and minimalist style.',
  category: 'logos',
  image: {
    light: '/images/blocks/logos/logoMarquee.png',
    dark: '/images/blocks/logos/logoMarquee.png',
  },
  meta: {
    containerClassName: 'max-w-full overflow-hidden px-0',
  },
  component: LogoMarquee,
  editorFields: LogoMarqueeEditorFields,
  example: LogoMarqueeExample,
  defaults: values,
}
