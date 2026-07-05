import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'

export function Spot02() {
  return (
    <div className="relative flex h-40 w-full items-center justify-center">
      <div className="relative h-28 w-56">
        <Card className="absolute top-0 left-1/2 h-16 w-44 -translate-x-1/2 scale-90 gap-0 p-0 opacity-40 shadow-sm" />
        <Card className="absolute top-3 left-1/2 h-16 w-50 -translate-x-1/2 scale-95 gap-0 p-0 opacity-70 shadow-sm" />

        <Card className="absolute top-8 left-1/2 w-56 -translate-x-1/2 flex-row items-center gap-3 p-3 shadow-sm">
          <Avatar className="size-9">
            <AvatarImage
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80"
              alt=""
            />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm leading-tight font-medium">Sarah Chen</span>
            <span className="text-muted-foreground text-xs leading-tight">
              mentioned you in Design review
            </span>
          </div>
        </Card>
      </div>
    </div>
  )
}
