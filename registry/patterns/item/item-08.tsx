import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'

export function Item08() {
  return (
    <Item variant="outline" className="w-full max-w-md">
      <ItemMedia variant="image">
        <Avatar className="size-full rounded-sm">
          <AvatarImage
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
            alt=""
          />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Sarah Chen</ItemTitle>
        <ItemDescription>Product designer · Berlin</ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          Follow
        </Button>
      </ItemActions>
    </Item>
  )
}
