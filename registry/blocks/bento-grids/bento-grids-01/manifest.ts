import type { BlockManifest } from '@/lib/blocks/block-manifest-types'
import { BentoGrids01 } from './bento-grids-01'
import { BentoGrids01EditorFields } from './editor/fields'
import { BentoGrids01Example, values } from './bento-grids-01-example'

export const manifest: BlockManifest = {
  slug: 'bento-grids-01',
  name: 'Bento grids 01',
  description:
    'Three-column bento: primary tile (two-thirds) with title, description, CTA and media, plus supporting image cards.',
  category: 'bento-grids',
  image: {
    light: '/images/blocks/bento-grids/bento-grids-01.png',
    dark: '/images/blocks/bento-grids/bento-grids-01.png',
  },
  meta: {
    iframeHeight: 850,
  },
  component: BentoGrids01,
  editorFields: BentoGrids01EditorFields,
  example: BentoGrids01Example,
  defaults: values,
}
