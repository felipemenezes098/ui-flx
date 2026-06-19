import { icons } from 'lucide-react'

export interface DynamicIconProps {
  name: keyof typeof icons
  size?: number
  className?: string
}

function Icon({ name, size, className }: Readonly<DynamicIconProps>) {
  const LucideIcon = icons[name]

  if (!LucideIcon) {
    return null
  }

  return <LucideIcon size={size} className={className} />
}

export { Icon }
