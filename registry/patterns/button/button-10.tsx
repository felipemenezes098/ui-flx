import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'

export function Button10() {
  return (
    <Button variant="outline" className="pl-1">
      <Avatar size="sm">
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="shadcn"
        />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      shadcn
    </Button>
  )
}
