import { focusGridDefaultProps } from '../../defaults'
import type { FocusGridProps } from '../../types'

export const focusGridDescriptionAlwaysProps = {
  ...focusGridDefaultProps,
  descriptionOnFocus: false,
} satisfies FocusGridProps
