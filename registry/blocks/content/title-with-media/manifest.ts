import type { BlockManifest } from '@/lib/block-manifest-types'
import { TitleWithMedia } from './title-with-media'
import { TitleWithMediaEditorFields } from './editor/fields'
import { TitleWithMediaExample, values } from './title-with-media-example'

export const manifest: BlockManifest = {
  slug: 'title-with-media',
  name: 'Title With Media',
  description: 'A title with a media above the title.',
  category: 'content',
  image: {
    light: '/images/blocks/content/contentTitleWithMedia.png',
    dark: '/images/blocks/content/contentTitleWithMedia.png',
  },
  component: TitleWithMedia,
  editorFields: TitleWithMediaEditorFields,
  example: TitleWithMediaExample,
  defaults: values,
}
