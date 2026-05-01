import type { BlockManifest } from '@/lib/block-manifest-types'
import { FocusGrid } from './focus-grid'
import { FocusGridEditorFields } from './editor/fields'
import { FocusGridExample, values } from './focus-grid-example'
import { FocusGridDimUnfocused } from './examples/focus-grid-dim-unfocused'
import { FocusGridMinimalist } from './examples/focus-grid-minimalist'
import { FocusGridDescriptionAlways } from './examples/focus-grid-description-always'

export const manifest: BlockManifest = {
  slug: 'focus-grid',
  name: 'Focus Grid',
  description: 'A focus grid with items that can be focused and dimmed.',
  category: 'content',
  image: {
    light: '/images/blocks/content/contentFocusGrid.png',
    dark: '/images/blocks/content/contentFocusGrid.png',
  },
  component: FocusGrid,
  editorFields: FocusGridEditorFields,
  example: FocusGridExample,
  defaults: values,
  variations: {
    'dim-unfocused': FocusGridDimUnfocused,
    minimalist: FocusGridMinimalist,
    'description-always': FocusGridDescriptionAlways,
  },
}
