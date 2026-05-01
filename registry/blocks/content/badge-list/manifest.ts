import type { BlockManifest } from '@/lib/block-manifest-types'
import { BadgeList } from './badge-list'
import { BadgeListEditorFields } from './editor/fields'
import { BadgeListExample, values } from './badge-list-example'

export const manifest: BlockManifest = {
  slug: 'badge-list',
  name: 'Badge List',
  description: 'List of badges with a title and items.',
  category: 'content',
  image: {
    light: '/images/blocks/content/contentBadgeList.png',
    dark: '/images/blocks/content/contentBadgeList.png',
  },
  component: BadgeList,
  editorFields: BadgeListEditorFields,
  example: BadgeListExample,
  defaults: values,
}
