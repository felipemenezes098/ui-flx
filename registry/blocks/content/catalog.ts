import { ContentConcept } from '@/lib/blocks/block-concepts'
import type { BlockCategoryRow } from '@/lib/blocks/block-manifest-types'

import { manifest as badgeListManifest } from './badge-list/manifest'
import { manifest as centeredTextManifest } from './centered-text/manifest'
import { manifest as focusGridManifest } from './focus-grid/manifest'
import { manifest as gridCardsManifest } from './grid-cards/manifest'
import { manifest as gridContentCardsManifest } from './grid-content-cards/manifest'
import { manifest as gridContentColumnsManifest } from './grid-content-columns/manifest'
import { manifest as gridMediaCardsManifest } from './grid-media-cards/manifest'
import { manifest as gridTwoColumnsManifest } from './grid-two-columns/manifest'
import { manifest as gridWithMediaTopManifest } from './grid-with-media-top/manifest'
import { manifest as iconListManifest } from './icon-list/manifest'
import { manifest as mediaGridInteractiveManifest } from './media-grid-interactive/manifest'
import { manifest as selectRevealMediaManifest } from './select-reveal-media/manifest'
import { manifest as tabsMediaManifest } from './tabs-media/manifest'
import { manifest as titleWithMediaManifest } from './title-with-media/manifest'

export const contentCategory: BlockCategoryRow = {
  slug: 'content',
  category: 'Content',
  description: 'Content components to display information in an organized way.',
  type: 'content',
  image: tabsMediaManifest.image,
  concept: ContentConcept,
  blocks: [
    selectRevealMediaManifest,
    gridMediaCardsManifest,
    tabsMediaManifest,
    gridContentCardsManifest,
    focusGridManifest,
    gridTwoColumnsManifest,
    gridContentColumnsManifest,
    centeredTextManifest,
    gridCardsManifest,
    mediaGridInteractiveManifest,
    gridWithMediaTopManifest,
    iconListManifest,
    badgeListManifest,
    titleWithMediaManifest,
  ],
}
