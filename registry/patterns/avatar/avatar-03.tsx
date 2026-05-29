import { UserIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export function Avatar03() {
  return (
    <Avatar>
      <AvatarFallback>
        <UserIcon className="size-4" />
      </AvatarFallback>
    </Avatar>
  )
}
