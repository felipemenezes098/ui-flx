import type { BlockManifest } from '@/lib/block-manifest-types'
import { GridMediaCards } from './grid-media-cards'
import { GridMediaCardsEditorFields } from './editor/fields'
import { GridMediaCardsExample, values } from './grid-media-cards-example'

export const manifest: BlockManifest = {
  slug: 'grid-media-cards',
  name: 'Grid Media Cards',
  description: 'A grid of media cards with a title and items.',
  category: 'content',
  image: {
    light: '/images/blocks/content/contentGridMediaCards.png',
    dark: '/images/blocks/content/contentGridMediaCards.png',
  },
  component: GridMediaCards,
  editorFields: GridMediaCardsEditorFields,
  example: GridMediaCardsExample,
  defaults: values,
}
