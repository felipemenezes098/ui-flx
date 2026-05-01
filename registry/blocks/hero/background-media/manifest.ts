import type { BlockManifest } from '@/lib/block-manifest-types'
import { BackgroundMedia } from './background-media'
import { BackgroundMediaEditorFields } from './editor/fields'
import { BackgroundMediaExample, values } from './background-media-example'

export const manifest: BlockManifest = {
  slug: 'background-media',
  name: 'Background Media',
  description: 'A background media with a title, description and CTA.',
  category: 'hero',
  image: {
    light: '/images/blocks/hero/heroBackgroundMedia.png',
    dark: '/images/blocks/hero/heroBackgroundMedia.png',
  },
  meta: {
    iframeHeight: 600,
  },
  component: BackgroundMedia,
  editorFields: BackgroundMediaEditorFields,
  example: BackgroundMediaExample,
  defaults: values,
}
