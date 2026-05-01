import type { BlockManifest } from '@/lib/block-manifest-types'
import { HeroHeadlinePreview } from './hero-headline-preview'
import { HeroHeadlinePreviewEditorFields } from './editor/fields'
import { HeroHeadlinePreviewExample, values } from './hero-headline-preview-example'

export const manifest: BlockManifest = {
  slug: 'hero-headline-preview',
  name: 'Hero Headline Preview',
  description:
    'Centered headline, one primary CTA, and full-width preview media with a soft bottom fade.',
  category: 'hero',
  image: {
    light: '/images/blocks/hero/heroHeadlinePreview.png',
    dark: '/images/blocks/hero/heroHeadlinePreview.png',
  },
  meta: {
    iframeHeight: 860,
  },
  component: HeroHeadlinePreview,
  editorFields: HeroHeadlinePreviewEditorFields,
  example: HeroHeadlinePreviewExample,
  defaults: values,
}
