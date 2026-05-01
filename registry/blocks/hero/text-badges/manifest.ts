import type { BlockManifest } from '@/lib/block-manifest-types'
import { TextBadges } from './text-badges'
import { TextBadgesEditorFields } from './editor/fields'
import { TextBadgesExample, values } from './text-badges-example'

export const manifest: BlockManifest = {
  slug: 'text-badges',
  name: 'Text Badges',
  description: 'A text badges with a title, CTA and badges.',
  category: 'hero',
  image: {
    light: '/images/blocks/hero/heroTextBadges.png',
    dark: '/images/blocks/hero/heroTextBadges.png',
  },
  component: TextBadges,
  editorFields: TextBadgesEditorFields,
  example: TextBadgesExample,
  defaults: values,
}
