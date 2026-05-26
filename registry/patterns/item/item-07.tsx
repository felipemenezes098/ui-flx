import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/ui/item'

export function Item07() {
  return (
    <Item variant="outline" className="w-full max-w-md">
      <ItemMedia variant="image">
        <img
          src="https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=200&q=80"
          alt=""
        />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Mountain retreat</ItemTitle>
        <ItemDescription>Aspen, Colorado · 4 nights</ItemDescription>
      </ItemContent>
    </Item>
  )
}
