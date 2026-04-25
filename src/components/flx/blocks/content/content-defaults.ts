import { FocusGridDescriptionAlways } from './focus-grid/examples/focus-grid-description-always'
import { FocusGridDimUnfocused } from './focus-grid/examples/focus-grid-dim-unfocused'
import { FocusGridMinimalist } from './focus-grid/examples/focus-grid-minimalist'
import { values as badgeListValues } from './badge-list/badge-list-example'
import { values as centeredTextValues } from './centered-text/centered-text-example'
import { values as focusGridValues } from './focus-grid/focus-grid-example'
import { values as gridCardsValues } from './grid-cards/grid-cards-example'
import { values as gridContentCardsValues } from './grid-content-cards/grid-content-cards-example'
import { values as gridContentColumnsValues } from './grid-content-columns/grid-content-columns-example'
import { values as gridMediaCardsValues } from './grid-media-cards/grid-media-cards-example'
import { values as gridTwoColumnsValues } from './grid-two-columns/grid-two-columns-example'
import { values as gridWithMediaTopValues } from './grid-with-media-top/grid-with-media-top-example'
import { values as iconListValues } from './icon-list/icon-list-example'
import { values as mediaGridInteractiveValues } from './media-grid-interactive/media-grid-interactive-example'
import { values as selectRevealMediaValues } from './select-reveal-media/select-reveal-media-example'
import { values as tabsMediaValues } from './tabs-media/tabs-media-example'
import { values as titleWithMediaValues } from './title-with-media/title-with-media-example'

export const contentDefaults = {
  'centered-text': { default: centeredTextValues },
  'grid-cards': { default: gridCardsValues },
  'grid-two-columns': { default: gridTwoColumnsValues },
  'select-reveal-media': { default: selectRevealMediaValues },
  'tabs-media': { default: tabsMediaValues },
  'grid-media-cards': { default: gridMediaCardsValues },
  'grid-content-columns': { default: gridContentColumnsValues },
  'grid-content-cards': { default: gridContentCardsValues },
  'title-with-media': { default: titleWithMediaValues },
  'grid-with-media-top': { default: gridWithMediaTopValues },
  'icon-list': { default: iconListValues },
  'badge-list': { default: badgeListValues },
  'focus-grid': {
    default: focusGridValues,
    'dim-unfocused': FocusGridDimUnfocused,
    'description-always': FocusGridDescriptionAlways,
    minimalist: FocusGridMinimalist,
  },
  'media-grid-interactive': { default: mediaGridInteractiveValues },
} as const
