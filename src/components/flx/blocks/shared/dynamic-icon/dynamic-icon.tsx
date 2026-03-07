import { icons } from 'lucide-react'

import { DynamicIconProps } from './types'

function Icon({ name, size, className }: Readonly<DynamicIconProps>) {
  const LucideIcon = icons[name]

  if (!LucideIcon) {
    return null
  }

  return <LucideIcon size={size} className={className} />
}

export { Icon }
