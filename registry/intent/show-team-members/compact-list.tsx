import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'
import { cn } from '@/lib/utils'

const members = [
  {
    name: 'Sofia Rodrigues',
    role: 'Product designer',
    initials: 'SR',
    online: true,
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Liam Carter',
    role: 'Engineering manager',
    initials: 'LC',
    online: false,
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
  {
    name: 'Ana Moreira',
    role: 'Data scientist',
    initials: 'AM',
    online: false,
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
  },
]

export function CompactListDecision() {
  return (
    <div className="bg-card w-full max-w-xs rounded-xl border p-2 shadow-sm">
      <div className="flex items-center justify-between px-2 py-1.5">
        <span className="text-sm font-semibold">Members</span>
        <Badge variant="secondary" className="rounded-full">
          5
        </Badge>
      </div>
      <ItemGroup className="gap-0.5">
        {members.map((member) => (
          <Item key={member.name} size="sm" className="rounded-lg">
            <ItemMedia variant="image">
              <Avatar className="size-8">
                <AvatarImage src={member.src} alt={member.name} />
                <AvatarFallback>{member.initials}</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle className="flex items-center gap-1.5">
                {member.name}
                <span
                  className={cn(
                    'size-1.5 rounded-full',
                    member.online
                      ? 'bg-emerald-500'
                      : 'bg-muted-foreground/30',
                  )}
                />
              </ItemTitle>
              <ItemDescription>{member.role}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )
}
