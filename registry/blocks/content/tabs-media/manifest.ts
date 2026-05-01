import type { BlockManifest } from '@/lib/block-manifest-types'
import { TabsMedia } from './tabs-media'
import { TabsMediaEditorFields } from './editor/fields'
import { TabsMediaExample, values } from './tabs-media-example'

export const manifest: BlockManifest = {
  slug: 'tabs-media',
  name: 'Tabs Media',
  description: 'Tabbed navigation that reveals a media for each tab.',
  category: 'content',
  image: {
    light: '/images/blocks/content/contentTabsMedia.png',
    dark: '/images/blocks/content/contentTabsMedia.png',
  },
  meta: {
    iframeHeight: 800,
  },
  component: TabsMedia,
  editorFields: TabsMediaEditorFields,
  example: TabsMediaExample,
  defaults: values,
}
