import { CameraIcon } from 'lucide-react'

import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'

// AvatarBadge sits bottom-right by default. Flip it to the top-right corner
// with `top-0 bottom-auto` so it rests on the edge rather than over the face.
export function Avatar13() {
  return (
    <Avatar size="lg">
      <AvatarImage
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
        alt="Sofia Rodrigues"
      />
      <AvatarFallback>SR</AvatarFallback>
      <AvatarBadge className="top-0 bottom-auto group-data-[size=lg]/avatar:[&>svg]:size-2">
        <CameraIcon />
      </AvatarBadge>
    </Avatar>
  )
}
