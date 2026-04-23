import { badgeListDefaultProps } from './badge-list/defaults'
import { centeredTextDefaultProps } from './centered-text/defaults'
import { focusGridDefaultProps } from './focus-grid/defaults'
import { FocusGridDescriptionAlways } from './focus-grid/examples/focus-grid-description-always'
import { FocusGridDimUnfocused } from './focus-grid/examples/focus-grid-dim-unfocused'
import { FocusGridMinimalist } from './focus-grid/examples/focus-grid-minimalist'
import { gridCardsDefaultProps } from './grid-cards/defaults'
import { gridContentCardsDefaultProps } from './grid-content-cards/defaults'
import { gridContentColumnsDefaultProps } from './grid-content-columns/defaults'
import { gridMediaCardsDefaultProps } from './grid-media-cards/defaults'
import { gridTwoColumnsDefaultProps } from './grid-two-columns/defaults'
import { gridWithMediaTopDefaultProps } from './grid-with-media-top/defaults'
import { iconListDefaultProps } from './icon-list/defaults'
import { mediaGridInteractiveDefaultProps } from './media-grid-interactive/defaults'
import { selectRevealMediaDefaultProps } from './select-reveal-media/defaults'
import { tabsMediaDefaultProps } from './tabs-media/defaults'
import { titleWithMediaDefaultProps } from './title-with-media/defaults'

export const contentDefaults = {
  'centered-text': { default: centeredTextDefaultProps },
  'grid-cards': { default: gridCardsDefaultProps },
  'grid-two-columns': { default: gridTwoColumnsDefaultProps },
  'select-reveal-media': { default: selectRevealMediaDefaultProps },
  'tabs-media': { default: tabsMediaDefaultProps },
  'grid-media-cards': { default: gridMediaCardsDefaultProps },
  'grid-content-columns': { default: gridContentColumnsDefaultProps },
  'grid-content-cards': { default: gridContentCardsDefaultProps },
  'title-with-media': { default: titleWithMediaDefaultProps },
  'grid-with-media-top': { default: gridWithMediaTopDefaultProps },
  'icon-list': { default: iconListDefaultProps },
  'badge-list': { default: badgeListDefaultProps },
  'focus-grid': {
    default: focusGridDefaultProps,
    'dim-unfocused': FocusGridDimUnfocused,
    'description-always': FocusGridDescriptionAlways,
    minimalist: FocusGridMinimalist,
  },
  'media-grid-interactive': { default: mediaGridInteractiveDefaultProps },
} as const
