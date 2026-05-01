import type { BlockManifest } from '@/lib/block-manifest-types'
import { IconList } from './icon-list'
import { IconListEditorFields } from './editor/fields'
import { IconListExample, values } from './icon-list-example'

export const manifest: BlockManifest = {
  slug: 'icon-list',
  name: 'Icon List',
  description: 'List of icons with a title and items.',
  category: 'content',
  image: {
    light: '/images/blocks/content/contentIconList.png',
    dark: '/images/blocks/content/contentIconList.png',
  },
  component: IconList,
  editorFields: IconListEditorFields,
  example: IconListExample,
  defaults: values,
}
