import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'

const users = [
  {
    name: 'Sarah Chen',
    role: 'Product designer',
    initials: 'SC',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Marcus Lee',
    role: 'Engineering manager',
    initials: 'ML',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    name: 'Priya Patel',
    role: 'Data scientist',
    initials: 'PP',
    avatar:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
]

export function Item12() {
  return (
    <ItemGroup className="w-full max-w-md">
      {users.map((user) => (
        <Item key={user.name} variant="outline">
          <ItemMedia variant="image">
            <Avatar className="size-full rounded-sm">
              <AvatarImage src={user.avatar} alt="" />
              <AvatarFallback>{user.initials}</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{user.name}</ItemTitle>
            <ItemDescription>{user.role}</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm">
              Follow
            </Button>
          </ItemActions>
        </Item>
      ))}
    </ItemGroup>
  )
}
