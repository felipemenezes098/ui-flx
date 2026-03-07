import { icons } from 'lucide-react'

export interface DynamicIconProps {
  name: keyof typeof icons
  size?: number
  className?: string
}
