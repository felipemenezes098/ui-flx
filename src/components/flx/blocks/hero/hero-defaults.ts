import { backgroundMediaDefaultProps } from './background-media/defaults'
import { textBadgesDefaultProps } from './text-badges/defaults'

export const heroDefaults = {
  'background-media': { default: backgroundMediaDefaultProps },
  'text-badges': { default: textBadgesDefaultProps },
} as const
