import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content11 } from './content-11'
import { Content11EditorFields } from './editor/fields'
import { Content11Example, values } from './content-11-example'

export const manifest: BlockManifest = {
  slug: 'content-11',
  name: 'Content 11',
  description:
    'A billing overview split with a dashboard preview card and two feature highlights, built for the app-shell preset.',
  category: 'content',
  preset: 'vellum',
  image: {
    light: '/images/blocks/content/content-11.webp',
    dark: '/images/blocks/content/content-11-dark.webp',
  },
  meta: {
    iframeHeight: 950,
  },
  component: Content11,
  editorFields: Content11EditorFields,
  example: Content11Example,
  defaults: values,
}
