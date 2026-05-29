import { CheckIcon } from 'lucide-react'

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'

export function Avatar07() {
  return (
    <Avatar size="lg">
      <AvatarImage
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
        alt="Sofia Rodrigues — verified"
      />
      <AvatarFallback>SR</AvatarFallback>
      <AvatarBadge>
        <CheckIcon />
      </AvatarBadge>
    </Avatar>
  )
}
