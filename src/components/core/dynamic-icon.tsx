import { icons } from 'lucide-react'

interface IconProps {
  name: keyof typeof icons
  size?: number
  className?: string
}

function Icon({ name, size, className }: Readonly<IconProps>) {
  const LucideIcon = icons[name]

  if (!LucideIcon) {
    return null
  }

  return <LucideIcon size={size} className={className} />
}

export { Icon }
