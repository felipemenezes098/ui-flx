import type { BlockManifest } from '@/lib/block-manifest-types'
import { GridMediaCards } from './grid-media-cards'
import { ShowcaseGridMediaCardsEditorFields } from './editor/fields'
import { ShowcaseGridMediaCardsExample, values } from './grid-media-cards-example'

export const manifest: BlockManifest = {
  slug: 'showcase-grid-media-cards',
  name: 'Grid Media Cards',
  description: 'Grid with media cards to display information.',
  category: 'showcase',
  image: {
    light: '/images/blocks/showcase/showcaseGridImageCards.png',
    dark: '/images/blocks/showcase/showcaseGridImageCards.png',
  },
  component: GridMediaCards,
  editorFields: ShowcaseGridMediaCardsEditorFields,
  example: ShowcaseGridMediaCardsExample,
  defaults: values,
}
