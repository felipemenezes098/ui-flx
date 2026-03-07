import { badgeListDefaultProps } from './badge-list/defaults'
import { centeredTextDefaultProps } from './centered-text/defaults'
import { focusGridDefaultProps } from './focus-grid/defaults'
import { focusGridDescriptionAlwaysProps } from './focus-grid/examples/description-always/defaults'
import { focusGridDimUnfocusedProps } from './focus-grid/examples/dim-unfocused/defaults'
import { focusGridMinimalistProps } from './focus-grid/examples/minimalist/defaults'
import { gridCardsDefaultProps } from './grid-cards/defaults'
import { gridContentColumnsDefaultProps } from './grid-content-columns/defaults'
import { gridMediaCardsDefaultProps } from './grid-media-cards/defaults'
import { gridTwoColumnsDefaultProps } from './grid-two-columns/defaults'
import { gridWithMediaTopDefaultProps } from './grid-with-media-top/defaults'
import { iconListDefaultProps } from './icon-list/defaults'
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
  'title-with-media': { default: titleWithMediaDefaultProps },
  'grid-with-media-top': { default: gridWithMediaTopDefaultProps },
  'icon-list': { default: iconListDefaultProps },
  'badge-list': { default: badgeListDefaultProps },
  'focus-grid': {
    default: focusGridDefaultProps,
    'dim-unfocused': focusGridDimUnfocusedProps,
    'description-always': focusGridDescriptionAlwaysProps,
    minimalist: focusGridMinimalistProps,
  },
} as const
