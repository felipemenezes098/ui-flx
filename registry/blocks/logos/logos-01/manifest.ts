import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Logos01 } from './logos-01'
import { Logos01EditorFields } from './editor/fields'
import { Logos01Example, values } from './logos-01-example'

export const manifest: BlockManifest = {
  slug: 'logos-01',
  name: 'Logos 01',
  description:
    'Logo carousel with auto-scroll, edge gradient and minimalist style.',
  category: 'logos',
  image: {
    light: '/images/blocks/logos/logos-01.png',
    dark: '/images/blocks/logos/logos-01.png',
  },
  meta: {
    containerClassName: 'max-w-full overflow-hidden px-0',
  },
  component: Logos01,
  editorFields: Logos01EditorFields,
  example: Logos01Example,
  defaults: values,
}
