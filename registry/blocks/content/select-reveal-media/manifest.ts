import type { BlockManifest } from '@/lib/block-manifest-types'
import { SelectRevealMedia } from './select-reveal-media'
import { SelectRevealMediaEditorFields } from './editor/fields'
import { SelectRevealMediaExample, values } from './select-reveal-media-example'

export const manifest: BlockManifest = {
  slug: 'select-reveal-media',
  name: 'Select Reveal Media',
  description: 'List of items: select one to reveal its description and media.',
  category: 'content',
  image: {
    light: '/images/blocks/content/contentSelectRevealMedia.png',
    dark: '/images/blocks/content/contentSelectRevealMedia.png',
  },
  component: SelectRevealMedia,
  editorFields: SelectRevealMediaEditorFields,
  example: SelectRevealMediaExample,
  defaults: values,
}
