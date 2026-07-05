import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content07 } from './content-07'
import { Content07EditorFields } from './editor/fields'
import { Content07Example, values } from './content-07-example'

export const manifest: BlockManifest = {
  slug: 'content-07',
  name: 'Content 07',
  description:
    'Two-column grid with serif header, media on top, copy, and optional CTA per column.',
  category: 'content',
  image: {
    light: '/images/blocks/content/content-07.png',
    dark: '/images/blocks/content/content-07-dark.png',
  },
  meta: {
    iframeHeight: 800,
  },
  component: Content07,
  editorFields: Content07EditorFields,
  example: Content07Example,
  defaults: values,
}
