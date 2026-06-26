import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { Content05 } from './content-05'
import { Content05EditorFields } from './editor/fields'
import { Content05Example, values } from './content-05-example'
import { Content05DimUnfocused } from './examples/content-05-dim-unfocused'
import { Content05Minimalist } from './examples/content-05-minimalist'
import { Content05DescriptionAlways } from './examples/content-05-description-always'

export const manifest: BlockManifest = {
  slug: 'content-05',
  name: 'Content 05',
  description: 'A focus grid with items that can be focused and dimmed.',
  category: 'content',
  image: {
    light: '/images/blocks/content/content-05.png',
    dark: '/images/blocks/content/content-05-dark.png',
  },
  component: Content05,
  editorFields: Content05EditorFields,
  example: Content05Example,
  defaults: values,
  variations: {
    'dim-unfocused': Content05DimUnfocused,
    minimalist: Content05Minimalist,
    'description-always': Content05DescriptionAlways,
  },
}
