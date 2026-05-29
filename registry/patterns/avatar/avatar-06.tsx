import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'

export function Avatar06() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
          alt="Sofia Rodrigues — online"
        />
        <AvatarFallback>SR</AvatarFallback>
        <AvatarBadge className="bg-emerald-500" />
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
          alt="Liam Carter — away"
        />
        <AvatarFallback>LC</AvatarFallback>
        <AvatarBadge className="bg-amber-500" />
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
          alt="Ana Moreira — offline"
        />
        <AvatarFallback>AM</AvatarFallback>
        <AvatarBadge className="bg-muted-foreground" />
      </Avatar>
    </div>
  )
}
