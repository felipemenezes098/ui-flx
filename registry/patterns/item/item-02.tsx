import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from '@/components/ui/item'

export function Item02() {
  return (
    <Item className="w-full max-w-md">
      <ItemContent>
        <ItemTitle>Two-factor authentication</ItemTitle>
        <ItemDescription>
          Add an extra layer of security to your account.
        </ItemDescription>
      </ItemContent>
    </Item>
  )
}
