import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const src =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'

export function Avatar04() {
  return (
    <div className="flex items-center gap-4">
      <Avatar size="sm">
        <AvatarImage src={src} alt="Sofia Rodrigues" />
        <AvatarFallback>SR</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src={src} alt="Sofia Rodrigues" />
        <AvatarFallback>SR</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src={src} alt="Sofia Rodrigues" />
        <AvatarFallback>SR</AvatarFallback>
      </Avatar>
    </div>
  )
}
