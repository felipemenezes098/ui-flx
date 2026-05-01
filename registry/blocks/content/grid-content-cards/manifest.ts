import type { BlockManifest } from '@/lib/block-manifest-types'
import { GridContentCards } from './grid-content-cards'
import { GridContentCardsEditorFields } from './editor/fields'
import { GridContentCardsExample, values } from './grid-content-cards-example'

export const manifest: BlockManifest = {
  slug: 'grid-content-cards',
  name: 'Grid Content Cards',
  description:
    'Two-column grid of cards: title, description, and image at the bottom.',
  category: 'content',
  image: {
    light: '/images/blocks/content/gridContentCards.png',
    dark: '/images/blocks/content/gridContentCards.png',
  },
  component: GridContentCards,
  editorFields: GridContentCardsEditorFields,
  example: GridContentCardsExample,
  defaults: values,
}
