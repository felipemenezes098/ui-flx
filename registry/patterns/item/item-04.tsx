import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from '@/components/ui/item'

export function Item04() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Item variant="outline" size="default">
        <ItemContent>
          <ItemTitle>Default size</ItemTitle>
          <ItemDescription>Comfortable padding and gap.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" size="sm">
        <ItemContent>
          <ItemTitle>Small size</ItemTitle>
          <ItemDescription>Denser rows for lists.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" size="xs">
        <ItemContent>
          <ItemTitle>Extra small</ItemTitle>
          <ItemDescription>Compact, menu-friendly.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}
