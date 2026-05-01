import type { BlockManifest } from '@/lib/block-manifest-types'
import { GridCards } from './grid-cards'
import { GridCardsEditorFields } from './editor/fields'
import { GridCardsExample, values } from './grid-cards-example'

export const manifest: BlockManifest = {
  slug: 'grid-cards',
  name: 'Grid Cards',
  description: 'A grid of cards with a title and items.',
  category: 'content',
  image: {
    light: '/images/blocks/content/contentGridCards.png',
    dark: '/images/blocks/content/contentGridCards.png',
  },
  component: GridCards,
  editorFields: GridCardsEditorFields,
  example: GridCardsExample,
  defaults: values,
}
