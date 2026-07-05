import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content06 } from './content-06'
import { Content06EditorFields } from './editor/fields'
import { Content06Example, values } from './content-06-example'

export const manifest: BlockManifest = {
  slug: 'content-06',
  name: 'Content 06',
  description:
    'Two-column split with serif headline, supporting copy, optional CTA, and a media panel.',
  category: 'content',
  image: {
    light: '/images/blocks/content/content-06.png',
    dark: '/images/blocks/content/content-06-dark.png',
  },
  meta: {
    iframeHeight: 700,
  },
  component: Content06,
  editorFields: Content06EditorFields,
  example: Content06Example,
  defaults: values,
}
