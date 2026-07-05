import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content09 } from './content-09'
import { Content09EditorFields } from './editor/fields'
import { Content09Example, values } from './content-09-example'

export const manifest: BlockManifest = {
  slug: 'content-09',
  name: 'Content 09',
  description:
    'Two-column icon card grid with serif section header and subtle entrance motion.',
  category: 'content',
  image: {
    light: '/images/blocks/content/content-09.png',
    dark: '/images/blocks/content/content-09-dark.png',
  },
  meta: {
    iframeHeight: 700,
  },
  component: Content09,
  editorFields: Content09EditorFields,
  example: Content09Example,
  defaults: values,
}
