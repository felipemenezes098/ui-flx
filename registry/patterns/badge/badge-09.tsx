import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'

export function Badge09() {
  return (
    <Badge variant="secondary" className="h-6 gap-1.5 pl-0.5">
      <Avatar className="size-5">
        <AvatarImage
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
          alt="Sofia Rodrigues"
        />
        <AvatarFallback>SR</AvatarFallback>
      </Avatar>
      Sofia Rodrigues
    </Badge>
  )
}
