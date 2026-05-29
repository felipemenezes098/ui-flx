import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function Avatar01() {
  return (
    <Avatar>
      <AvatarImage
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
        alt="Sofia Rodrigues"
      />
      <AvatarFallback>SR</AvatarFallback>
    </Avatar>
  )
}
