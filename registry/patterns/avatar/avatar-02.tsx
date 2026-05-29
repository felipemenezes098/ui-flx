import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// Empty src forces the AvatarFallback to render — initials are the fallback.
export function Avatar02() {
  return (
    <Avatar>
      <AvatarImage src="" alt="Liam Carter" />
      <AvatarFallback>LC</AvatarFallback>
    </Avatar>
  )
}
