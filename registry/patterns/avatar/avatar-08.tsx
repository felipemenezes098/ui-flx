import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function Avatar08() {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
          alt="Sofia Rodrigues"
        />
        <AvatarFallback>SR</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-sm font-medium">Sofia Rodrigues</span>
        <span className="text-muted-foreground text-xs">sofia@example.com</span>
      </div>
    </div>
  )
}
